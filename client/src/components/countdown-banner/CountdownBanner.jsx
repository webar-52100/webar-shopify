import React from 'react';
import './CountdownBanner.css';

import { useState, useEffect } from 'react';
/**
 * 
 * @param {date} format yyyy-mm-gg 
 * @returns rendered comppnent
 */
function CountdownBanner({date, title, subtitle}) {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={i}>
        <div className='CountdownBanner-cell'>
          {timeLeft[interval]} 
        </div>
        <div>
          {interval}{" "}
          </div>
      </div>
    );
  });
  return (
    <div className='CountdownBanner'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className='CountdownBanner-timer'>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default CountdownBanner;