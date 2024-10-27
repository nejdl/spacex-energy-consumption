import { Checkbox, ListItemButton } from '@mui/material';
import LaunchInformation from './LaunchInformation/LaunchInformation';
import { LaunchItemProps } from '../../../../utils/types/types';

const LaunchItem = ({
  launch,
  isSelected,
  toggleLaunchSelection,
  maxLaunchesSelected,
}: LaunchItemProps) => {
  // TOGGLE LAUNCH SELECTION ON CLICK
  const handleClick = () => {
    // only allow 10 launches to be selected
    if (!maxLaunchesSelected || isSelected) {
      toggleLaunchSelection(launch);
    }
  };

  return (
    <ListItemButton
      dense
      onClick={handleClick}
      disabled={maxLaunchesSelected && !isSelected} // set disabled when max. launches are selected
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
