import styled from "styled-components";

export const Container = styled.button`
  width: 80px;
  padding: 18px 16px;
  outline: 0;
  border: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border-radius: 32px;
  font-size: 16px;
  background-color: #F0F0F0;
  cursor: pointer;
  box-shadow: 0px 4px 8px #A6A6A6;

  &:hover {
    background: #D6D6D6;
  }

  &:active {
    padding-bottom: 16px;
    box-shadow: 0px 2px 8px #A6A6A6;
  }
`;