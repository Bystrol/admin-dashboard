import { Skeleton } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  isLoading: boolean;
  component: ReactNode;
}

export const SkeletonFallback = ({ isLoading, component }: Props) => {
  if (isLoading) {
    return <Skeleton />;
  }

  return component;
};
