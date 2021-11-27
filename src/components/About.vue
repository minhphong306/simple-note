<template>
  <div class="daicaphong-feedback">
    <div class="daicaphong-item">
      <h2 class="daicaphong-item-header">
        Need Help?
      </h2>
      <div class="daicaphong-item-content">
        <p>Send us a <a href="mailto:hoa.nx.dev@gmail.com">bug report</a></p>
      </div>
    </div>
    <div class="daicaphong-item">
      <h2 class="daicaphong-item-header">
        Copyright
      </h2>
      <div class="daicaphong-item-content">
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
