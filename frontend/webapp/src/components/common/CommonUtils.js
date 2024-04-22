export const PlayerType = {
  PARTICIPANT: 0,
  MAIN: 1,
  HOST: 2,
};

export const StrategyType = {
  RANDOM: 0,
  SPECIFIC: 1,
};

export const SelectedAnswerType = {
  HINT: 0,
  ANSWER_OPTION: 1,
};

export const HintType = {
  SKIP_QUESTION: 0,
  MAJORITY_OPINION: 1,
  TWO_OPINIONS: 2,
};

export const GameOverReasonType = {
  ALL_REGULAR_PLAYERS_DIED: 0,
  MAIN_PLAYER_DIED: 1,
};

export function getPlayerWithId(players, playerId) {
  for (const player of players) {
    if (player.playerId === playerId) {
      return player;
    }
  }
  console.warn("no player with id", playerId);
  return undefined;
}
