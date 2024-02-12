import React from 'react'
import { IItem } from '../types/types'

type PaintItemProps = {
    paint: IItem
}

const PaintItem: React.FC<PaintItemProps> = ({paint}) => {

  return (
    <div className='products__item'>
        <div className='products__item-wrapper'>
            <img className='products__item-img' src={paint.url} alt='paint'/>
            <div>
                <p className='products__item-author'>{paint.author}</p>
                <h3 className='products__item-title'>{paint.name}</h3>
                <p className='product__item-paints'>{paint.paints}</p>
            </div>
            <div className='products__item-price'>
                <p>{paint.price} руб</p>
            </div>
            <div className='product__item-btn'>
                <button>В корзину</button>
            </div>
        </div>
    </div>
  )
}

export default PaintItem