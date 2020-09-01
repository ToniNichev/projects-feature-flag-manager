import React from 'react';
import styles from './styles.scss';

const editFlag = () => {
}


const Renderer = ({flagEditable, editFlag}) => {  
  console.log("!!!!!!!!!", flagEditable);
  if(!flagEditable) {
    return (
      <button onClick={() => { editFlag()} }>EDIT</button>
    );
  }
  else {
    return (
      <button onClick={() => { editFlag()} }>!!!!</button>
    );
  }

}

export default Renderer;