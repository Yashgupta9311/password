import React from 'react'
import { Link } from 'react-router-dom'


const Navbar2 = () => {
  return (
   
        <nav className='flex justify-around p-5 bg-blue-500'>
      <div className="logo font-bold">Password manager</div>
      <ul>
        <li className=' flex gap-5 '>
          <Link className='hover:font-semibold' to="/signup">Sign in</Link>
          <Link className='hover:font-semibold' to="/login">Login</Link>
          {/* <Link className='hover:font-semibold' to="/help">HELP</Link> */}
        </li>
      </ul>
    </nav>
      
   
  )
}

export default Navbar2
