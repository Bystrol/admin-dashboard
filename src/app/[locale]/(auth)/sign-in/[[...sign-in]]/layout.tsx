import { Box } from '@mui/material';

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>{children}</Box>
}
