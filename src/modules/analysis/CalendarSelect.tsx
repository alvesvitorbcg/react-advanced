import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { useCalendarData } from '../calendar/hooks/useCalendarData';

export function CalendarSelect({
  calendarFilter,
  setCalendarFilter,
}: {
  calendarFilter: any;
  setCalendarFilter: Function;
}) {
  const allCalendars = useCalendarData();

  React.useEffect(() => {
    if (allCalendars) {
      setCalendarFilter(allCalendars[0].id);
    }
  }, [allCalendars, setCalendarFilter]);

  return (
    calendarFilter && (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={calendarFilter}
        onChange={(value) => {
          setCalendarFilter(value.target.value as any);
        }}
        variant="standard"
        sx={{
          alignSelf: 'flex-end',
        }}
      >
        {allCalendars &&
          allCalendars.map((calendar) => (
            <MenuItem key={calendar.id} value={calendar.id}>
              {calendar.name}
            </MenuItem>
          ))}
      </Select>
    )
  );
}
