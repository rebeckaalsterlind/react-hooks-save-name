import './App.css';
import Form from './Form';
import Print from './Print';
import React, { useState, useEffect } from 'react';

function App() {

  const [isName, setName] = useState('');

  return (
    <div className="App">
      <Print name={isName}/>
      <Form name={saveName => setName(saveName)}/>
    </div>
  );
}

export default App;
