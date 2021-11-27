/* Init when browser load */

const initScript = async function () {
  console.log('Hello, from content script')
}

initScript().then(() => {
  browser.runtime.onMessage.addListener(async function (request) {
    let data = {}
    switch (request.action) {
      case 'getStorage':
        data = getStorage()
        console.log('Got storage: ', data)
        break
      case 'aaa':
        break
      default:
        console.log('Default case execute: ', request)
        break
    }

    return Promise.resolve({
      data: data
    })
  })
})

function getStorage () {
  const st = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)

    st.push({
      key: key,
      value: value
    })
  }

  return st
}
