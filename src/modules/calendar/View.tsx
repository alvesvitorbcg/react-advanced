import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import * as React from 'react';
import AddCalendarModal from './components/add-calendar-modal/AddCalendarModal';
import BasicTable from './components/calendars-table/CalendarsTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions/http-actions';
import ICalendar from './interfaces/ICalendar';

const useCalendarData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.calendar);

  React.useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  const calendars = React.useMemo(() => {
    if (data) return data as ICalendar[];
  }, [data]);

  return calendars;
};

export default function View() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [calendars, setCalendars] = React.useState(new Array<ICalendar>());
  const data = useCalendarData();

  React.useEffect(() => {
    console.log('Calendar view calendars', data);
    if (data) {
      setCalendars(data);
    }
  }, [data]);

  return (
    <div style={{ padding: '20px 200px' }}>
      <div className="flex-row-space-between">
        <Typography color="primary" variant="h6" component="div" align="left">
          All Calendars
        </Typography>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          <div className="flex-row">
            <AddIcon
              sx={{
                marginRight: 1,
                color: 'white',
              }}
            ></AddIcon>
            <Typography color="white">New Calendar</Typography>
          </div>
        </Button>
      </div>
      <BasicTable
        calendars={calendars}
        sx={{
          marginTop: 4,
        }}
      ></BasicTable>
      <AddCalendarModal
        onOptimizeClick={(newCalendar: any) => {
          setCalendars([...calendars, newCalendar]);
          setModalOpen(false);
        }}
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      ></AddCalendarModal>
    </div>
  );
}
