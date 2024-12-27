'use client';

import { colors } from '@/theme/colors';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { sidebarRouteGroups } from './constants/routes';
import { useI18n } from '@/locales/client';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@/icons/chevron-down';
import { useUserStore } from '@/store/user-store';
import Link from 'next/link';
import { useNormalizedPathname } from '@/hooks/use-normalized-pathname';

export const SidebarList = () => {
  const t = useI18n();
  const { openedRouteGroups, updateOpenedRouteGroups } = useUserStore();
  const normalizedPathname = useNormalizedPathname();

  const isRouteGroupOpen = (groupId: string) => openedRouteGroups.includes(groupId);

  const isRouteGroupActive = (routes: ReadonlyArray<{ href: string }>) =>
    routes.some((route) => normalizedPathname === route.href);

  const isRouteActive = (routeHref: string) => normalizedPathname === routeHref;

  const getRouteGroupColor = (routes: ReadonlyArray<{ href: string }>) =>
    isRouteGroupActive(routes) ? colors.primary[1] : colors.neutral[500];

  return (
    <List component="nav" disablePadding sx={{ marginTop: 3 }}>
      {sidebarRouteGroups.map((group) => (
        <Fragment key={group.id}>
          <ListItemButton
            sx={{ borderRadius: '4px' }}
            onClick={() => updateOpenedRouteGroups(group.id)}
          >
            <ListItemIcon sx={{ minWidth: '26px' }}>
              {<group.icon htmlColor={getRouteGroupColor(group.routes)} />}
            </ListItemIcon>
            <ListItemText
              primary={t(group.title)}
              slotProps={{
                primary: {
                  fontSize: '12px',
                  color: getRouteGroupColor(group.routes),
                },
              }}
            />
            <ChevronDownIcon
              htmlColor={getRouteGroupColor(group.routes)}
              sx={{
                rotate: isRouteGroupOpen(group.id) ? undefined : '-90deg',
                transition: 'all 200ms',
              }}
            />
          </ListItemButton>
          <Collapse in={isRouteGroupOpen(group.id)} timeout="auto" unmountOnExit>
            <List disablePadding>
              {group.routes.map((route) => (
                <Link key={route.id} href={route.href} style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    sx={{
                      borderRadius: '4px',
                      paddingLeft: '26px',
                      marginLeft: 2,
                      borderStyle: 'solid',
                      borderColor: 'primary.main',
                      borderLeftWidth: isRouteActive(route.href) ? 3 : 0,
                    }}
                  >
                    <ListItemText
                      primary={t(route.title)}
                      slotProps={{
                        primary: {
                          fontSize: '12px',
                          color: isRouteActive(route.href) ? 'textPrimary' : 'textSecondary',
                        },
                      }}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
};
