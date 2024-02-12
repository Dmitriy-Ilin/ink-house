import React from 'react'
import { useAppSelector } from '../hooks/hooks';
import PaintItem from './PaintItem';

const Germany: React.FC = () => {
  const paints = useAppSelector(state => state.paint.value);

  return (
    <div className='products__wrapper'>
        {paints.map(item => 
          <>
            <PaintItem key={item.germany.first.id} paint={item.germany.first}/>
            <PaintItem key={item.germany.second.id} paint={item.germany.second}/>
            <PaintItem key={item.germany.third.id} paint={item.germany.third}/>
            <PaintItem key={item.germany.fourth.id} paint={item.germany.fourth}/>
            <PaintItem key={item.germany.fifth.id} paint={item.germany.fifth}/>
            <PaintItem key={item.germany.sixth.id} paint={item.germany.sixth}/>
          </>
        )}   
    </div>
  )
}


export default Germany