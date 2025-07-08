import { eventHandler } from 'h3'

export default eventHandler(async () => {
  console.log('Mock pages API request')

  // Mock pages data
  const mockPagesData = {
    data: [
      {
        id: 1,
        Name: 'Home Page',
        Slug: 'home',
        Published: true,
      },
      {
        id: 2,
        Name: 'About Page',
        Slug: 'about',
        Published: true,
      },
      {
        id: 3,
        Name: 'Services Page',
        Slug: 'services',
        Published: true,
      },
      {
        id: 4,
        Name: 'Contact Page',
        Slug: 'contact',
        Published: true,
      },
    ],
  }

  console.log('Returning mock pages data')

  return mockPagesData
})
