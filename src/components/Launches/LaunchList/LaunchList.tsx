import React from 'react';
import { List } from '@mui/material';
import LaunchItem from './LaunchItem/LaunchItem';
import { useReactiveVar } from '@apollo/client';
import { selectedLaunchIdsVar } from '../../../utils/cache/cache';
import { LaunchListProps } from '../../../utils/types/types';

const LaunchList: React.FC<LaunchListProps> = ({ launches }) => {
  const selectedLaunchIds = useReactiveVar(selectedLaunchIdsVar);

  const toggleLaunchSelection = (launchId: string) => {
    const currentSelected = selectedLaunchIdsVar();
    if (currentSelected.includes(launchId)) {
      selectedLaunchIdsVar(currentSelected.filter((id) => id !== launchId));
    } else {
      selectedLaunchIdsVar([...currentSelected, launchId]);
    }
  };

  return (
    <List role="list">
      {launches.map((launch) => (
        <LaunchItem
          key={launch.id}
          launch={launch}
          isSelected={selectedLaunchIds.includes(launch.id || '')}
          toggleLaunchSelection={toggleLaunchSelection}
        />
      ))}
    </List>
  );
};

export default LaunchList;
