import { MenuItem, Select } from '@mui/material';
import Tabs from './components/tabs/Tabs';
import './View.scss';

export default function View() {
  return (
    <div className="flex-column container" style={{ padding: '20px 50px' }}>
      <div
        className="container-section"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          onChange={() => {}}
          variant="standard"
          sx={{ alignSelf: 'flex-end' }}
        >
          <MenuItem value={1}>MyCalendar2019</MenuItem>
          <MenuItem value={2}>MyCalendar2020</MenuItem>
        </Select>
      </div>
      <div
        className="container-section"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          onChange={() => {}}
          variant="standard"
          sx={{ alignSelf: 'flex-end' }}
        >
          <MenuItem value={1}>MyCalendar2019</MenuItem>
          <MenuItem value={2}>MyCalendar2020</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          onChange={() => {}}
          variant="standard"
          sx={{ alignSelf: 'flex-end' }}
        >
          <MenuItem value={1}>MyCalendar2019</MenuItem>
          <MenuItem value={2}>MyCalendar2020</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          onChange={() => {}}
          variant="standard"
          sx={{ alignSelf: 'flex-end' }}
        >
          <MenuItem value={1}>MyCalendar2019</MenuItem>
          <MenuItem value={2}>MyCalendar2020</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          onChange={() => {}}
          variant="standard"
          sx={{ alignSelf: 'flex-end' }}
        >
          <MenuItem value={1}>MyCalendar2019</MenuItem>
          <MenuItem value={2}>MyCalendar2020</MenuItem>
        </Select>
      </div>
      <div className="container-section">
        <Tabs></Tabs>
      </div>
    </div>
  );
}
