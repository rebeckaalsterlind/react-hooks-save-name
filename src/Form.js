import './Form.css';
import React, { useState, useEffect } from 'react';

function Form({name}) {

  const [saveName, setName] = useState(name);

  const handleSubmit = (evt) => {
    evt.preventDefault();

  }

  const handleDel = () => {
    name('')
    setName('')
  }
  
  return (
    <form onSubmit={handleSubmit} className="Form">
      <button onClick={handleDel} >Delete name</button>
    
      <input 
        type="text" 
        onChange={(evt) => setName(evt.target.value)} 
        placeholder="Name.."
        value={saveName}
      
      />
      <button onClick={() => name(saveName)}>Save</button>
    </form>
  );
};

export default Form;
