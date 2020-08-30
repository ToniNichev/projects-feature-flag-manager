import React from 'react';
import styles from './styles.scss';
import AddFlagPopup from '../AddFlagPopup';

const addFlag = () => {
  document.getElementById('addFeatureFlag').style.display = "block";
}


const Renderer = ({title}) => {
  const featureFlags = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
  
  return (
    <div className={styles.wrapper}>
        <div className={styles.leftRail}>
          <div className={styles.title}>FLAGS</div>
            {featureFlags.map( (flag) => <div className={styles.flagWrapper}>{flag.flagName}</div>)}
        </div>
        <div className={styles.rightRail}>
          <button onClick={() => { addFlag()} }>+ ADD</button>
        </div>
        <AddFlagPopup />
    </div>
  );
}

export default Renderer;