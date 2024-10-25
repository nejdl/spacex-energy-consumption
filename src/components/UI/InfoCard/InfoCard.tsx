import React from 'react';
import { Paper, Typography } from '@mui/material';

interface InfoCardProps {
  title: string;
  subtitle: string;
  colorScheme: 'primary' | 'secondary';
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  colorScheme,
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: 2,
        margin: 2,
        bgcolor: `${colorScheme}.light`,
        color: `${colorScheme}.contrastText`,
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Paper>
  );
};

export default InfoCard;
