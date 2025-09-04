import React from "react";

type CalendarIconType = {
    width: number
    height: number
}

const Calendar = ({ width, height }: CalendarIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.0833 8.66663H8.91667C6.0632 8.66663 3.75 10.9798 3.75 13.8333V50C3.75 52.8534 6.0632 55.1666 8.91667 55.1666H45.0833C47.9368 55.1666 50.25 52.8534 50.25 50V13.8333C50.25 10.9798 47.9368 8.66663 45.0833 8.66663Z"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37.3335 3.5V13.8333"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6665 3.5V13.8333"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 24.1666H50.25"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Calendar;
