import { Box, Typography } from '@mui/material';

interface Props {
  badgeColor: string;
  labelText: string;
}

export const ChartLabel = ({ badgeColor, labelText }: Props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ width: 6, height: 6, backgroundColor: badgeColor, borderRadius: '50%' }} />
      <Typography variant="body1" color="textSecondary">
        {labelText}
      </Typography>
    </Box>
  );
};
