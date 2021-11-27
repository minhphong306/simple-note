<template>
  <div class="daicaphong-wrapper">
<!--    <notification/>-->
    <popup-header :is-refresh="isRefresh" :is-offline="isOffline"/>
    <popup-content :data="storage"/>
  </div>
</template>

<script>
import './popup.css'
// import Notification from '@/components/blocks/Notification.vue'
import PopupHeader from '@/components/Header.vue'
import PopupContent from '@/components/Content.vue'

export default {
  name: 'App',
  components: {
    // Notification,
    PopupHeader,
    PopupContent
  },
  computed: {
    isOffline () {
      return false
    }
  },
  data () {
    return {
      storage: {},
      isRefresh: false
    }
  },
  async mounted () {
    await this.$nextTick()
    const vm = this
    browser.tabs.query({
      currentWindow: true,
      active: true
    }).then(tab => {
      browser.tabs
        .sendMessage(tab[0].id, { action: 'getStorage' })
        .then(function (response) {
          console.log('Got response: ', response)
          vm.storage = response.data
          browser.browserAction.setBadgeText({
            text: 'Oh yeah',
            tabId: tab[0].id
          })
          browser.browserAction.setBadgeBackgroundColor({
            color: '#409eff',
            tabId: tab[0].id
          })
        })
        .catch(e => {
          const error = e.message || e || ''
          console.warn('Simple note devtool error: ', error)
          browser.browserAction.setBadgeText({
            text: 'Off',
            tabId: tab[0].id
          })
          browser.browserAction.setBadgeBackgroundColor({
            color: '#606266',
            tabId: tab[0].id
          })
          vm.isRefresh =
            (tab[0].url.startsWith('http://') ||
              tab[0].url.startsWith('https://')) &&
            error.indexOf('Could not establish connection') > -1
        })
    })
  }
}
</script>
