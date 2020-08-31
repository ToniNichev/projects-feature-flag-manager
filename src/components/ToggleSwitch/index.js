import React from 'react';
import styles from './styles.scss';
import poster from '../../utils/postData';

const switchToggled = (featureFlagName) => {

}

const Renderer = ({featureFlagName}) => {
  
  return (    
    <label className={styles.switch}>
        <input onClick={ () => { switchToggled(featureFlagName) }} type="checkbox"/>
        <span className={styles.slider} />
    </label>
  );
}

export default Renderer;