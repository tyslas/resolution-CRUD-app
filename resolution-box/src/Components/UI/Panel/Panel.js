import React from 'react';
import { Panel } from 'react-bootstrap';
import Styles from './Panel.css';

const panel = () => {
  return (
    <div>
      <Panel bsClass={Styles.card}>Resolutions</Panel>
      <Panel>People</Panel>
    </div>
  )
}

export default panel;
