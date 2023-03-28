import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import './App.css';
import AppBar from './modules/core/components/app-bar/AppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#71ad93',
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar></AppBar>
      </ThemeProvider>
    </div>
  );
}

export default App;
