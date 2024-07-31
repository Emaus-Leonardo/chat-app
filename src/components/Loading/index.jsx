import React from 'react'
import { MoonLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <MoonLoader color="#ff81a9" size={60} />
    </div>
  )
}
