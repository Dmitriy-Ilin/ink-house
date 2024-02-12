import React from 'react'
import { useAppSelector } from '../hooks/hooks';
import PaintItem from './PaintItem';

const England: React.FC = () => {
  const paints = useAppSelector(state => state.paint.value);

  return (
    <div className='products__wrapper'>
        {paints.map(item => 
          <>
            <PaintItem key={item.england.first.id} paint={item.england.first}/>
            <PaintItem key={item.england.second.id} paint={item.england.second}/>
            <PaintItem key={item.england.third.id} paint={item.england.third}/>
            <PaintItem key={item.england.fourth.id} paint={item.england.fourth}/>
            <PaintItem key={item.england.fifth.id} paint={item.england.fifth}/>
            <PaintItem key={item.england.sixth.id} paint={item.england.sixth}/>
          </>
        )}   
    </div>
  )
}

export default England