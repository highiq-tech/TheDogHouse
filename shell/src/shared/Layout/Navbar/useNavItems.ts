import { useAuthStore } from 'modules/auth/application'

import { INavItem } from './INavItem'

export const useNavItems = () => {
  const isAuthenticated = useAuthStore(store => store.isAuthenticated)
  return isAuthenticated ? NAV_ITEMS : NAV_ITEMS.slice(0, NAV_ITEMS.length - 1)
}

export const NAV_ITEMS: Array<INavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Pet Supplies',
    href: '/products',
  },
  {
    label: 'Cart',
    href: '/cart/1',
  },
  {
    label: 'Sign In',
    href: '/sign-in',
  },
]
