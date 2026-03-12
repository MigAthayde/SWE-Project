import {
    Card,
    CardContent,
    Typography,
    Stack,
    Divider,
    Button,
    Box,
  } from '@mui/material';
  import PreferenceChipGroup from './PreferenceChipGroup';
  
  export default function JourneyCard({ journey }) {
    return (
      <Card elevation={0} sx={{ border: '1px solid #e5e7eb', height: '100%' }}>
        <CardContent>
          <Stack spacing={2}>
            <Box>
              <Typography variant="h6">
                {journey.from} → {journey.to}
              </Typography>
              <Typography color="text.secondary">
                {journey.date} · {journey.time}
              </Typography>
            </Box>
  
            <PreferenceChipGroup
              quietPreferred={journey.quietPreferred}
              verified={journey.verified}
            />
  
            <Divider />
  
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Driver
                </Typography>
                <Typography variant="body1">{journey.driver}</Typography>
              </Box>
  
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Seats
                </Typography>
                <Typography variant="body1">{journey.seats}</Typography>
              </Box>
  
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Price
                </Typography>
                <Typography variant="body1">£{journey.price}</Typography>
              </Box>
            </Stack>
  
            <Button variant="contained" fullWidth>
              Book this ride
            </Button>
          </Stack>
        </CardContent>
      </Card>
    );
  }