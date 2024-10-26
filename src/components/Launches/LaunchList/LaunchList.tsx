import { List } from '@mui/material';
import LaunchItem from './LaunchItem/LaunchItem';
import { useReactiveVar } from '@apollo/client';
import { selectedLaunchesVar } from '../../../utils/cache/cache';
import { LaunchListProps } from '../../../utils/types/types';
import { Launch } from '../../../generated/graphql';

const LaunchList = ({ launches }: LaunchListProps) => {
  // SELECTED LAUNCHES STATE
  const selectedLaunches = useReactiveVar(selectedLaunchesVar);

  // TOGGLE LAUNCH SELECTION
  const toggleLaunchSelection = (launch: Launch) => {
    const launchId = launch?.id;
    // don’t mutatate selectedLaunches directly
    const currentSelected = selectedLaunchesVar();
    // toggle launch into selectedLaunches array
    if (currentSelected.find((x) => x.id === launchId)) {
      selectedLaunchesVar(
        currentSelected.filter((launch) => launch.id !== launchId)
      );
    } else {
      selectedLaunchesVar([...currentSelected, launch]);
    }
  };

  return (
    <List role="list">
      {launches.map((launch) => (
        <LaunchItem
          key={launch.id}
          launch={launch}
          isSelected={
            selectedLaunches.find((x) => x.id === launch.id) !== undefined
          }
          toggleLaunchSelection={toggleLaunchSelection}
        />
      ))}
    </List>
  );
};

export default LaunchList;
