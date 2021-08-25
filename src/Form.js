import './Form.css';
import React, { useState, useEffect } from 'react';

function Form({name}) {

  const [saveName, setName] = useState(name);
  const [isDeleted, setDeleted] = useState(false);

console.log('name', name);
  const handleDel = () => {
    name('')
    setName('')
    setDeleted(false)
  }
  
  const handleSave = () => {
    name(saveName)
    setDeleted(true)
  }

  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="Form">
      {isDeleted && <button onClick={handleDel} >Delete name</button>}
      
      <input 
        type="text" 
        onChange={(evt) => setName(evt.target.value)} 
        placeholder="Name.."
        value={saveName}
      />
      <button onClick={handleSave}>Save</button>
    </form>
  );
};

export default Form;
