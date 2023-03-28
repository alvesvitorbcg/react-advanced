import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnalysisView from './modules/analysis/View';
import CalendarView from './modules/calendar/View';
import AppBar from './modules/core/components/app-bar/AppBar';
import HomeView from './modules/home/View';

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
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/analysis" element={<AnalysisView />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
