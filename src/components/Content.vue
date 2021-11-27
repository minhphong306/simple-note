<template>
  <div class="daicaphong-tabs is-vertical">
    <nav class="tabs is-boxed">
      <ul>
        <!--        <li class=""><a><span class="icon"><svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path-->
        <!--          fill="currentColor"-->
        <!--          d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg></span><span> Info </span></a>-->
        <!--        </li>-->
        <li class="is-active">
          <a>
            <span class="icon">
              <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path
                fill="currentColor"
                d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z"></path>
              </svg>
        </span>
            <span> Ghi chú </span></a>
        </li>
        <!--        <li class=""><a><span class="icon"><svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path-->
        <!--          fill="currentColor"-->
        <!--          d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg></span><span> Info </span></a>-->
        <!--        </li>-->
        <li class="">
          <a>
            <span class="icon">
              <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path
                fill="currentColor"
                d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z"></path>
              </svg>
        </span>
            <span> Storage </span></a>
        </li>

        <!--        <li class=""><a><span class="icon"><svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path-->
        <!--          fill="currentColor"-->
        <!--          d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path></svg></span><span> Link </span></a>-->
        <!--        </li>-->
        <!--        <li class=""><a><span class="icon"><svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path-->
        <!--          fill="currentColor"-->
        <!--          d="M22,13.5C22,15.26 20.7,16.72 19,16.96V20A2,2 0 0,1 17,22H13.2V21.7A2.7,2.7 0 0,0 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4A2,2 0 0,1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7A2,2 0 0,1 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17A2,2 0 0,1 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5A1.5,1.5 0 0,0 20,13.5A1.5,1.5 0 0,0 18.5,12H17V7H12V5.5A1.5,1.5 0 0,0 10.5,4A1.5,1.5 0 0,0 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z"></path></svg></span><span> About </span></a>-->
        <!--        </li>-->
      </ul>
    </nav>
    <section class="tab-content">
      <div class="daicaphong-tool tab-item">
        <div class="daicaphong-item"><h2 class="daicaphong-item-header"> Danh sách ghi chú </h2>
          <div class="daicaphong-item-content">
            <p v-for="item in data" :key="item.key">{{item.key}} : {{item.value}}</p>
          </div>
        </div>
        <!--        <div class="daicaphong-item"><h2 class="daicaphong-item-header"> Params </h2>-->
        <!--          <div class="daicaphong-item-content">-->
        <!--            <button type="button" class="daicaphong-button daicaphong-button&#45;&#45;primary">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M12,5C12.74,5 13.47,5.1 14.15,5.29L15.78,2.46C16.06,2 16.67,1.82 17.15,2.1C17.63,2.37 17.79,3 17.5,3.46L16,6.07C17.22,6.78 18.23,7.79 18.93,9H5.07C5.77,7.79 6.78,6.78 8,6.07L6.5,3.46C6.21,3 6.37,2.37 6.85,2.1C7.33,1.82 7.94,2 8.22,2.46L9.85,5.29C10.53,5.1 11.26,5 12,5M20,13C20,17.17 16.82,20.59 12.75,20.97V10.5H19.6C19.86,11.29 20,12.13 20,13M4,13C4,12.13 4.14,11.29 4.4,10.5H11.25V20.97C7.18,20.59 4,17.17 4,13Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Sbase debug</span></button>-->
        <!--            <button type="button" class="daicaphong-button daicaphong-button&#45;&#45;primary">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M12,20L15.46,14H15.45C15.79,13.4 16,12.73 16,12C16,10.8 15.46,9.73 14.62,9H19.41C19.79,9.93 20,10.94 20,12A8,8 0 0,1 12,20M4,12C4,10.54 4.39,9.18 5.07,8L8.54,14H8.55C9.24,15.19 10.5,16 12,16C12.45,16 12.88,15.91 13.29,15.77L10.89,19.91C7,19.37 4,16.04 4,12M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M12,4C14.96,4 17.54,5.61 18.92,8H12C10.06,8 8.45,9.38 8.08,11.21L5.7,7.08C7.16,5.21 9.44,4 12,4M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Render csr</span></button>-->
        <!--          </div>-->
        <!--          <div class="daicaphong-item-content">-->
        <!--            <div class="daicaphong-input daicaphong-input-group"><input type="text" autocomplete="off"-->
        <!--                                                                        placeholder="Shop theme id"-->
        <!--                                                                        class="daicaphong-input__inner">-->
        <!--              <button type="button" class="daicaphong-button daicaphong-button&#45;&#45;primary is-disabled">-->
        <!--                <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                  <path fill="currentColor"-->
        <!--                        d="M3 4V16H21V4H3M3 2H21C22.1 2 23 2.89 23 4V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H14V20H16V22H8V20H10V18H3C2.47 18 1.96 17.79 1.59 17.41C1.21 17.04 1 16.53 1 16V4C1 2.89 1.89 2 3 2M10.84 8.93C11.15 8.63 11.57 8.45 12 8.45C12.43 8.46 12.85 8.63 13.16 8.94C13.46 9.24 13.64 9.66 13.64 10.09C13.64 10.53 13.46 10.94 13.16 11.25C12.85 11.56 12.43 11.73 12 11.73C11.57 11.73 11.15 11.55 10.84 11.25C10.54 10.94 10.36 10.53 10.36 10.09C10.36 9.66 10.54 9.24 10.84 8.93M10.07 12C10.58 12.53 11.28 12.82 12 12.82C12.72 12.82 13.42 12.53 13.93 12C14.44 11.5 14.73 10.81 14.73 10.09C14.73 9.37 14.44 8.67 13.93 8.16C13.42 7.65 12.72 7.36 12 7.36C11.28 7.36 10.58 7.65 10.07 8.16C9.56 8.67 9.27 9.37 9.27 10.09C9.27 10.81 9.56 11.5 10.07 12M6 10.09C6.94 7.7 9.27 6 12 6C14.73 6 17.06 7.7 18 10.09C17.06 12.5 14.73 14.18 12 14.18C9.27 14.18 6.94 12.5 6 10.09Z"></path>-->
        <!--                </svg>-->
        <!--                <span>Preview</span></button>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="daicaphong-item"><h2 class="daicaphong-item-header"> Report page speed </h2>-->
        <!--          <div class="daicaphong-item-content">-->
        <!--            <button type="button" class="daicaphong-button daicaphong-button&#45;&#45;primary">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Gtmetrix</span></button>-->
        <!--            <button type="button" class="daicaphong-button daicaphong-button&#45;&#45;primary">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Google</span></button>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="daicaphong-item"><h2 class="daicaphong-item-header"> Cart </h2>-->
        <!--          <div class="daicaphong-item-content">-->
        <!--            <button type="button" title="Cart will automatically copy data, send it to the person who needs to share"-->
        <!--                    class="daicaphong-button daicaphong-button&#45;&#45;primary">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M12,0L8,4H10V8H14V4H16M1,2V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Copy cart</span></button>-->
        <!--            <button type="button" title="Click on 'import cart', paste the copied data cart and click import"-->
        <!--                    class="daicaphong-button daicaphong-button&#45;&#45;primary">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M10,0V4H8L12,8L16,4H14V0M1,2V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Paste cart</span></button>-->
        <!--            <button type="button" class="daicaphong-button daicaphong-button&#45;&#45;danger">-->
        <!--              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">-->
        <!--                <path fill="currentColor"-->
        <!--                      d="M14.12,8.53L12,6.41L9.88,8.54L8.46,7.12L10.59,5L8.47,2.88L9.88,1.47L12,3.59L14.12,1.46L15.54,2.88L13.41,5L15.53,7.12L14.12,8.53M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22A2,2 0 0,1 5,20A2,2 0 0,1 7,18M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22A2,2 0 0,1 15,20A2,2 0 0,1 17,18M7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7A2,2 0 0,1 5,15C5,14.65 5.09,14.32 5.25,14.04L6.6,11.59L3,4H1V2H4.27L5.21,4L6.16,6L8.4,10.73L8.53,11H15.55L18.31,6L19.41,4H19.42L21.16,4.96L17.3,11.97C16.96,12.59 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75Z"></path>-->
        <!--              </svg>-->
        <!--              <span>Remove cart</span></button>&lt;!&ndash;&ndash;&gt;</div>-->
        <!--        </div>&lt;!&ndash;&ndash;&gt;-->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Content',
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  },
  props: {
    data: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
