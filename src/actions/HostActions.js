import * as ActionTypes from '../constants/ActionTypes';

export const changePlayerTeam = (player) => {
  return {
    type: ActionTypes.CHANGE_PLAYER_TEAM,
    meta: {
      socket: true
    },
    payload: {
      playerId: player.id
    }
  }
};

export const shuffleTeams = () => {
  return {
    type: ActionTypes.SHUFFLE_TEAMS,
    meta: {
      socket: true
    }
  }
};

export const startGame = () => {
  return {
    type: ActionTypes.START_GAME,
    meta: {
      socket: true
    }
  }
};
