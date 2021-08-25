import './Form.css';
import React, { useState, useEffect } from 'react';

function Form({name}) {

  const [saveName, setName] = useState(name);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    name(saveName)
  }


  return (
    <form onSubmit={handleSubmit} className="Form">
      <input 
        type="text" 
        onChange={(evt) => setName(evt.target.value)} 
        placeholder="Name.."
        value={saveName}
      />
      <button type="submit" >Save</button>
    </form>
  );
};

export default Form;
