export const getStorage = () => {
  const st = []
  for (const i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)

    st.push({
      key: key,
      value: value
    })
  }

  return st
}

// iterate localStorage
