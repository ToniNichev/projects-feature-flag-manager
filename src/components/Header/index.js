import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import GenralPopup from '../GeneralPopup';


const Header = ( {title} ) => (
  <div>
    <div className={styles.wrapper}>      
      <h2>{ title } { process.env.APP_NAME } </h2>
      <ul>
        <li><Link to='/home'>FLAGS</Link></li>
        <li><Link to='/greetings'>SETTINGS</Link></li>       
        <li><Link to='/about'>ABOUT</Link></li>
      </ul>
    </div>
    <GenralPopup showPopup={false} />
  </div>
);
export default Header;