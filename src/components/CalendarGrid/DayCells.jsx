import styled from 'styled-components';

const CellWrapper = styled.div`
  flex-grow: 1;
  border-right: 2px solid rgb(230, 230, 230);
  &:last-child {
    border: none;
  }
  position: relative;
`;

const Cell = styled.div`
  height: 40px;
  border-bottom: 2px solid rgb(230, 230, 230);
  &:last-child {
    border: none;
  }
  ${(props) =>
    props.event
      ? props.isSelected
        ? 'background-color: rgb(170, 170, 245);'
        : 'background-color: rgb(235, 236, 253);'
      : ''}

  padding: 2px;
  background-clip: content-box;
`;
const DayCells = ({ events, columnIndex, selectedEvent, setSelectedEvent }) => {
  return (
    <CellWrapper>
      {events.map((cell, i) => (
        <Cell
          key={i}
          id={cell?.time}
          event={cell ? true : false}
          isSelected={selectedEvent.y === i && selectedEvent.x === columnIndex}
          onClick={() => {
            setSelectedEvent({ x: columnIndex, y: i, time: cell?.time });
          }}
        />
      ))}
    </CellWrapper>
  );
};

export default DayCells;
