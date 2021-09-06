import styled from "styled-components";

export const Container = styled.div`

  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.working ? '#FF6E6E' : '#85FF66' };
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  color: #071033;
  gap: 32px;
  transition: all ease-in-out 0.5s;

  .box-buttons {
    display: flex;
    gap: 32px;
  }
`;