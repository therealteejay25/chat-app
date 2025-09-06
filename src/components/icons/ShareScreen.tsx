import React from 'react'

type ShareScreenIconType = {
    width: number
    height: number
}

const ShareScreen = ({ width, height }: ShareScreenIconType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M70.2666 40V50C70.2666 50.8841 69.9154 51.7319 69.2903 52.357C68.6652 52.9822 67.8173 53.3333 66.9333 53.3333H13.5999C12.7159 53.3333 11.868 52.9822 11.2429 52.357C10.6178 51.7319 10.2666 50.8841 10.2666 50V16.6667C10.2666 15.7826 10.6178 14.9348 11.2429 14.3097C11.868 13.6845 12.7159 13.3333 13.5999 13.3333H43.5999M23.5999 66.6667H56.9333M30.2666 53.3333V66.6667M50.2666 53.3333V66.6667M56.9333 13.3333H70.2666M70.2666 13.3333V26.6667M70.2666 13.3333L53.5999 30" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

  )
}

export default ShareScreen