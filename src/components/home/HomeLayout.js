import React from 'react';
import {connect} from 'react-redux';

import './HomeLayout.scss';
import HostNewGame from './HostNewGame';
import JoinGame from './JoinGame';

const HomeLayout = () => {
  return (
    <div className="home-container">
      <h1>Aliases</h1>
      <div className="home-controls">
        <JoinGame/>
        <HostNewGame/>
      </div>
    </div>
  )
};

export default connect()(HomeLayout);
