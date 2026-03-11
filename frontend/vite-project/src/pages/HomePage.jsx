import { Grid, Paper, Typography, Stack, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import JourneyCard from '../components/journey/JourneyCard';
import { featuredJourneys } from '../data/mockData';

export default function HomePage() {
  return (
    <Stack spacing={5}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          border: '1px solid #e5e7eb',
          background:
            'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08))',
        }}
      >
        <SectionTitle
          eyebrow="Safer, cheaper, greener commuting"
          title="A carpooling app for reliable daily journeys"
          subtitle="Find rides, publish your commute, and travel with verified users who match your preferences."
        />

        <Stack direction="row" spacing={2}>
          <Button component={RouterLink} to="/search" variant="contained">
            Find a ride
          </Button>
          <Button component={RouterLink} to="/publish" variant="outlined">
            Publish a trip
          </Button>
        </Stack>
      </Paper>

      <Box>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Featured journeys
        </Typography>

        <Grid container spacing={3}>
          {featuredJourneys.map((journey) => (
            <Grid item xs={12} md={6} lg={4} key={journey.id}>
              <JourneyCard journey={journey} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}