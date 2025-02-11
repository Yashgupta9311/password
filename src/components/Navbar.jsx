import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-around p-5 bg-orange-500'>
      <div className="logo font-bold">Password manager</div>
      <ul>
        <li className=' flex gap-5 '>
          <Link className='hover:font-semibold' to="/home">HOME</Link>
          <Link className='hover:font-semibold' to="/about">ABOUT</Link>
          {/* <Link className='hover:font-semibold' to="/help">HELP</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
