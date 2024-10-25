import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemButton,
} from '@mui/material';
import { Launch } from '../../../../generated/graphql';
import LaunchInformation from './LaunchInformation/LaunchInformation';

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
  return (
    <ListItemButton
      dense
      onClick={() => toggleLaunchSelection(launch.id || '')}
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
