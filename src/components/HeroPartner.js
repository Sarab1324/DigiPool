import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'

function HeroPartner() {
  return (
    <>
    <div className="hero-partner">
        <FaChevronRight color='black' size={480} className='right-arrow'/>
        <h1>Join Our Partner Pool</h1>
        <h4>Get verified & Grow with us!</h4>
        <Link to={'/signup'}>
        <button className='btn btn-success p-3'>Get Started for FREE</button>

        </Link>
        <p>Or</p>
        <Link to={'/signin'}>
        <button className='btn btn-light'>Login</button>

        </Link>
        <p>Just sign up and get started for FREE</p>
    </div>

    </>
  )
}

export default HeroPartner