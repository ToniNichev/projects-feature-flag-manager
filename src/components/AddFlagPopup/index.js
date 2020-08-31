import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

const close = () => {
  document.getElementById('addFeatureFlag').style.display = "none";
}

const addFlag = async () => {
  const flag = {"group": "one", "flagName": "goodTest", "flag": 888};
  const result = await postData('http://localhost:8081/services/add', flag);
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

const Renderer = () => {

  useEffect(() => {
    // Update the document title using the browser API
  });

  
  return (
    <div id="addFeatureFlag" className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={ () => { close() } } className={styles.close}>&times;</span>
        <div className={styles.flagProperties}>
          <p><label>FLAG NAME</label> <input type="text" /></p>
          <p><label>GROOUP</label> <input type="text" /></p>
          <p><label>VALUE</label> <input type="text" /></p>
          <p><button onClick={ () => { addFlag() } }>ADD FLAG</button></p>
        </div>          
      </div>      
    </div>
  );
}

export default Renderer;