import React from 'react';
import {Link} from 'react-router-dom';
import LogoHPA from '../Assets/LogoHPA.png';
import bagHPA from '../Assets/bagHPA.png';

export default function Navbar() {
  return (
    <nav className='Navbar'>

      <Link className='Navbar-link' to='/'>
      <img src={LogoHPA} alt='Logo HPA' style={{ width: '100px', height: 'auto' }} />
      </Link>

      {/* <Link className='Navbar-link' to='/acceuil'>Acceuil</Link> */}
      <Link className='Navbar-link' to='/about'>About</Link>
      <Link className='Navbar-link' to='/Piecesa'>Pieces Auto</Link>
      <Link className='Navbar-link' to='/Reparation'>Reparation</Link>
      
      <Link className='Navbar-link' to='/login'>Login</Link>
      

      <Link className='Navbar-link' to='/bag'>
      <img src={bagHPA} alt='bag HPA' style={{ width: '40px', height: 'auto'}} />
      </Link>
      
    </nav>
  )
}



