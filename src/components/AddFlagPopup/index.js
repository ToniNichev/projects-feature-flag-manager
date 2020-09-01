import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

const close = () => {
  document.getElementById('addFeatureFlag').style.display = "none";
}

const addFlag = async (closePopup) => {
  const flag = {
    "group": document.getElementById('addFeatureFlag').querySelector("input.group").value,
    "flagName": document.getElementById('addFeatureFlag').querySelector("input.flagName").value ,
    "value": document.getElementById('addFeatureFlag').querySelector("input.value").value,
  };
  const result = await postData('http://localhost:8081/services/add', flag);
  closePopup();
}

const postData = async (url = '', data = {}) => {
  /* Express throws CORS errror on Content-Type: application/json.
  The solution is to add body-parser and send stringified JSON */

  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'text/plain' },
    body: JSON.stringify(data)
  });
  return  response.json(); // parses JSON response into native JavaScript objects
}

const Renderer = ({closePopup}) => {  
  return (
    <div id="addFeatureFlag" className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={ () => { closePopup() } } className={styles.close}>&times;</span>
        <div className={styles.flagProperties}>
          <p><label>FLAG NAME</label> <input className="flagName" type="text" /></p>
          <p><label>GROOUP</label> <input className="group" type="text" /></p>
          <p><label>VALUE</label> <input className="value" type="text" /></p>
          <p><button onClick={ () => { addFlag(closePopup) } }>ADD FLAG</button></p>
        </div>          
      </div>      
    </div>
  );
}

export default Renderer;