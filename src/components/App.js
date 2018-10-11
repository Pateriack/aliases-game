/* eslint-disable import/no-named-as-default */

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import {connect} from 'react-redux';

import * as AppState from '../constants/AppState';
import HomeLayout from './home/HomeLayout';
import HostLayout from './host/HostLayout';
import PlayerLayout from './player/PlayerLayout';

const getAppLayout = (appState) => {
  switch(appState) {
    case AppState.HOST:
      return <HostLayout/>
    case AppState.PLAYER:
      return <PlayerLayout/>
    case AppState.HOME:
    default:
      return <HomeLayout/>
  }
};

class App extends React.Component {
  render() {
    const {appState} = this.props;

    const layout = getAppLayout(appState);

    return (
      <div>
        {layout}
      </div>
    );
  }
}

App.propTypes = {
  appState: PropTypes.oneOf([
    AppState.HOME,
    AppState.HOST,
    AppState.PLAYER
  ])
};

const mapStateToProps = (state) => {
  const {appState} = state;
  return {appState};
}

export default hot(module)(
  connect(mapStateToProps)(App)
);
