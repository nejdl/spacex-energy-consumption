import React from 'react';
import { List } from '@mui/material';
import { Launch } from '../../../generated/graphql';
import LaunchItem from './LaunchItem/LaunchItem';
import { useReactiveVar } from '@apollo/client';
import { selectedLaunchIdsVar } from '../../../cache';

interface LaunchListProps {
  launches: Launch[];
}

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
