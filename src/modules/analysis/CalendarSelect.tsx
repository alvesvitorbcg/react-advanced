import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { useCalendarData } from '../calendar/hooks/useCalendarData';

export function CalendarSelect({
  calendarFilter,
  setCalendarFilter,
}: {
  calendarFilter: string | null;
  setCalendarFilter: Function;
}) {
  const calendarData = useCalendarData();
  React.useEffect(() => {
    if (calendarData) {
      setCalendarFilter(calendarData[0].id.toString());
    }
  }, [calendarData, setCalendarFilter]);
  if (!calendarFilter || !calendarData) return null;
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={calendarFilter}
      onChange={(event) => {
        setCalendarFilter(event.target.value as any);
      }}
      variant="standard"
      sx={{
        alignSelf: 'flex-end',
      }}
    >
      {calendarData.map((calendar) => (
        <MenuItem key={calendar.id} value={calendar.id}>
          {calendar.name}
        </MenuItem>
      ))}
    </Select>
  );
}
