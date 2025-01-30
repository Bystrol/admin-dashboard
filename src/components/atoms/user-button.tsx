import { Button } from '@mui/material';
import { UserButton as ClerkUserButton } from '@clerk/nextjs';

export const UserButton = () => {
  return (
    <Button sx={{ borderRadius: '100%', minWidth: 0, width: 36, height: 36 }}>
      <ClerkUserButton userProfileMode="navigation" userProfileUrl="/account" />
    </Button>
  );
};
