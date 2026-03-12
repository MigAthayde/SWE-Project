import {
    Avatar,
    Paper,
    Stack,
    Typography,
    Chip,
  } from '@mui/material';
  import SectionTitle from '../components/common/SectionTitle';
  import { userProfile } from '../data/mockData';
  
  export default function ProfilePage() {
    return (
      <Stack spacing={4}>
        <SectionTitle
          eyebrow="Account"
          title="Profile & preferences"
          subtitle="Manage identity, role and commuting preferences."
        />
  
        <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', maxWidth: 760 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 64, height: 64 }}>
                {userProfile.name.charAt(0)}
              </Avatar>
              <Stack>
                <Typography variant="h6">{userProfile.name}</Typography>
                <Typography color="text.secondary">{userProfile.email}</Typography>
                <Typography color="text.secondary">{userProfile.role}</Typography>
              </Stack>
            </Stack>
  
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {userProfile.preferences.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    );
  }