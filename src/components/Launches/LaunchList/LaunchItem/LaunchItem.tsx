import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemButton,
} from '@mui/material';
import { Launch } from '../../../../../graphql';
import LaunchInformation from './LaunchInformation/LaunchInformation';
import { selectedLaunchesVar } from '../../../../utils/cache/cache';

interface LaunchItemProps {
  launch: Launch;
  isSelected: boolean;
  toggleLaunchSelection: (launch: Launch) => void;
}

const LaunchItem: React.FC<LaunchItemProps> = ({
  launch,
  isSelected,
  toggleLaunchSelection,
}) => {
  const handleClick = () => {
    // only allow 10 launches to be selected
    if (selectedLaunchesVar().length < 10 || isSelected) {
      toggleLaunchSelection(launch);
    }
  };

  return (
    <ListItemButton
      dense
      onClick={handleClick}
      disabled={selectedLaunchesVar().length >= 10 && !isSelected}
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
