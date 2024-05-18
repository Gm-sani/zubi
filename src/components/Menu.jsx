import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className=''>
      <ul className='flex flex-row gap-3 p-3 text-zinc-100 bg-slate-600'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/signin'}>Sign In</Link></li>
        <li><Link to={'/signup'}>Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default Menu;
