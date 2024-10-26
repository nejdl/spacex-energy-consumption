import { Checkbox, ListItemButton } from '@mui/material';
import LaunchInformation from './LaunchInformation/LaunchInformation';
import { selectedLaunchesVar } from '../../../../utils/cache/cache';
import { LaunchItemProps } from '../../../../utils/types/types';
import { useReactiveVar } from '@apollo/client';

const LaunchItem = ({
  launch,
  isSelected,
  toggleLaunchSelection,
}: LaunchItemProps) => {
  // SELECTED LAUNCHES STATE
  const selectedLaunches = useReactiveVar(selectedLaunchesVar);

  // TOGGLE LAUNCH SELECTION ON CLICK
  const handleClick = () => {
    // only allow 10 launches to be selected
    if (selectedLaunches.length < 10 || isSelected) {
      toggleLaunchSelection(launch);
    }
  };

  return (
    <ListItemButton
      dense
      onClick={handleClick}
      disabled={selectedLaunches.length >= 10 && !isSelected} // set disabled when max. launches are selected
      sx={{
        bgcolor: isSelected ? 'secondary.main' : 'inherit',
        borderTop: '1px solid',
        borderColor: 'secondary.main',
      }}
    >
      <Checkbox edge="start" checked={isSelected} tabIndex={-1} disableRipple />
      <LaunchInformation launch={launch} />
    </ListItemButton>
  );
};

export default LaunchItem;
