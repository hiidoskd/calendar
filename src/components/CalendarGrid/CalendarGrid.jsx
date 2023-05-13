import styled from 'styled-components';

import { FlexWrapper } from '../../containers/Styled/Wrappers';
import DayCells from './DayCells';

const CalendarGridWrapper = styled.div`
  overflow-y: auto;
  height: 70%;
  padding-left: 64px;
  padding-right: 25px;
  margin-top: 5px;
`;

const TimeRangeWrapper = styled.div`
  flex-grow: 1;
  position: absolute;
  left: -40px;
  top: -10px;
`;

const TimeRange = styled.div`
  height: 40px;
  font-size: 12px;
  color: rgb(192, 192, 192);
`;

const CalendarGrid = ({ allEvents, selectedEvent, setSelectedEvent }) => {
  return (
    <CalendarGridWrapper>
      <FlexWrapper>
        <TimeRangeWrapper>
          {allEvents[0].map((cell, i) => (
            <TimeRange key={`${i}`.padStart(2, '0')}>
              {i ? <>{`${i}`.padStart(2, '0')}:00</> : null}
            </TimeRange>
          ))}
        </TimeRangeWrapper>
        {allEvents.map((dayEvents, i) => (
          <DayCells
            key={i}
            events={dayEvents}
            columnIndex={i}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
          />
        ))}
      </FlexWrapper>
    </CalendarGridWrapper>
  );
};

export default CalendarGrid;
