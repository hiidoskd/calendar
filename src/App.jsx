import styled from 'styled-components';
import { generateWeek, mapEvents } from './helpers';
import Week from './components/Week/Week';
import Header from './components/Header/Header';
import { eventsFetched } from './helpers/constants';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

const Wrapper = styled.div`
  width: clamp(428px, 100%, 740px);
  min-width: 392px;
  height: 100vh;
`;

function App() {
  const [today] = useState(new Date());
  const [week, setWeek] = useState(generateWeek(today));
  const [events, setEvents] = useState(eventsFetched);
  const [selectedEvent, setSelectedEvent] = useState({});
  const eventsMap = mapEvents(events, week);
  // console.log(events);
  const deleteEvent = () => {
    if (selectedEvent.time) {
      setEvents(events.filter((e) => e.time !== selectedEvent.time));
      setSelectedEvent({});
    }
  };

  const goToToday = () => {
    setWeek(generateWeek(today));
  };

  return (
    <Wrapper>
      <Header events={events} setEvents={setEvents} />
      <Week week={week} today={today} setWeek={setWeek} />
      <CalendarGrid
        allEvents={eventsMap}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
      <Footer
        deleteEvent={deleteEvent}
        selectedEvent={selectedEvent}
        goToToday={goToToday}
      />
    </Wrapper>
  );
}

export default App;
