import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div >
      <h1 className='bg-orange-500 font-serif text-3xl text-center'> Know About US</h1>
     <div className='ml-2'>   
  <section className=' flex flex-col gap-3 '>
  <h1 className='mt-3 font-bold'>About Our Password Manager</h1>
  <p className='mb-5'>Our Password Manager helps you securely store, organize, and access all your passwords in one place...</p>
</section>

<section>
  <h2 className='mt-3 font-bold'>Why Use a Password Manager?</h2>
  <p className='mb-5 mt-3'>In an age where we have hundreds of online accounts, keeping track of passwords can become overwhelming...</p>
</section>

<section>
  <h2 className='mt-3 font-bold'>Key Features</h2>
  <ul className='mt-3'>
    <li><strong>Secure Encryption:</strong> All your passwords are encrypted with the latest encryption standards...</li>
    <li><strong>Auto-fill:</strong> Never type in a password again...</li>
    <li><strong>Password Generator:</strong> Create complex, random passwords for every account...</li>
    <li><strong>Cross-Device Sync:</strong> Access your passwords across all your devices...</li>
    <li><strong>Two-Factor Authentication (2FA):</strong> we use local storage to secure your passwords...</li>
  </ul>
</section>

<section>
  <h2 className='mt-3 font-bold'>Security and Privacy</h2>
  <p className='mb-5 mt-3'>We take your privacy and security seriously. Your passwords are encrypted locally...</p>
</section>

<section>
  <h2 className='mt-3 font-bold'>How It Works</h2>
  <ol className='mt-3'>
    <li>Create a master password...</li>
    <li>Start adding your passwords...</li>
    <li>Access your vault anytime...</li>
  </ol>
</section>

<section>
  <h2 className='mt-3 font-bold'>About Us</h2>
  <p className='mb-5 mt-3'>We are a team of passionate security experts and developers...</p>
</section>



<section>
  <h2 className='font-bold'>Get Started</h2>
  <p className='mb-5 mt-3'>Ready to take control of your passwords? <Link to="/"><b>Get Started today!</b></Link></p>
</section>
</div>

      
    </div>
  )
}

export default About
