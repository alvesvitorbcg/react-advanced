import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import * as React from 'react';

export default function LeftDrawer({
  toggled,
  setToggled,
}: {
  toggled: boolean;
  setToggled: Function;
}) {
  const menuItems = [
    {
      label: 'Home',
      icon: '',
    },
    {
      label: 'Calendar',
      icon: '',
    },
    {
      label: 'Analysis',
      icon: '',
    },
  ];
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setToggled(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((menuItem, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <Typography>{menuItem.label}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={'left'} open={toggled} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
