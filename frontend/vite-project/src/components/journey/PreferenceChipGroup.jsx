import { Stack, Chip } from '@mui/material';

export default function PreferenceChipGroup({ quietPreferred, verified }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {quietPreferred && <Chip label="Quiet ride" size="small" color="primary" />}
      {verified && <Chip label="Verified driver" size="small" color="success" />}
      <Chip label="Low-cost" size="small" variant="outlined" />
      <Chip label="Commute-friendly" size="small" variant="outlined" />
    </Stack>
  );
}