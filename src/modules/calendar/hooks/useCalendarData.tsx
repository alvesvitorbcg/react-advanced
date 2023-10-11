import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions/http-actions';
import ICalendar from '../interfaces/ICalendar';

export const useCalendarData = () => {
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
