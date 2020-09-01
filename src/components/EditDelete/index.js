import React from 'react';
import styles from './styles.scss';

const editFlag = () => {
}


const Renderer = ({flagEditable, editFlag}) => {  
  if(!flagEditable) {
    return (
      <button onClick={() => { editFlag()} }>EDIT</button>
    );
  }
  else {
    return (
      <div>
        <button className={styles.deleteButton} onClick={() => { editFlag()} }>DELETE</button>
        <button onClick={() => { editFlag()} }>CANCEL</button>
      </div>
    );
  }

}

export default Renderer;