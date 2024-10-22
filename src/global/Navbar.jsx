import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-7'>
      <div>
        <ul className='flex gap-10 items-center text-white'>
          <li><NavLink to="/"><img src="/icons/header__icon.png" alt="logo" className='w-36' /></NavLink></li>
          <li><NavLink to="/">Uy</NavLink></li>
          <li><NavLink to="/shop">To'plam</NavLink></li>
          <li><NavLink to="/about">Biz Haqimizda</NavLink></li>
          <li><NavLink to="/contact">Aloqa</NavLink></li>
        </ul>
      </div>
      <div className='mr-20'>
        <select name="Lang" id="lng">
          <option value="uz">O'zbek</option>
          <option value="ru">Rus</option>
          <option value="en">Ingiliz</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar