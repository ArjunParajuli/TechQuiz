import React from 'react'
import { IoNewspaper } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-center py-4 bg-gradient-to-r from-blue-600 to-gray-900 text-white">
      <IoNewspaper className='h-10 w-10 mr-2 text-green-400' />
      <h1 className="text-3xl font-bold neon-text">Test Your Knowledge</h1>
    </div>
  )
}

export default Header