export default defineEventHandler(async event => {
  const query = getQuery(event)

  const page = String(query['page[number]'] || '1')
  const size = String(query['page[size]'] || '10')
  const sort = String(query.sort || '-published_at')
  const append = query['append[]'] || []

  // Build the API URL
  const apiUrl = new URL('https://suitmedia-backend.suitdev.com/api/ideas')
  apiUrl.searchParams.set('page[number]', page)
  apiUrl.searchParams.set('page[size]', size)
  apiUrl.searchParams.set('sort', sort)

  // Handle append[] parameter (can be multiple)
  if (Array.isArray(append)) {
    append.forEach(a => apiUrl.searchParams.append('append[]', String(a)))
  } else if (append) {
    apiUrl.searchParams.append('append[]', String(append))
  }

  try {
    const response = await fetch(apiUrl.toString(), {
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch ideas:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch data from external API',
    })
  }
})
