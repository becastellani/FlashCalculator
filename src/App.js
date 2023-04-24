import React, { useState } from 'react';
import './index.css'
import { Button, Box, FormControl } from '@mui/material';
import Footer from './components/Footer'
function App() {
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState('');

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  if (!time || !distance) {
    alert('Por favor, preencha todos os campos!');
  } else {
    const flashTime = (distance / 1100) * 60;
    const resultTime = flashTime.toFixed(2);
    if (resultTime < 1) {
      const resultSeconds = (resultTime * 60).toFixed(2);
      setResult(`O Flash faria sua atividade em ${resultSeconds} segundos`);
    } else {
      const resultMinutes = Math.floor(resultTime);
      const resultSeconds = Math.round((resultTime - resultMinutes) * 60);
      setResult(`O Flash faria sua atividade em ${resultMinutes} minutos e ${resultSeconds} segundos`);
    }
  }
}

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet"></link>
      <div className='container'>
      <div className='titulo'>
      <h1>Flash Calculator</h1>
      </div>
      <div className='formulario'>
        <FormControl component="form" onSubmit={handleSubmit}>
          <Box>
            <label>
              Tempo de sua Corrida/Atividade (minutos): </label><br></br>
              <input type="number" className="inputTempo"value={time} onChange={handleTimeChange} />
            <br />
            <label className='distlabel'>
              Distancia (quilômetros): </label> <br></br>
              <input type="number" className="inputDistancia" value={distance} onChange={handleDistanceChange} />
          </Box>
        
          <br />
          <Button type="submit" className='botaoConv'>Converter</Button>
          <div className='considere'>
          <p>(Considerando a velocidade de 1100km/h)</p>
          </div>
        </FormControl>
        </div>
        <div className='resultadoButton'>
        <p>{result}</p>
        </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
