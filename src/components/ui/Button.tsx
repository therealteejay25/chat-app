import React from 'react'
type ButtonType = {
  label: string,
  onClick: Function,
}

const Button = ({label, onClick}: ButtonType) => {
  return (
    <div className='bg-base inner w-full rounded-xl py-3 flex items-center justify-center font-semibold cursor-pointer px-6'>
      {label}
    </div>
  )
}

export default Button