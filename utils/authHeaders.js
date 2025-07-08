// import CryptoJS from 'crypto-js'

export default () => {
  const { data } = useAuth()
  const secret = process.env.NUXT_SECRET
  // const rtConfig = useRuntimeConfig()
  // Value token bisa berbeda tergantung dari API developernya, contoh:
  // data.value?.user.data.jwt
  // data.value?.user.data.user.token
  // data.value?.user.data.user.access_token dan lain sebagainya
  // cara mengetahuinya bisa dengan console.log atau print ke <pre><code>
  // console.log({ DATA: data.value?.user })
  const token = data.value?.user.token
  // const secret = rtConfig.NUXT_SECRET

  // const deccrytedToken = CryptoJS.AES.decrypt(token, secret).toString(
  //   CryptoJS.enc.Utf8,
  // )

  console.log({ token, secret })

  return {
    accept: 'application/json',
    Authorization: `Bearer ${secret}`,
  }
}
