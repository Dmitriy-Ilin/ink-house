import { useState } from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Products from './components/Products';
import Info from './components/Info';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`main-body ${isActive ? 'main-body--active' : ''}`}>
      <Header isActive={isActive} setIsActive={setIsActive}/>
      <Products />
      <Info />
      <Team />
      <Footer />
    </div>
  )
}

export default App
