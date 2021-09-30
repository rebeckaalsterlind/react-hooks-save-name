import './Form.css';
import React, { useState } from 'react';

interface Props {
  name: any,
  saveName(saveName: string): void;

}

function Form(props: Props) {

  let {name} = props;
  
  const [saveName, setName] = useState(name);
  const [isDeleted, setDeleted] = useState(false);
  
  const handleSave = () => {
    name(saveName);
    setDeleted(true);
  };

  const handleDel = () => {
    name('');
    setName(null);
    setDeleted(false);
  };

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