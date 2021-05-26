import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(0)

  const aumentarNumero=()=>{
    setNumero(numero+1);
  }
  const disminuirNumero=()=>{
    setNumero(numero-1);
  }

  return (
    <div>
      <h1>React + Electron </h1>
      <h1>Modo Dev</h1>
      
      <h2>{numero}</h2>
      <button onClick={()=>aumentarNumero()}>Aumentar</button>
      <button onClick={()=>disminuirNumero()}>Disminuir</button>
      

    </div>
  );
}

export default App;
