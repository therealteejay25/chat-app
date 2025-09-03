import React from "react";

type SearchIconType = {
    width: number
    height: number
}

const Search = ({ width, height }: SearchIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.4165 44.3333C35.8304 44.3333 45.0832 35.0806 45.0832 23.6667C45.0832 12.2528 35.8304 3 24.4165 3C13.0027 3 3.74988 12.2528 3.74988 23.6667C3.74988 35.0806 13.0027 44.3333 24.4165 44.3333Z"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50.2501 49.5L39.0126 38.2625"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Search;
