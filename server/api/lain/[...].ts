// import { joinURL } from 'ufo'
// import type { NuxtError } from '#app'
// // import { proxyRequest } from 'h3'

// export default defineEventHandler(async event => {
//   const headers = {
//     accept: 'application/json',
//     Authorization: '',
//   }
//   const proxyUrl = useRuntimeConfig().API_LAIN
//   const path = event.path.replace(/^\/api\/lain\//, '/api/')
//   const target = joinURL(proxyUrl, path)

//   let apiData

//   try {
//     const data = await $fetch(target, {
//       headers,
//     })

//     apiData = data
//   } catch (error) {
//     // console.error({ errr: (error as NuxtError).data })

//     const res = (error as NuxtError).data

//     apiData = res

//     // throw createError({
//     //   fatal: true,
//     //   statusCode: res.error.status,
//     //   statusMessage: res.error.message,
//     // })
//   }
//   // console.log({ apiData })
//   return apiData
// })

import proxyApi from '~/utils/proxyApi'

export default defineEventHandler(async event => {
  const proxies = proxyApi(/^\/api\/lain\//, event)

  const apiData = await $fetch(proxies.target, {
    headers: proxies.headers,
  })

  return apiData
})
