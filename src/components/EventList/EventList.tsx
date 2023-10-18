import { useState, useEffect, useRef } from 'react';
import { Stack } from '@mui/material';

import PageTemplate from '../Common/PageTemplate';

import { ListContainer, ShowMoreBtn } from './parts/styles';
import { IEvent } from '@/types/events';
import { getEvents, deleteEvent } from '@/api';
import EventTable from './parts/EventTable';

const EventList = () => {
  const [events, setEvents] = useState<IEvent[]>([] as IEvent[]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const initialRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (!initialRef.current && page === 0) {
      initialRef.current = true;
      getEventList(page);
    }

    if (page > 0) {
      getEventList(page);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getEventList = async (page: number) => {
    const {
      data: { content, totalPages },
    } = await getEvents(page);

    setEvents((prev) => [...prev, ...content]);
    setTotalPages(totalPages - 1);
  };

  const onDeleteEvent = async (id: string) => {
    try {
      await deleteEvent(id);
      const newEvents = events.filter((event) => event.id !== id);
      setEvents(newEvents);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageTemplate title="Редагувати події">
      <ListContainer>
        <EventTable events={events} onDeleteEvent={onDeleteEvent} />
        {totalPages > page && (
          <Stack alignItems="center">
            <ShowMoreBtn
              variant="secondary"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Показати більше
            </ShowMoreBtn>
          </Stack>
        )}
      </ListContainer>
    </PageTemplate>
  );
};

export default EventList;
