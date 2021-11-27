/**
 * Get state
 * @returns {Promise<unknown>}
 */
export const getStateStore = () => {
  return new Promise(resolve => {
    const element = document.getElementById("ocg-devtool");
    if (element) {
      element.parentNode.removeChild(element);
    }
    const actualCode =
      "(" +
      function() {
        const urlParams = new URLSearchParams(window.location.search);
        const cartToken = urlParams.get("cart_token");
        const checkoutToken = urlParams.get("checkout_token");
        const app = document.getElementById("app");
        let state = {};
        if (
          app &&
          app.__vue__ &&
          app.__vue__.$store &&
          app.__vue__.$store.state
        ) {
          state = Object.assign({ shop: { id: 0 } }, app.__vue__.$store.state);
          if (state.bootstrap) {
            localStorage.setItem(
              "devtool_shop_theme_id",
              `${state.bootstrap.shopId}_${state.bootstrap.themeBuild.shop_theme_id}`
            );
            state.shop.id = state.bootstrap.shopId;
          }
        }

        const appVue = window.registerPlugin && window.registerPlugin();
        if (
          appVue &&
          appVue.context &&
          appVue.context.store &&
          appVue.context.store.state
        ) {
          state = Object.assign(
            {
              isNext: true,
              currentRoute: {
                params:
                  appVue.config.globalProperties.$router.currentRoute.value
                    .params,
                fullPath:
                  appVue.config.globalProperties.$router.currentRoute.value
                    .fullPath,
                query:
                  appVue.config.globalProperties.$router.currentRoute.value
                    .query,
                name:
                  appVue.config.globalProperties.$router.currentRoute.value.name
              },
              pageContext: window.sbsdk.page.getContext()
            },
            appVue.context.store.state
          );
          localStorage.setItem(
            "devtool_shop_theme_id",
            `${state.shop.id}_${state.theme.shop_theme_id}`
          );
        }

        const body = document.getElementsByTagName("body")[0];
        if (body && body.getAttribute("data-sf")) {
          state.isNext = true;
          state.env = body.getAttribute("data-sf");
        }

        const errorPage = document.getElementById("page_error");
        if (errorPage && errorPage.getAttribute("data-error")) {
          state.isNext = true;
          state.errorMessage = errorPage.getAttribute("data-error");
        }

        const sbaseShop = localStorage.getItem("sbase_shop");
        const moreState = {};
        if (sbaseShop) {
          const decodeShop = decodeURI(atob(JSON.parse(sbaseShop)));
          moreState["shopId"] = JSON.parse(decodeShop).id;
          moreState["userId"] = JSON.parse(decodeShop).user_id;

          const crossStorage = localStorage.getItem("devtool_cross_storage");
          if (crossStorage) {
            const crossUser = JSON.parse(crossStorage);
            if (crossUser.id === moreState["userId"]) {
              moreState["crossUser"] = crossUser;
            }
          }
        }
        const accessToken = localStorage.getItem("sbase_shop-access-token");
        if (accessToken) {
          moreState["accessToken"] = JSON.parse(accessToken);
        }

        const shopThemeId = localStorage.getItem("devtool_shop_theme_id");
        if ((state.shop || moreState["shopId"]) && shopThemeId) {
          const shopId = moreState["shopId"] || state.shop.id;
          const shopThemeIdSplice = shopThemeId.split("_");
          if (shopId === Number(shopThemeIdSplice[0])) {
            moreState["shopThemeId"] = shopThemeIdSplice[1];
          }
        }

        state = Object.assign({}, state, moreState);
        sessionStorage.setItem("ocgSharedState", JSON.stringify(state));

        if (cartToken && checkoutToken) {
          const keyCartToken = state.isNext
            ? "cartToken"
            : "shop/carts/current-cart-token";
          const keyCartCheckoutToken = state.isNext
            ? "cartCheckoutToken"
            : "shop/carts/current-checkout-token";
          localStorage.removeItem(keyCartToken);
          localStorage.removeItem(keyCartCheckoutToken);
          setTimeout(function() {
            localStorage.setItem(keyCartToken, cartToken);
            localStorage.setItem(keyCartCheckoutToken, checkoutToken);
            window.location = `${window.location.origin}${window.location.pathname}`;
          }, 1000);
        }
      } +
      ")();";
    const script = document.createElement("script");
    script.id = "ocg-devtool";
    script.type = "text/javascript";
    script.textContent = actualCode;
    document.getElementsByTagName("head")[0].appendChild(script);
    resolve();
  });
};

/**
 * Get cross storage
 * @returns {Promise<unknown>}
 */
export const getCrossStorage = () => {
  return new Promise(resolve => {
    if (typeof window.CrossStorageClient === "undefined") {
      return resolve(false);
    }
    let accountUrl = "accounts.dev.shopbase.net";
    if (window.location.origin.indexOf("stag") > -1) {
      accountUrl = "accounts.stag.shopbase.net";
    }
    if (window.location.origin.indexOf(".myshopbase.net") === -1) {
      accountUrl = "accounts.shopbase.com";
    }
    const storage = new window.CrossStorageClient(
      "https://" + accountUrl + "/storage.html"
    );
    if (Object.keys(storage) === 0) {
      return resolve(false);
    }
    storage
      .onConnect()
      .then(() => storage.get("sbase_auth"))
      .then(res => {
        if (res !== null) {
          console.info("Set cross storage to local storage");
          localStorage.setItem(
            "devtool_cross_storage",
            window.decodeURI(window.atob(JSON.parse(res)))
          );
          resolve(true);
        }
      })
      .catch(err => {
        console.warn("Fetch cross storage error", err);
        resolve(false);
      });
  });
};
