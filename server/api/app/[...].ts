import proxyApi from '~/utils/proxyApi'

export default defineEventHandler(async event => {
  const proxies = proxyApi(/^\/api\/app\//, event)

  const apiData = await $fetch(proxies.target, {
    headers: proxies.headers,
  })

  return apiData
})
