import { Card, CardContent, Typography } from '@mui/material';

export default function EmptyStateCard({ title, description }) {
  return (
    <Card elevation={0} sx={{ border: '1px dashed #cbd5e1' }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}