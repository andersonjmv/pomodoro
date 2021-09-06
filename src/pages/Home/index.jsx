import React, { useRef } from 'react';
import { Pomodoro } from '../../components/Pomodoro';
import { Container } from './styles';

function Home() {
  const containerRef = useRef();
  return (
    <Container ref={containerRef}>
      <Pomodoro
        ref={containerRef}
        defaultTime={1500}
        shortRestTime={300}
        longRestTime={900}
        numberOfCycles={4}
      />
    </Container>
  );
}

export default Home;
