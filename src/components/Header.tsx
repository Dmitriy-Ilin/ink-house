import React from 'react'

type HeaderProps = {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({isActive, setIsActive}) => {

    return (
    <>
        <header className='header'>
            <div className='header__mobile-logo'>
                <a href='#!'>
                    <img className='header__logo' src='star.svg' alt='logo'/>
                    <p className='header__name'>Ink. House</p>
                </a>
            </div>
            <div className='header-navigation'>
                <div className='container'>
                    <div className='header__top'>
                        <a href='#!'>
                            <img className='header__logo' src='star.svg' alt='logo'/>
                            <p className='header__name'>Ink. House</p>
                        </a>
                        <nav className='header__nav'>
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <a href='#!'>Репродукции</a>
                                </li>
                                <li className='nav__item'>
                                    <a href='#!'>Новинки</a>
                                </li>
                                <li className='nav__item'>
                                    <a href='#!'>О нас</a>
                                </li>
                                <li className='nav__item'>
                                    <button className='nav__item-btn'>
                                        <img src='shopping-cart.svg'/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div className='header__mobile'>
                            <div className='header__mobile-wrapper'>
                                <button 
                                    className={`header__mobile-menu ${isActive ? 'header__mobile-menu--active' : ''}`}
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    <span className={`${isActive ? 'header__mobile-span--active': ''} header__mobile-span`}></span>
                                </button>
                                <div className={`header__mobile-btn ${isActive ? 'header__mobile-btn--active' : ''}`}>
                                    <button className={`nav__item-btn ${isActive ? 'nav__item-btn--active' : ''}`}>
                                        <img src='shopping-cart.svg'/>
                                    </button>
                                </div>    
                            </div>
                            <div className={`mobile__menu ${isActive ? 'mobile__menu--active' : ''}`}>
                                <div>
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
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='container'>
                    <div className='header__main'>
                        <div className='header__wrapper'>
                            <div className='header__img'>
                            <img src='main1.svg' alt='paint'/>
                            </div>
                            <div>
                                <h1 className='header__title'>
                                    Реплики картин от <span className='header__title--accent'>Ink. House</span>
                                </h1>
                            <div className='header__text'>
                                <p>
                                    Высокое качество отрисовки на плотной бумаге или льняном холсте.
                                     Редкие произведения, доступные цены.
                                </p>
                            </div>
                                <div className='header__btn'>
                                    <button>Продукция</button>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
        </header>
    </>
    ) 
}

export default Header;