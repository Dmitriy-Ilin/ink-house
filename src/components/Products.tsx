import React, { useState } from 'react'
import France from './France'
import Germany from './Germany';
import England from './England';

const Products = () => {
  const [isActive, setIsActive] = useState(1);

  let returningItem;
  if (isActive === 1) returningItem = <France />
  else if (isActive === 2) returningItem = <Germany />
  else if (isActive === 3) returningItem = <England />

  return (
    <section className='products'>
        <div className='container'>
            <div className='products__top'>
                <h2 className='products__title'>Репродукция</h2>
                <ul className='products__category-list'>
                    <li className='products__category-item'>
                        <button 
                            className={`product__category-btn ${isActive === 1 ? 'product__category-btn--active' : ''}`}
                            onClick={() => setIsActive(1)}
                        >
                            Франция
                        </button>
                    </li>  
                    <li className='products__category-item'>
                        <button 
                            className={`product__category-btn ${isActive === 2 ? 'product__category-btn--active' : ''}`} 
                            onClick={() => setIsActive(2)}
                        >
                            Германия
                        </button>
                    </li> 
                    <li className='products__category-item'>
                        <button 
                            className={`product__category-btn ${isActive === 3 ? 'product__category-btn--active' : ''}`} 
                            onClick={() => setIsActive(3)}
                        >
                            Англия
                        </button>
                    </li>       
                </ul>
            </div>
            <div className='products__list'>
                {returningItem}
            </div> 
        </div>
    </section>
  )
}

export default Products