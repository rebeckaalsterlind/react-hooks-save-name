import './Form.css';
import React, { useState, useEffect } from 'react';

function Form({name}) {
  const [saveName, setName] = useState('');


  return (
    <form onSubmit={() => name(saveName)} className="Form">
  
      <input 
        type="text" 
        onChange={(evt) => setName(evt.target.value)} 
        value={saveName}
        placeholder="Name.."
        value={saveName}
      />
      <button type="submit" onSubmit={(evt) => setName(saveName)}>Save</button>
    </form>
  );
}

export default Form;
