import { Box, Typography } from '@mui/material';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Box sx={{ mb: 3 }}>
      {eyebrow && (
        <Typography
          variant="body2"
          sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h4" sx={{ mb: 1 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}