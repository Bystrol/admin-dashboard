import { HomeIcon } from '@/icons/routes/home';

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
] as const;
