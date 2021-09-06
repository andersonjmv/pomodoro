import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

function Button({ title, onClick }) {
  return <Container onClick={onClick}>{title}</Container>;
}

Button.propTypes = {
  title: P.string.isRequired,
  onClick: P.func.isRequired,
};

export default Button;
