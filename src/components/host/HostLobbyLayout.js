import React from 'react';
import {connect} from 'react-redux';

import * as Team from '../../constants/Team';
import * as HostActions from '../../actions/HostActions';

const isOnTeam = (team) => (player) => player.team === team;
const getPlayersOnTeam = (players, team) => players.filter(isOnTeam(team));

const pluralize = (word, number) => {
  return number === 1
    ? word
    : word + 's';
};

const HostLobbyLayout = ({
    gameId,
    players,
    changePlayerTeam,
    shuffleTeams,
    startGame
  }) => {
  const numRedPlayers = getPlayersOnTeam(players, Team.RED).length;
  const numBluePlayers = getPlayersOnTeam(players, Team.BLUE).length;

  const playersListItems = players.map((player) =>
    <li key={player.id}>
      {player.name} - {player.team}
      <button onClick={() => changePlayerTeam(player)}>
        Change Team
      </button>
    </li>
  );

  const isGameReadyToStart = (
    numRedPlayers >= 2 &&
    numBluePlayers >= 2 &&
    numRedPlayers === numBluePlayers
  );

  return (
    <div>
      <h2>
        GAME ID: {gameId}
      </h2>
      <p>Players should enter the above game ID to join...</p>
      <h3>{numRedPlayers} red {pluralize('player', numRedPlayers)}</h3>
      <h3>{numBluePlayers} blue {pluralize('player', numBluePlayers)}</h3>
      <ul>{playersListItems}</ul>
      <button onClick={shuffleTeams}>Shuffle Teams</button>
      <button onClick={startGame} disabled={!isGameReadyToStart}>Start Game</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    gameId,
    players
  } = state;
  return {
    gameId,
    players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePlayerTeam: player => dispatch(HostActions.changePlayerTeam(player)),
    shuffleTeams: () => dispatch(HostActions.shuffleTeams()),
    startGame: () => dispatch(HostActions.startGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostLobbyLayout);
