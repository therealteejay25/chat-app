import React from "react";

type BellIconType = {
    width: number,
    height: number
}

const Bell = ({ width, height }: BellIconType) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.5 16.6667C37.5 13.3515 36.183 10.1721 33.8388 7.82785C31.4946 5.48365 28.3152 4.16669 25 4.16669C21.6848 4.16669 18.5054 5.48365 16.1612 7.82785C13.817 10.1721 12.5 13.3515 12.5 16.6667C12.5 31.25 6.25 35.4167 6.25 35.4167H43.75C43.75 35.4167 37.5 31.25 37.5 16.6667Z"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.6038 43.4167C28.2376 44.0481 27.7118 44.5722 27.0793 44.9365C26.4468 45.3009 25.7296 45.4926 24.9997 45.4926C24.2697 45.4926 23.5526 45.3009 22.92 44.9365C22.2875 44.5722 21.7618 44.0481 21.3955 43.4167"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Bell;
