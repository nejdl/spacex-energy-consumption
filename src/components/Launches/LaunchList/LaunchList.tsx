import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { Launch } from '../../../generated/graphql';
import LaunchItem from './LaunchItem/LaunchItem';

interface LaunchListProps {
  launches: Launch[];
}

const LaunchList: React.FC<LaunchListProps> = ({ launches }) => {
  const [selectedLaunchIds, setSelectedLaunchIds] = useState<string[]>([]);

  const toggleLaunchSelection = (launchId: string) => {
    setSelectedLaunchIds((prev) =>
      prev.includes(launchId)
        ? prev.filter((id) => id !== launchId)
        : [...prev, launchId]
    );
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
