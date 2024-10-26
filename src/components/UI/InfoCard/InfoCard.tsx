import { Paper, Typography } from '@mui/material';
import { InfoCardProps } from '../../../utils/types/types';

const InfoCard = ({ title, subtitle, colorScheme }: InfoCardProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: 2,
        bgcolor: `${colorScheme}.light`,
        color: `${colorScheme}.contrastText`,
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
        {subtitle}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
