import React from 'react'
import { HashLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-[100%] h-screen bg-[#fff] flex justify-center items-center'><HashLoader  loading size={50} speedMultiplier={1} color="#3600f7"/></div>
  )
}

export default Loading