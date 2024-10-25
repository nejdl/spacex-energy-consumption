import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemButton,
} from '@mui/material';
import { Launch } from '../../../../../graphql';
import LaunchInformation from './LaunchInformation/LaunchInformation';
import { selectedLaunchIdsVar } from '../../../../utils/cache/cache';

interface LaunchItemProps {
  launch: Launch;
  isSelected: boolean;
  toggleLaunchSelection: (launchId: string) => void;
}

const LaunchItem: React.FC<LaunchItemProps> = ({
  launch,
  isSelected,
  toggleLaunchSelection,
}) => {
  const handleClick = () => {
    // only allow 5 launches to be selected
    if (selectedLaunchIdsVar().length < 5 || isSelected) {
      toggleLaunchSelection(launch.id || '');
    }
  };

  return (
    <ListItemButton
      dense
      onClick={handleClick}
      disabled={selectedLaunchIdsVar().length >= 5 && !isSelected}
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
