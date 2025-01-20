import { Sidebar } from '@/components/organisms/sidebar/sidebar';
import { Box, Container } from '@mui/material';
import { Navbar } from '@/components/organisms/navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          backgroundColor: 'background.default',
          maxHeight: '100vh',
        }}
      >
        <Navbar />
        <Container maxWidth="xl" sx={{ paddingTop: 3, paddingBottom: 3, overflowY: 'scroll' }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
