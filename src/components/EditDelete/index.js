import React from 'react';
import styles from './styles.scss';

const editFlag = () => {
}


const Renderer = ({flagEditable, editFlag}) => {  
  return (
    <button onClick={() => { editFlag()} }>EDIT</button>
  );
}

export default Renderer;