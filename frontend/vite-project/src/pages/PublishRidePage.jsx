import {
    Paper,
    Stack,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
  } from '@mui/material';
  import SectionTitle from '../components/common/SectionTitle';
  
  export default function PublishRidePage() {
    return (
      <Stack spacing={4}>
        <SectionTitle
          eyebrow="Driver"
          title="Publish a new journey"
          subtitle="Create a ride offer for commuters heading in the same direction."
        />
  
        <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', maxWidth: 760 }}>
          <Stack spacing={2}>
            <TextField label="Start location" fullWidth />
            <TextField label="Destination" fullWidth />
            <TextField label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="Departure time" type="time" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="Available seats" type="number" fullWidth />
            <TextField label="Price per passenger (£)" type="number" fullWidth />
            <TextField label="Notes" multiline minRows={4} fullWidth />
  
            <FormControlLabel control={<Checkbox />} label="Quiet ride preferred" />
            <FormControlLabel control={<Checkbox />} label="Luggage allowed" />
            <FormControlLabel control={<Checkbox />} label="Women-only option" />
  
            <Button variant="contained">Publish ride</Button>
          </Stack>
        </Paper>
      </Stack>
    );
  }