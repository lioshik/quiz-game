export const PlayerType = {
  PARTICIPANT: 0,
  MAIN: 1,
  HOST: 2,
};

export const StrategyType = {
  RANDOM: 0,
  SPECIFIC: 1,
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
