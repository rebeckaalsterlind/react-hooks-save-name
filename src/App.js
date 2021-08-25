import './App.css';
import Form from './Form';
import Print from './Print';
import React, { useState } from 'react';

function App() {

  const [isName, setName] = useState(null);

  return (
    <div className="App">
      <Print name={isName}/>
      <Form name={saveName => setName(saveName)}/>
    </div>
  );
}

export default App;
