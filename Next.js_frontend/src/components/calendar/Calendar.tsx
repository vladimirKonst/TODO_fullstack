import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

const initialValue = dayjs();

interface CalendarProps {
  onDateChange: (e: any) => void
}


export const Calendar = ({ onDateChange }: CalendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
      className='p-2'
        onChange={onDateChange}
        defaultValue={initialValue}
        renderLoading={() => <DayCalendarSkeleton />}
        disablePast
      />
    </LocalizationProvider>
  );
}