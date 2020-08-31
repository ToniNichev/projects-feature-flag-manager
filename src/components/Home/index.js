import React, {useEffect, useState} from 'react';
import styles from './styles.scss';
import ToggleSwitch from '../ToggleSwitch';
import AddFlagPopup from '../AddFlagPopup';
import poster from '../../utils/postData';

const getFlags = async () => {
  if(JSON.stringify(result) !== JSON.stringify(window.__API_DATA__)) {
    useForceUpdate();
  }  
  const result = await poster.postData('http://localhost:8081/services/get', {});
  window.__API_DATA__ = result;
}

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}


const Renderer = ({title}) => {
  const featureFlags = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
  const [value, setValue] = useState(0); // integer state
  const forceUpdate = useForceUpdate();
 
  useEffect(() => {
    getFlags();
  });

  return (
    <div className={styles.wrapper}>
        <div className={styles.leftRail}>
          <div className={styles.title}>FLAGS</div>
            {featureFlags.map( (flag) => 
              <div className={styles.flagWrapper}><span className={styles.flagName}>{flag.flagName}</span><span className={styles.flagValue}><ToggleSwitch featureFlagName={flag.flagName} /></span></div>
            )}
        </div>      
        <div className={styles.rightRail}>
          <button onClick={() => { addFlag()} }>+ ADD</button>
        </div>
        <button onClick={forceUpdate}>
          Click to re-render
        </button>
        <AddFlagPopup />
    </div>
  );
}

export default Renderer;