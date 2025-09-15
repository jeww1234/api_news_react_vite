import React from 'react'
import Nav from "./Nav"

const Header = () => {
  return (
    <div className='bg-[black] flex flex-col items-center h-[450px] p-[2vh]'>
      <img src="/logo-w-black.png" alt="head-logo" className='logo mt-[3vh] p-[0.5vh] box-border'/>
      <div className='w-[5vh] h-[0.1vh] bg-[white] my-[1vh]'></div>
      <p className='text-[white] italic font-[serif]'>A Magazine of Politics and Culture</p>
      <Nav />
      
    </div>
  )
}

export default Header
