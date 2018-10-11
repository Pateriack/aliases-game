import React from 'react';
import {connect} from 'react-redux';

const PlayerLayout = () => {
  return (
    <h2>Player</h2>
  )
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(PlayerLayout);
