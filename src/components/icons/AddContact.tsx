import React from 'react'

type AddContactIconType = {
    width: number,
    height: number,
}

const AddContact = ({ width, height }: AddContact) => {
  return (
    <svg width={width} height={height} viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M53.6001 70V63.3333C53.6001 59.7971 52.1953 56.4057 49.6949 53.9052C47.1944 51.4048 43.803 50 40.2668 50H16.9334C13.3972 50 10.0058 51.4048 7.50534 53.9052C5.00486 56.4057 3.6001 59.7971 3.6001 63.3333V70" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.5999 36.6667C35.9637 36.6667 41.9333 30.6971 41.9333 23.3333C41.9333 15.9695 35.9637 10 28.5999 10C21.2361 10 15.2666 15.9695 15.2666 23.3333C15.2666 30.6971 21.2361 36.6667 28.5999 36.6667Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66.9331 26.6667V46.6667" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76.9331 36.6667H56.9331" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

  )
}

export default AddContact