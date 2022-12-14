import './App.css'
import { useState } from 'react';
import QuoteBox from './components/QuoteBox'
import Button from './components/Button'
import quotes from './components/quotes.json';

function App() {

  //CREANDO UN RANDOM PARA QUOTES
  const randomIndex = Math.floor(Math.random() * quotes.length);

  //CREANDO ASTEROIDES PARA EL BOTON
  const [index, setIndex] = useState(randomIndex);

  //CREANDO FUNCION PARA EL BOTON
  const changeQuote = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom)
  }

  //--------------------------------------------------------------------------------//
  // CREANDO ARREGLO COLORES RANDOM
  const colors = ["#FF8787", "#B1AFFF", "#594545", "#98A8F8", "#87AC62", "#BCE29E", "#F2D388", "#554994", "#80558C", "#354259"]

  //CREANDO VARABLE PARA ARREGLO RANDOM
  const colorRandom = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[colorRandom]}`;

  return (
    <div className="App">
      <div className="card">
        <QuoteBox colors={colors} colorRandom={colorRandom} index={index} />
        <Button changeQuote={changeQuote} colors={colors} colorRandom={colorRandom} />
      </div>
    </div>
  )
}

export default App
