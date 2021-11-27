import { getStateStore, getCrossStorage } from "@/helpers/inject";

/* Init when browser load */
const initScript = async function() {
  await getCrossStorage();
  await getStateStore();
};
initScript().then(() => {
  browser.runtime.onMessage.addListener(async function(request) {
    if (request.action === "getState") {
      await getStateStore();
      return Promise.resolve({
        state: sessionStorage.getItem("ocgSharedState") || ""
      });
    } else if (request.action === "clearFs") {
      localStorage.removeItem(`sbase_feature_switch_${request.shopId}`);
      localStorage.removeItem(`sbase_feature_switch_${request.shopId}_expire`);
      return Promise.resolve({ success: true });
    } else if (request.action === "clearCart") {
      localStorage.removeItem("shop/carts/current-cart-token");
      localStorage.removeItem("cartToken");
      return Promise.resolve({ success: true });
    } else {
      // Send nothing..
      return Promise.resolve({});
    }
  });
});
