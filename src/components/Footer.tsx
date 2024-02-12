import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__item'>        
                    <a href='#!'><img className='footer__item-logo' src='star.svg' alt='logo'/>  Ink. House</a>
                    <div>
                        <a className='footer__item-number' href='#!'>+7 (999) 543-54-54</a>
                        <p>Мастерская</p>
                    </div>
                </div>
                <div className='footer__item'>
                    <h4 className='footer__title'>Репродукции</h4>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='#!'>Франция</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='#!'>Германия</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='#!'>Англия</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <h4 className='footer__title'>Новинки</h4>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='#!'>2021</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='#!'>2020</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <h4 className='footer__title'>О нас</h4>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='#!'>Художники</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='#!'>Менеджеры</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <div className='footer__item-wrapper'>
                        <a href='#!'><img src='socials3.svg' alt='facebook'/></a>
                        <a href='#!'><img src='socials1.svg' alt='facebook'/></a>
                        <a href='#!'><img src='socials2.svg' alt='facebook'/></a>
                    </div>
                    <p>Ink. House ®</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer