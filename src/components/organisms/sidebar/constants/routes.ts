import { HomeIcon } from '@/icons/routes/home';
import { SettingsIcon } from '@/icons/routes/settings';

export const sidebarRouteGroups = [
  {
    id: 'home',
    icon: HomeIcon,
    title: 'routes.dashboard.title',
    routes: [
      {
        id: 'overview',
        title: 'routes.dashboard.routes.overview',
        href: '/',
      },
      {
        id: 'orders',
        title: 'routes.dashboard.routes.orders',
        href: '/orders',
      },
    ],
  },
  {
    id: 'settings',
    icon: SettingsIcon,
    title: 'routes.settings.title',
    routes: [
      {
        id: 'account',
        title: 'routes.settings.routes.account',
        href: '/account',
      },
    ],
  },
] as const;
