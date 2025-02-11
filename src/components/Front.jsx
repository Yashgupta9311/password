import React from 'react'
// import Navbar from './navbar'
import { Link } from 'react-router-dom'
import Navbar2 from './Navbar2'

const Front = ({ ongetStarted }) => {
    return (



        <div >
            <Navbar2 />
            <div className='flex flex-col justify-center items-center p-11 text-5xl '>

                Securely store and manage all your passwords in one place


                <div className="  ">

                    easy to access, safe to use, and fully encrypted

                </div>


            </div>
            <div>
                <p className='flex justify-center'>"Easily store and manage all your passwords in one secure place. Access them instantly, <br />enjoy peace of mind with top-tier encryption, and keep your sensitive information safe at all times."</p>
            </div>
            <div className='flex justify-center items-center mt-10 p-10 '>
            <Link className='hover:font-semibold' to="/home">
                <button  className=' h-12 w-60 font-bold flex justify-center items-center border rounded-lg  bg-blue-500 text-xl'>Get Started →
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Front
