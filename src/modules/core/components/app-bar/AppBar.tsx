import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftNavigator from '../left-navigator/LeftNavigator';
import { useState } from 'react';

export default function ButtonAppBar() {
  const [toggled, setToggled] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'green' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2,
              color: 'white',
            }}
            onClick={() => setToggled(!toggled)}
          >
            <MenuIcon />
          </IconButton>
          <LeftNavigator
            setToggled={setToggled}
            toggled={toggled}
          ></LeftNavigator>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            AI Promo
          </Typography>
          <section className="flex-row-space-between">
            <AccountCircleIcon
              sx={{
                color: 'white',
              }}
            ></AccountCircleIcon>
            <Button
              sx={{
                color: 'white',
              }}
            >
              USER
            </Button>
          </section>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
