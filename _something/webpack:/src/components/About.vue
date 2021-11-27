<template>
  <div class="ocg-feedback">
    <div class="ocg-item">
      <h2 class="ocg-item-header">
        Need Help?
      </h2>
      <div class="ocg-item-content">
        <p>Send us a <a href="mailto:hoa.nx.dev@gmail.com">bug report</a></p>
      </div>
    </div>
    <div class="ocg-item">
      <h2 class="ocg-item-header">
        Copyright
      </h2>
      <div class="ocg-item-content">
        <p>
          This extension is powered by
          <a href="mailto:hoa.nx.dev@gmail.com">Jambon</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    redirectToExtension() {
      browser.tabs.create({
        url:
          "https://chrome.google.com/webstore/detail/sf-power/hmckjbknfohejmngijegobipgebckopo"
      });
    }
  }
};
</script>
