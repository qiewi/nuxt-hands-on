import { readBody } from 'h3'
import proxyApi from '~/utils/proxyApi'

export default defineEventHandler(async event => {
  const proxies = proxyApi(/^\/api\/app\//, event)

  const apiData = await $fetch(proxies.target, {
    headers: proxies.headers,
    method: 'POST',
    body: await readBody(event),
  })

  return apiData
})
