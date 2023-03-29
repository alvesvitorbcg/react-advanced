import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import * as React from 'react';
import AddCalendarModal from './components/add-calendar-modal/AddCalendarModal';
import BasicTable from './components/calendars-table/CalendarsTable';

export default function View() {
  const [modalOpen, setModalOpen] = React.useState(false);

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
        sx={{
          marginTop: 4,
        }}
      ></BasicTable>
      <AddCalendarModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      ></AddCalendarModal>
    </div>
  );
}
