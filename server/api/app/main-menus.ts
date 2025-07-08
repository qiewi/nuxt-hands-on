import { eventHandler } from 'h3'

export default eventHandler(async () => {
  console.log('Mock main-menus API request')

  // Mock main menu data
  const mockMenuData = {
    data: [
      {
        id: 1,
        Title: 'Home',
        Url: '/',
        hasLanding: true,
        Order: 1,
        Child: [],
      },
      {
        id: 2,
        Title: 'About',
        Url: '/about',
        hasLanding: true,
        Order: 2,
        Child: [],
      },
      {
        id: 3,
        Title: 'Services',
        Url: '/services',
        hasLanding: true,
        Order: 3,
        Child: [
          {
            id: 4,
            Title: 'Web Development',
            Url: '/services/web-development',
            hasLanding: true,
            Order: 1,
          },
          {
            id: 5,
            Title: 'Mobile Development',
            Url: '/services/mobile-development',
            hasLanding: true,
            Order: 2,
          },
        ],
      },
      {
        id: 6,
        Title: 'Contact',
        Url: '/contact',
        hasLanding: true,
        Order: 4,
        Child: [],
      },
    ],
  }

  console.log('Returning mock main menu data')

  return mockMenuData
})
