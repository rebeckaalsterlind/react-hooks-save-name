import './App.css';
import Form from './Form';
import Print from './Print';
import React, { useState, useEffect } from 'react';

function App() {

  const [isName, setName] = useState('');

  return (
    <div className="App">
      <h1>Save name!</h1>
      <main>
        <Print name={isName}/>
        <Form name={saveName => setName(saveName)}/>
      </main>
    </div>
  );
}

export default App;
