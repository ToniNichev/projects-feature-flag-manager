import React, {Component} from 'react';
import styles from './styles.scss';
import ToggleSwitch from '../ToggleSwitch';
import BulletPoint from '../BulletPoint';
import AddFlagPopup from '../AddFlagPopup';
import poster from '../../utils/postData';
import EditDelete from '../EditDelete';


class Renderer extends Component {
  
  
  constructor(props) {
    super(props);
    this.getFlags();
    this.addFlagVisible = false;
    this.state = {
      addFlagVisible: false,
      flagEditable: false,
    };
  }  
  

  addFlag() {
    this.setState({addFlagVisible: true});
  }

  closePopup() {
    this.setState({addFlagVisible: false});    
    this.getFlags();
  }  

  async getFlags() { 
    const result = await poster.postData('http://localhost:8081/services/get', {});

    if(JSON.stringify(result) !== JSON.stringify(window.__API_DATA__)) {
      window.__API_DATA__ = result;
      this.forceUpdate();
    } 
  }

  editFlag() {
    this.setState({flagEditable: !this.state.flagEditable});     
  }

  render() {
    const featureFlags = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;

    return (
      <div className={styles.wrapper}>
          <div className={styles.leftRail}>
            <div className={styles.title}>FLAGS</div>
              {featureFlags.map( (flag) => 
                <div key={flag.flagName} className={styles.flagWrapper}>
                  <BulletPoint status={this.state.flagEditable} />
                  <span className={styles.flagName}>{flag.flagName}</span>
                  <span className={styles.flagValue}><ToggleSwitch featureFlagName={flag.flagName} val={flag.value} /></span>
                </div>
              )}
          </div>      
          <div className={styles.rightRail}>
            <button onClick={() => { this.addFlag()} }>+ ADD</button>
            <EditDelete flagEditable={this.flagEditable} editFlag={ () => { this.editFlag() } } />
          </div>
          {this.state.addFlagVisible ? <AddFlagPopup closePopup={ () => {this.closePopup() } } /> : null}
      </div>
    );
  }

}

export default Renderer;