import { Skeleton } from '@mui/material';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

export const AsyncComponentFallback = ({ children }: Props) => {
  return (
    <Suspense
      fallback={
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      }
    >
      {children}
    </Suspense>
  );
};
