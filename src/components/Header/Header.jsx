import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 300;
  color: rgb(29, 29, 29);
  font-size: 1.5rem;
  margin: 15px 30px;
`;

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-size: 36px;
  font-weight: 100;
  color: rgb(235, 71, 61);
  margin: 15px 24px;
`;

const Header = ({ setEvents, events }) => {
  const addEvent = () => {
    const input = prompt('Enter date time: YYYY-MM-DD HH:mm:ss');

    const newEvent = new Date(input);
    // console.log(input, newEvent);
    setEvents([...events, { id: events.length + 1, time: newEvent.getTime() }]);
  };

  return (
    <HeaderWrapper>
      <Title>Interview Calendar</Title>
      <Button onClick={addEvent}>+</Button>
    </HeaderWrapper>
  );
};

export default Header;
