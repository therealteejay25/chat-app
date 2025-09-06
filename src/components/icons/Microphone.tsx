import React from 'react'

type MicrophoneIconType = {
    width: number
    height: number
}

const Microphone = ({ width, height }: MicrophoneIconType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 2.5C28.0109 2.5 26.1032 3.29018 24.6967 4.6967C23.2902 6.10322 22.5 8.01088 22.5 10V30C22.5 31.9891 23.2902 33.8968 24.6967 35.3033C26.1032 36.7098 28.0109 37.5 30 37.5C31.9891 37.5 33.8968 36.7098 35.3033 35.3033C36.7098 33.8968 37.5 31.9891 37.5 30V10C37.5 8.01088 36.7098 6.10322 35.3033 4.6967C33.8968 3.29018 31.9891 2.5 30 2.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.5 25V30C47.5 34.6413 45.6563 39.0925 42.3744 42.3744C39.0925 45.6563 34.6413 47.5 30 47.5C25.3587 47.5 20.9075 45.6563 17.6256 42.3744C14.3437 39.0925 12.5 34.6413 12.5 30V25" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 47.5V57.5" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 57.5H40" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default Microphone