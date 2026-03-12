import {
    Stack,
    Paper,
    Typography,
    Chip,
    Divider,
  } from '@mui/material';
  import SectionTitle from '../components/common/SectionTitle';
  import { myTrips } from '../data/mockData';
  
  export default function MyTripsPage() {
    return (
      <Stack spacing={4}>
        <SectionTitle
          eyebrow="Dashboard"
          title="My trips"
          subtitle="Track bookings, published rides and current trip status."
        />
  
        <Stack spacing={2}>
          {myTrips.map((trip) => (
            <Paper
              key={trip.id}
              elevation={0}
              sx={{ p: 3, border: '1px solid #e5e7eb' }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                justifyContent="space-between"
              >
                <Stack spacing={1}>
                  <Typography variant="h6">{trip.route}</Typography>
                  <Typography color="text.secondary">{trip.time}</Typography>
                </Stack>
  
                <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
                  <Chip label={trip.type} color="primary" variant="outlined" />
                  <Typography>{trip.status}</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ mt: 2 }} />
            </Paper>
          ))}
        </Stack>
      </Stack>
    );
  }