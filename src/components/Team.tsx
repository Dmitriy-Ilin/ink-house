import React from 'react'

const Team: React.FC = () => {
  return (
    <section className='team'>
        <div className='container'>
            <div className='team__wrapper'>
                <div className='team__img'>
                <img src='hand.svg' alt='paint' className='team__left'/>
                </div>
                <div className='team__right'>
                    <h3 className='team__title'>Наша команда</h3>
                    <p className='team__text'>
                        Значимость этих проблем настолько очевидна, что базовый вектор 
                        развития позволяет оценить значение экспериментов, поражающих по
                        своей масштабности и грандиозности. Мы вынуждены отталкиваться от 
                        того, что консультация с широким активом.
                    </p>
                    <div className='team__profiles'>
                        <img src='profile1.svg' alt='profile'/>
                        <img src='profile2.svg' alt='profile'/>
                        <img src='profile3.svg' alt='profile'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team