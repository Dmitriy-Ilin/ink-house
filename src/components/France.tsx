import React from 'react'
import PaintItem from './PaintItem'
import { useAppSelector } from '../hooks/hooks'

const France: React.FC = () => {
  const paints = useAppSelector(state => state.paint.value);

  return (
    <div className='products__wrapper'>
        {paints.map(item => 
          <>
            <PaintItem key={item.france.first.id} paint={item.france.first}/>
            <PaintItem key={item.france.second.id} paint={item.france.second}/>
            <PaintItem key={item.france.third.id} paint={item.france.third}/>
            <PaintItem key={item.france.fourth.id} paint={item.france.fourth}/>
            <PaintItem key={item.france.fifth.id} paint={item.france.fifth}/>
            <PaintItem key={item.france.sixth.id} paint={item.france.sixth}/>
          </>
        )}   
    </div>
  )
}

export default France