import { Outlet, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Find a Ride', to: '/search' },
  { label: 'Publish', to: '/publish' },
  { label: 'My Trips', to: '/my-trips' },
  { label: 'Profile', to: '/profile' },
];

export default function MainLayout() {
  return (
    <>
      <AppBar position="sticky" elevation={0} color="inherit">
        <Toolbar sx={{ borderBottom: '1px solid #e5e7eb' }}>
          <DirectionsCarIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Journey
          </Typography>

          <Stack direction="row" spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}