import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import P from 'prop-types';
import { Container } from './styles';
import { useInterval } from '../../hooks/useInterval';
import { secondsToTime } from '../../utils/secondsToTime';
import Button from '../Button';

export const Pomodoro = forwardRef(
  ({ defaultTime, longRestTime, shortRestTime, numberOfCycles }, ref) => {
    const [mainTime, setMainTime] = useState(defaultTime);
    const [counting, setCounting] = useState(false);
    const [working, setWorking] = useState(false);
    const [resting, setResting] = useState(false);
    const [cycles, setCycles] = useState(
      new Array(numberOfCycles - 1).fill(true),
    );
    const [completedCycles, setCompletedCycles] = useState(0);
    const [fullWorkingTime, setFullWorkingTime] = useState(0);
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

    const configureWork = useCallback(() => {
      setCounting(true);
      setWorking(true);
      setResting(false);
      setMainTime(defaultTime);
    }, [defaultTime]);

    const configureRest = useCallback(
      long => {
        setCounting(true);
        setWorking(false);
        setResting(true);

        if (long) {
          setMainTime(longRestTime);
        } else {
          setMainTime(shortRestTime);
        }
      },
      [longRestTime, shortRestTime],
    );

    useEffect(() => {
      if (working) ref.current.style.background = '#E1523E';
      if (resting) ref.current.style.background = '#5FE13E';

      if (mainTime > 0) return;

      if (working && cycles.length > 0) {
        configureRest(false);
        cycles.pop();
      } else if (working && cycles.length <= 0) {
        configureRest(true);
        setCycles(new Array(numberOfCycles - 1).fill(true));
        setCompletedCycles(completedCycles + 1);
      }

      if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
      if (resting) configureWork();
    }, [
      working,
      resting,
      mainTime,
      cycles,
      numberOfCycles,
      completedCycles,
      configureRest,
      setCycles,
      setCompletedCycles,
      numberOfPomodoros,
      setNumberOfPomodoros,
      configureWork,
      ref,
    ]);

    useInterval(
      () => {
        setMainTime(mainTime - 1);
      },
      counting ? 1000 : null,
    );
    return (
      <Container working={working}>
        <h2>
          Estas:
          {working ? ' working' : ' resting'}
        </h2>
        <h1>{secondsToTime(mainTime)}</h1>
        <div className="box-buttons">
          <Button title="Start" onClick={() => configureWork()} />
          <Button title="Rest" onClick={() => configureRest(false)} />
          <Button
            className={!working && !resting ? 'hide' : ''}
            title={counting ? 'Pause' : 'Play'}
            onClick={() => setCounting(!counting)}
          />
        </div>
      </Container>
    );
  },
);

Pomodoro.propTypes = {
  defaultTime: P.number.isRequired,
  longRestTime: P.number.isRequired,
  shortRestTime: P.number.isRequired,
  numberOfCycles: P.number.isRequired,
};
