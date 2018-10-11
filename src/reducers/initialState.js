import * as AppState from '../constants/AppState';
import * as Team from '../constants/Team';

export default {
  appState: AppState.HOST,
  gameInProgress: false,
  gameId: 'ABC123',
  players: [
    {
      id: 0,
      name: 'Player 1',
      team: Team.RED
    },
    {
      id: 1,
      name: 'Player 2',
      team: Team.BLUE
    },
    {
      id: 2,
      name: 'Player 3',
      team: Team.BLUE
    },
    {
      id: 3,
      name: 'Player 4',
      team: Team.RED
    }
  ]
};
