import './Form.css';
import React, { useState } from 'react';

interface Props {
  name(saveName: string): void;
}

function Form(props: Props) {
  let {name} = props;
  
  const [saveName, setName] = useState('')
  const [isDeleted, setDeleted] = useState(false);
  
  const handleSave = ():void => {
    name(saveName);
    setDeleted(true);
  };

  const handleDel = ():void => {
    name('');
    setName('');
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
