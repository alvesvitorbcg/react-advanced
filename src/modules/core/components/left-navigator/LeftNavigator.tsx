import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ModulesRoutes from '../ModulesRoutes';
import './LeftNavigator.scss';
export default function LeftDrawer({
  toggled,
  setToggled,
}: {
  toggled: boolean;
  setToggled: Function;
}) {
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
        {ModulesRoutes.map((menuItem, index) => {
          const iconIndex = location.pathname === menuItem.url ? 1 : 0;
          const Icon = menuItem.icons[iconIndex];

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                alignItems="center"
                sx={{ justifyContent: 'center' }}
              >
                <NavLink to={menuItem.url}>
                  <Icon className="menu-icon"></Icon>
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
