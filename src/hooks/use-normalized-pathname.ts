'use client';

import { useCurrentLocale } from '@/locales/client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useNormalizedPathname = () => {
  const [normalizedPathname, setNormalizedPathname] = useState<string>();
  const locale = useCurrentLocale();
  const pathname = usePathname();

  const newPathname = pathname.replace(new RegExp(`^/${locale}`), '') || '/';

  useEffect(() => {
    setNormalizedPathname(newPathname);
  }, [pathname]);

  return normalizedPathname;
};
