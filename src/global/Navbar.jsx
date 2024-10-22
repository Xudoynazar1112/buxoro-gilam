import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-7'>
      <div>
        <ul className='flex gap-10 items-center text-white'>
          <li><a href="/"><img src="/icons/header__icon.png" alt="logo" className='w-36' /></a></li>
          <li><a href="/">Uy</a></li>
          <li><a href="/shop">To'plam</a></li>
          <li><a href="/about">Biz Haqimizda</a></li>
          <li><a href="/contact">Aloqa</a></li>
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