import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

const close = () => {
  document.getElementById('addFeatureFlag').style.display = "none";
}

const addFlag = () => {
  const flag = {"group": "one", "flagName": "goodTest", "flag": 888};
  postData('http://localhost:8081/services/add', flag);
}

const postData = async (url = '', data = {}) => {
  /* Express throws CORS errror on Content-Type: application/json.
  The solution is to add body-parser and send stringified JSON */

  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //headers: {'Content-Type': 'x-www-form-urlencoded'},
    //headers: { 'Content-Type': 'application/json'},
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
        <p>Some text in the Modal..</p>
        <button onClick={ () => { addFlag() } }>ADD FLAG</button>
      </div>      
    </div>
  );
}

export default Renderer;