import React from 'react';
import styles from './styles.scss';

const toggleSelect = (element) => {
  element.target.className = element.target.className.search('BulletPoint-flagBuletSelected') ? styles.flagBuletSelected : styles.flagBuletEditable;
}


const Renderer = ({status}) => {  
  return (
    <span>
        {status ? 
            <span className={styles.flagBuletEditable} onClick={ (element) => {toggleSelect(element)} }></span> :
            <span className={styles.flagBulet }></span>
        }        
        <span className={styles.spacing}></span>
    </span>
  );
}

export default Renderer;