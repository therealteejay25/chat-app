import React from "react";

type GroupsIconType ={
    width: number
    height: number
}

const Groups = ({ width, height }: GroupsIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.9168 50V44.8333C44.9168 42.0928 43.8281 39.4644 41.8903 37.5266C39.9524 35.5887 37.3241 34.5 34.5835 34.5H13.9168C11.1763 34.5 8.54794 35.5887 6.61006 37.5266C4.67218 39.4644 3.5835 42.0928 3.5835 44.8333V50"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.2498 24.1667C29.9568 24.1667 34.5832 19.5403 34.5832 13.8333C34.5832 8.12639 29.9568 3.5 24.2498 3.5C18.5429 3.5 13.9165 8.12639 13.9165 13.8333C13.9165 19.5403 18.5429 24.1667 24.2498 24.1667Z"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M60.4165 50V44.8333C60.4148 42.5438 59.6528 40.3196 58.25 38.5101C56.8473 36.7006 54.8833 35.4082 52.6665 34.8358"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.3335 3.83582C44.5562 4.40493 46.5263 5.69763 47.9332 7.51012C49.3401 9.32261 50.1038 11.5518 50.1038 13.8462C50.1038 16.1407 49.3401 18.3699 47.9332 20.1823C46.5263 21.9948 44.5562 23.2875 42.3335 23.8566"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Groups;
