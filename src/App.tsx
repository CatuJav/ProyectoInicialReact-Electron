import React, { useState } from 'react';
const electron =window.require('electron');
const remote= electron.remote;
const {dialog}=remote;


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
      <button onClick={()=>{
        console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
      }}>Dialogo</button>
        
    </div>
  );
}

export default App;
