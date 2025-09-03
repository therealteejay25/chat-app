import React from "react";

type MessageIconType ={
    width: number
    height: number
}

const Message = ({ width, height }: MessageIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.25 34C50.25 35.3703 49.7057 36.6844 48.7367 37.6534C47.7678 38.6223 46.4536 39.1667 45.0833 39.1667H14.0833L3.75 49.5V8.16667C3.75 6.79638 4.29434 5.48222 5.26328 4.51328C6.23222 3.54434 7.54638 3 8.91667 3H45.0833C46.4536 3 47.7678 3.54434 48.7367 4.51328C49.7057 5.48222 50.25 6.79638 50.25 8.16667V34Z"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Message;
