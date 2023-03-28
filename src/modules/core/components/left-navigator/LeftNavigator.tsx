import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as HouseGrayIcon } from './../../../../shared/icons/house-gray.svg';
import { ReactComponent as HouseIcon } from './../../../../shared/icons/house.svg';
import { ReactComponent as PaperGrayIcon } from './../../../../shared/icons/paper-gray.svg';
import { ReactComponent as PaperIcon } from './../../../../shared/icons/paper.svg';
import { ReactComponent as SpeedometerGrayIcon } from './../../../../shared/icons/speedometer-gray.svg';
import { ReactComponent as SpeedometerIcon } from './../../../../shared/icons/speedometer.svg';

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
      url: '/',
      icons: [HouseGrayIcon, HouseIcon],
    },
    {
      label: 'Calendar',
      url: '/calendar',
      icons: [PaperGrayIcon, PaperIcon],
    },
    {
      label: 'Analysis',
      url: '/analysis',

      icons: [SpeedometerGrayIcon, SpeedometerIcon],
    },
  ];
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setToggled(open);
    };
  const location = useLocation();
  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((menuItem, index) => {
          const iconIndex = location.pathname === menuItem.url ? 1 : 0;
          const Icon = menuItem.icons[iconIndex];

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                alignItems="center"
                sx={{ justifyContent: 'center' }}
              >
                <NavLink to={menuItem.url}>
                  <Icon style={{ width: 40, height: 40 }}></Icon>
                </NavLink>
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
