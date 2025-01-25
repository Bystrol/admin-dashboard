import { Box, Skeleton } from '@mui/material';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

export const AsyncComponentFallback = ({ children }: Props) => {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Box>
      }
    >
      {children}
    </Suspense>
  );
};
