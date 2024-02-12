import React from 'react'

const MobileMenu = () => {
  return (
    <div className='mobile__menu'>
        <nav className='mobile__menu-nav'>
            <ul className='mobile__menu-list'>
                <li className='mobile__menu-item'>
                    <a href='#!'>Репродукции</a>
                </li>
                <li className='mobile__menu-item'>
                    <a href='#!'>Новинки</a>
                </li>
                <li className='mobile__menu-item'>
                    <a href='#!'>О нас</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default MobileMenu