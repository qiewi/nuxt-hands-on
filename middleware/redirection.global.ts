import redirectRules from './redirectRules'

export default defineNuxtRouteMiddleware((to, from) => {
  const items = redirectRules.data

  for (const rule of items) {
    if (to.path === rule.old_url) {
      return navigateTo(rule.new_url)
    }

    if (rule.old_url.includes('*')) {
      const oldBase = rule.old_url.replace('*', '')
      const newBase = rule.new_url.replace('*', '')

      if (to.path.startsWith(oldBase)) {
        // Append the dynamic part from the old URL to the new base
        const dynamicPart = to.path.slice(oldBase.length)
        return navigateTo(newBase + dynamicPart)
      }
    }
  }
})
