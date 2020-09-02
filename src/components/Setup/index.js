import React from 'react';
import styles from './styles.scss';
import poster from '../../utils/postData';
import { apiUrl } from '../../utils/getParams';

const setupDatabase = async () => {
  const result = await poster.postData(`${apiUrl}/setup`, {});
  console.log(result);
}

const dropDatabase = async () => {
  const result = await poster.postData(`${apiUrl}/dropdb`, {});
  console.log(result);
}

function Greetings({props}) {
  return(<div className={styles.wrapper}>
          <p><button onClick={ () => { dropDatabase() }}>DROP DATABASE</button></p>
          <p><button onClick={ () => { setupDatabase() }}>CREATE DATABASE</button></p>
        </div>);
}
export default Greetings;