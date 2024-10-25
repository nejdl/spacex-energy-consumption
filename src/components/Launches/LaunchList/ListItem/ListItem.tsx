import React from 'react';
import { ListItem as MuiListItem, ListItemText, Checkbox } from '@mui/material';
import { Launch } from '../../../../../graphql';

interface ListItemProps {
  //   launch: Launch;
  //   isSelected: boolean;
  //   onToggle: (launchId: string) => void;
}

const ListItem: React.FC<ListItemProps> = (
  {
    //   launch,
    //   isSelected,
    //   onToggle,
  }
) => {
  return (
    <div>Item</div>
    // <MuiListItem dense button onClick={() => onToggle(launch.id)}>
    //   <Checkbox edge="start" checked={isSelected} tabIndex={-1} disableRipple />
    //   <ListItemText primary={launch.mission_name} />
    // </MuiListItem>
  );
};

export default ListItem;
