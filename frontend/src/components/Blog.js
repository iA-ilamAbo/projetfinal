import React from 'react';
import {Link} from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <Link className='Navbar-link' to='/blog'>Blog</Link>
    </div>
  )
}