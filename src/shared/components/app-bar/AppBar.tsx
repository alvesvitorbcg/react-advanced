import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            AI Promo
          </Typography>
          <Button
            sx={{
              color: 'white',
            }}
          >
            USER
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
