import { FC } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { DateTime } from 'luxon';
import { IEvent } from '@/types/events';

import TableItemActivity from './TableItemActivity';

interface EventTableProps {
  events: IEvent[];
  onDeleteEvent: (id: string) => void;
}

const EventTable: FC<EventTableProps> = ({ events, onDeleteEvent }) => {
  return (
    <TableContainer component="div">
      <Table aria-label="events list">
        <TableHead
          sx={{ backgroundColor: (theme) => theme.palette.gray.light }}
        >
          <TableRow>
            <TableCell sx={{ width: { xs: 102, md: 122 } }} scope="col">
              Дата
            </TableCell>
            <TableCell scope="col">Назва події</TableCell>
            <TableCell
              align="right"
              sx={{ width: { xs: 32, md: 104, lg: 120 } }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.length > 0 &&
            events.map((event) => (
              <TableRow key={event.id}>
                <TableCell sx={{ fontWeight: 400 }}>
                  {event.begin
                    ? DateTime.fromISO(event.begin).toLocaleString()
                    : ''}
                </TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell align="right">
                  <TableItemActivity
                    id={event.id}
                    title={event.title}
                    onDeleteEventState={onDeleteEvent}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventTable;
