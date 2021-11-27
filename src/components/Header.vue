<template>
  <div class="daicaphong-header" :style="style">
    <div
      class="daicaphong-header--logo"
      :style="{ visibility: !style.isHiddenLogo ? null : 'hidden' }"
    >
      <img alt="Simple note" src="@/assets/logo.png" width="54" height="54"/>
      <h1>Simple note</h1>
    </div>
    <div class="daicaphong-header--store-info">
      <ul>
        <li :class="{ 'is-offline': isOffline }">
          <span class="daicaphong-header--label">Simple note</span>
          <span class="daicaphong-header--value">{{
              isOffline ? 'Offline' : 'Online'
            }}</span>
        </li>
        <li v-if="isRefresh" class="is-offline">
          <span class="daicaphong-header--label">Refresh browser</span>
          <span class="daicaphong-header--value">
            <svg
              style="width:20px;height:20px"
              viewBox="0 0 24 24"
              class="daicaphong-pointer"
              @click="refreshBrowser"
            >
              <path
                fill="currentColor"
                d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { unix, endOfToday } from '@/utils/date'

export default {
  name: 'Header',
  props: {
    isRefresh: {
      type: Boolean,
      require: true,
      default: true
    },
    isOffline: {
      type: Boolean,
      require: true,
      default: true
    }
  },
  data () {
    return {
      cacheType: 'ocg_devtool_style',
      style: {}
    }
  },
  created () {
    this.fetchHolidayStyle()
  },
  methods: {
    async fetchHolidayStyle () {
      const storage = await this.getStorageWithExpire(this.cacheType)
      if (storage) {
        const style = JSON.parse(storage)
        delete style.expire
        this.style = style
        return
      }

      fetch(
        'https://a0a0a62f-a373-4f0a-bd2a-1dea0a596890.mock.pstmn.io/daicaphong-devtool/style-holiday.json'
      )
        .then(r => r.json())
        .then(result => {
          if (result.success) {
            if (unix(result.style.expire) >= unix()) {
              this.setStorageWithExpire(
                this.cacheType,
                JSON.stringify(result.style),
                unix(result.style.expire)
              )
              this.style = result.style
            } else {
              this.setStorageWithExpire(
                this.cacheType,
                JSON.stringify({ expire: result.style.expire }),
                endOfToday()
              )
            }
          }
        })
        .catch(() => {
          console.error('Fetch holiday style error')
        })
    },
    async getStorageWithExpire (key) {
      try {
        const promises = [
          browser.storage.local.get(`${key}_expire`),
          browser.storage.local.get(key)
        ]
        const [expire, storage] = await Promise.all(promises)

        if (
          expire[`${key}_expire`] &&
          parseInt(expire[`${key}_expire`]) >= unix() &&
          storage
        ) {
          return storage[key]
        } else {
          browser.storage.local.remove([key, `${key}_expire`])
        }

        return ''
      } catch (e) {
        return ''
      }
    },
    setStorageWithExpire (key, value, valueExpire) {
      try {
        browser.storage.local.set({
          [`${key}_expire`]: valueExpire.toString()
        })
        browser.storage.local.set({ [key]: value })
      } catch (e) {
        browser.storage.local.remove([key, `${key}_expire`])
      }
    },
    refreshBrowser () {
      browser.tabs.query({
        currentWindow: true,
        active: true
      }).then(tab => {
        browser.tabs.update(tab[0].id, { url: tab[0].url })
      })
    }
  }
}
</script>
