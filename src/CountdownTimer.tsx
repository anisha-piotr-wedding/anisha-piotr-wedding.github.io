import React from "react";
import Countdown from "react-countdown";

const WEDDING_TIME_MS = 1620496800000;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return completed ? (
    <span>It's time to get married!</span>
  ) : (
    <span>
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds left!
    </span>
  );
};

export default () => {
  return <Countdown date={WEDDING_TIME_MS} renderer={renderer} />;
};
