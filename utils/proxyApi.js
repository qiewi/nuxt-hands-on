import { joinURL } from 'ufo'

export default (apiPath, ev) => {
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
  }

  // rewrite path
  const proxyUrl = useRuntimeConfig().API_URL
  const path = ev.path.replace(apiPath, '/api/')

  const target = joinURL(proxyUrl, path)

  return {
    headers,
    target,
  }
}
