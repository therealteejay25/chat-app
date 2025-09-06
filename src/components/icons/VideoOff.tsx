import React from "react";

type VideoOffIconType = {
    width: number,
    height: number,
}

const VideoOff = ({ width, height } : VideoOffIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_737_398)">
        <path
          d="M40 40V42.5C40 43.8261 39.4732 45.0979 38.5355 46.0355C37.5978 46.9732 36.3261 47.5 35 47.5H7.5C6.17392 47.5 4.90215 46.9732 3.96447 46.0355C3.02678 45.0979 2.5 43.8261 2.5 42.5V17.5C2.5 16.1739 3.02678 14.9021 3.96447 13.9645C4.90215 13.0268 6.17392 12.5 7.5 12.5H12.5M26.65 12.5H35C36.3261 12.5 37.5978 13.0268 38.5355 13.9645C39.4732 14.9021 40 16.1739 40 17.5V25.85L42.5 28.35L57.5 17.5V42.5"
          stroke="#070707"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 2.5L57.5 57.5"
          stroke="#070707"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_737_398">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VideoOff;
