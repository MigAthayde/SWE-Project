import {
    Grid,
    Paper,
    Stack,
    TextField,
    Button,
    MenuItem,
    Typography,
  } from '@mui/material';
  import SectionTitle from '../components/common/SectionTitle';
  import JourneyCard from '../components/journey/JourneyCard';
  import { featuredJourneys } from '../data/mockData';
  
  export default function SearchPage() {
    return (
      <Stack spacing={4}>
        <SectionTitle
          eyebrow="Passenger"
          title="Find a matching ride"
          subtitle="Search available journeys by route, time, cost and preferences."
        />
  
        <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="From" placeholder="e.g. Selly Oak" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="To" placeholder="e.g. UoB" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="Date" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField select fullWidth label="Preference" defaultValue="any">
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="quiet">Quiet ride</MenuItem>
                <MenuItem value="verified">Verified driver</MenuItem>
              </TextField>
            </Grid>
          </Grid>
  
          <Button sx={{ mt: 2 }} variant="contained">
            Search rides
          </Button>
        </Paper>
  
        <Typography variant="h6">Available results</Typography>
  
        <Grid container spacing={3}>
          {featuredJourneys.map((journey) => (
            <Grid item xs={12} md={6} key={journey.id}>
              <JourneyCard journey={journey} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  }