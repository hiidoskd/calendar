import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: rgb(246, 246, 246);
  border: 1px solid rgb(240, 240, 240);
  padding-right: 25px;
  padding-left: 64px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-size: 24px;
  color: rgb(235, 71, 61);
  margin: 15px 0px;
  display: ${(props) => props.display};
`;
const Footer = ({ deleteEvent, selectedEvent, goToToday }) => {
  return (
    <FooterWrapper>
      <Button onClick={goToToday}>Today</Button>
      <Button onClick={deleteEvent} display={selectedEvent?.time ? '' : 'none'}>
        Delete
      </Button>
    </FooterWrapper>
  );
};

export default Footer;
