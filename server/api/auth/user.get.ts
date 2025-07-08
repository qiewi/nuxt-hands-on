import { createError, eventHandler, getRequestHeader } from 'h3'
import { extractTokenFromAuthorizationHeader } from '~/server/utils/session'

export default eventHandler(async event => {
  const authorizationHeader = getRequestHeader(event, 'Authorization')

  if (typeof authorizationHeader === 'undefined') {
    throw createError({
      statusCode: 403,
      statusMessage:
        'Need to pass valid Bearer-authorization header to access this endpoint',
    })
  }

  const requestAccessToken =
    extractTokenFromAuthorizationHeader(authorizationHeader)

  console.log('Mock user session request with token:', requestAccessToken)

  // Return mock user data (bypassing external API)
  const mockUser = {
    id: 1,
    username: 'demo-user',
    email: 'demo@example.com',
    firstName: 'Demo',
    lastName: 'User',
    profilePicture: {
      formats: {
        thumbnail: {
          url: '/icon.png',
        },
      },
    },
  }

  console.log('Returning mock user data:', mockUser)

  return mockUser
})
