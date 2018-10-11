import React from 'react';
import {connect} from 'react-redux';

import HostLobbyLayout from './HostLobbyLayout';

const HostLayout = ({gameInProgress, players}) => {
  const layout = gameInProgress
    ? null
    : <HostLobbyLayout/>;
  return (
    <div>
      {layout}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    gameInProgress,
    players
  } = state;
  return {
    gameInProgress,
    players
  };
};

export default connect(mapStateToProps)(HostLayout);
