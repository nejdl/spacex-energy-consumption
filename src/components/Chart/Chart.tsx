import { Box } from '@mui/material';

const Chart: React.FC = () => {
  return (
    <Box
      sx={{
        flexBasis: '50%',
        flexGrow: 1,
        overflow: 'scroll',
        bgcolor: 'secondary.light',
        borderTop: { xs: '2px solid', sm: 'none' },
        borderColor: 'primary.main',
      }}
    >
      Chart
    </Box>
  );
};

export default Chart;
