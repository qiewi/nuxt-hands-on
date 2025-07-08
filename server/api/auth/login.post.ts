import { createError, eventHandler, readBody } from 'h3'
/*
 * DISCLAIMER!
 * This is a demo implementation - bypassing external API for development
 */

export default eventHandler(async event => {
  const body = await readBody(event)

  // Mock successful login response (bypassing external API)
  console.log('Mock login attempt with:', body)

  // You can add basic validation if needed
  if (!body.identifier || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and password are required',
    })
  }

  // Mock successful response
  const mockResponse = {
    jwt: 'mock-jwt-token-12345',
    data: {
      id: 1,
      username: body.identifier,
      email: `${body.identifier}@example.com`,
      firstName: 'Demo',
      lastName: 'User',
    },
  }

  console.log('Mock login successful for user:', body.identifier)

  return {
    token: {
      accessToken: mockResponse.jwt,
      refreshToken: mockResponse.jwt,
    },
  }
})
