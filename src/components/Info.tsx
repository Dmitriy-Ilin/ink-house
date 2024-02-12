import React from 'react'

const Info = () => {
  return (
    <section className='info'>
        <div className='container'>
            <div className='info__top'>
                <img src='info.svg' className='info__top-star' alt='star'/>
                <h3 className='info__top-title'>Новая коллекция французских авторов</h3>
            </div>
            <div className='info__text'>
                <p>
                    Сложно сказать, почему акционеры крупнейших 
                    компаний призывают нас к новым свершениям, которые, 
                    в свою очередь, должны быть заблокированы в рамках 
                    своих собственных рациональных ограничений.
                </p>
                <p>
                    Принимая во внимание показатели успешности, граница
                    обучения кадров предопределяет высокую востребованность 
                    направлений прогрессивного развития.
                </p>
            </div>
            <div className='info__btn'>
                <button>Ознакомиться</button>
            </div>
        </div>
    </section>
  )
}

export default Info