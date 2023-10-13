import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import * as React from 'react';
import AddCalendarModal from './components/add-calendar-modal/AddCalendarModal';
import BasicTable from './components/calendars-table/CalendarsTable';
import ICalendar from './interfaces/ICalendar';
import { useCalendarData } from './hooks/useCalendarData';
import './View.scss';
import { CustomButton } from '../core/components/CustomButton';

function CustomAddIcon() {
  return (
    <AddIcon
      sx={{
        marginRight: 1,
        color: 'white',
      }}
    ></AddIcon>
  );
}

export default function View() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [calendars, setCalendars] = React.useState(new Array<ICalendar>());
  const data = useCalendarData();

  React.useEffect(() => {
    if (data) {
      setCalendars(data);
    }
  }, [data]);

  return (
    <div className="container-padding">
      <div className="flex-row-space-between">
        <Typography color="primary" variant="h6" component="div" align="left">
          All Calendars
        </Typography>
        <CustomButton
          onClick={() => setModalOpen(true)}
          Icon={<CustomAddIcon />}
          text="New Calendar"
        ></CustomButton>
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
