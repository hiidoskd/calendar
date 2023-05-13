import styled from 'styled-components';
import { FlexWrapper } from '../../containers/Styled/Wrappers';
import { generateWeek } from '../../helpers';

const WeekWrapper = styled.div`
  background-color: rgb(246, 246, 246);
  border: 1px solid rgb(240, 240, 240);
  padding-right: 25px;
  padding-left: 64px;
`;

const WeekCell = styled.div`
  margin: 5px 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeekDay = styled.div`
  color: rgb(20, 20, 20);
  font-size: 0.6rem;
  margin: 5px 0px;
  text-align: center;
`;

const WeekDate = styled.div`
  color: rgb(20, 20, 20);
  background-color: ${(props) =>
    props.isToday ? 'rgba(235, 71, 61, 0.9)' : 'inherit'};
  color: ${(props) => (props.isToday ? 'white' : 'rgb(20, 20, 20)')};
  font-size: 1.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const MonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  padding: 0px 5px;
  border: none;
  background: none;
  font-size: 24px;
  font-weight: 300;
  color: rgb(235, 71, 61);
`;

const Title = styled.div`
  font-weight: 500;
  color: rgb(29, 29, 29);
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const Week = ({ week, today, setWeek }, ...props) => {
  const goToNextWeek = () => {
    let currentMonday = week[0].getDate();
    let nextMonday = new Date(week[0]).setDate(currentMonday + 7);
    setWeek(generateWeek(nextMonday));
  };

  const goToPreviousWeek = () => {
    let currentMonday = week[0].getDate();
    let nextMonday = new Date(week[0]).setDate(currentMonday - 7);
    setWeek(generateWeek(nextMonday));
  };

  return (
    <WeekWrapper>
      <FlexWrapper {...props}>
        {week.map((day) => (
          <WeekCell key={day}>
            <WeekDay>
              {day.toLocaleDateString('en', { weekday: 'narrow' })}
            </WeekDay>
            <WeekDate
              isToday={day.toLocaleDateString() === today.toLocaleDateString()}
            >
              {day.getDate()}
            </WeekDate>
          </WeekCell>
        ))}
      </FlexWrapper>
      <MonthWrapper>
        <Button onClick={goToPreviousWeek}>&lt;</Button>
        <Title>
          {week[0].toLocaleDateString('en', { month: 'long', year: 'numeric' })}
        </Title>
        <Button onClick={goToNextWeek}>&gt;</Button>
      </MonthWrapper>
    </WeekWrapper>
  );
};

export default Week;
