import React from "react";

type CheckIconType = {
  width: number;
  height: number;
  className?: string;
};

const Check = ({ width, height, className }: CheckIconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.8333 26.6381V29.0147C54.8301 34.5855 53.0263 40.006 49.6907 44.4678C46.3552 48.9296 41.6668 52.1936 36.3246 53.7732C30.9825 55.3527 25.2729 55.163 20.0473 53.2324C14.8218 51.3019 10.3603 47.7338 7.32827 43.0605C4.29623 38.3872 2.85609 32.8589 3.22262 27.3002C3.58916 21.7415 5.74274 16.4503 9.36218 12.2155C12.9816 7.98078 17.873 5.02948 23.3068 3.80179C28.7406 2.5741 34.4257 3.13578 39.5141 5.40308"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M54.8335 8.34814L29.0001 34.2073L21.2501 26.4573"
        stroke="#F3F3F3"
        stroke-width="5.58"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Check;
