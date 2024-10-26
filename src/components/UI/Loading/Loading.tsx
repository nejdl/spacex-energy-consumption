import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        flexBasis: { xs: '40%', sm: '50%' },
        maxWidth: { xs: '100%', sm: 600 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
