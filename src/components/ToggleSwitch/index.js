import React from 'react';
import styles from './styles.scss';
import poster from '../../utils/postData';

const switchToggled = async (featureFlagName) => {
  const flag = findFlagByName(featureFlagName);
  flag.value = flag.value === 'on' ? 'off' : 'on';
  const postData = {
    updateFlag: {
      "flagName": featureFlagName
    },
    newFlagData: flag
  }
  const result = await poster.postData('http://localhost:8081/services/update', postData);
}

const findFlagByName = (flagName) => {
  const flags = window.__API_DATA__;
  let result;
  flags.forEach(element => {
    if(element.flagName == flagName) {
      result = element;
    }
  });
  return result;
}

const Renderer = ({featureFlagName, val}) => {
  const checked = val === 'on' ? 'checked' : '';
  return (    
    <label className={styles.switch}>
        <input className={featureFlagName} onChange={ () => { switchToggled(featureFlagName) }} type="checkbox" defaultChecked={checked} />
        <span className={styles.slider} />
    </label>
  );
}

export default Renderer;