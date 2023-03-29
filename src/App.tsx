import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnalysisView from './modules/analysis/View';
import CalendarView from './modules/calendar/View';
import AppBar from './modules/core/components/app-bar/AppBar';
import HomeView from './modules/home/View';
import style from './style.module.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const theme = createTheme({
  palette: {
    primary: {
      main: style.primaryGreen,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppBar></AppBar>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/analysis" element={<AnalysisView />} />
          </Routes>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
