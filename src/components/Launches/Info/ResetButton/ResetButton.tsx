import { Button } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { selectedLaunchesVar } from '../../../../utils/cache/cache';

const ResetButton = () => {
  // SELECTED LAUNCHES STATE
  const selectedLaunches = useReactiveVar(selectedLaunchesVar);

  // RESET SELECTED LAUNCHES
  const resetSelectedLaunches = () => {
    selectedLaunchesVar([]);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={resetSelectedLaunches}
      sx={{ mt: 2 }}
      disabled={selectedLaunches.length === 0}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
