import React, { Component } from "react";
import PlayerItem from "./PlayerItem";

export class PlayersList extends Component {
  render() {
    const nullPlayersCount = 10 - this.props.players.length;
    return (
      <ol className="players-list">
        {this.props.players
          .map((item) => {
            return (
              <PlayerItem
                isMyself={item.playerId === this.props.selfPlayerId}
                mainPlayerChoiceId={this.props.mainPlayerChoiceId}
                player={item}
                key={item.playerId}
              ></PlayerItem>
            );
          })
          .concat(
            Array.from({ length: nullPlayersCount }, (_, i) => (
              <PlayerItem key={i}></PlayerItem>
            ))
          )}
      </ol>
    );
  }
}

PlayersList.defaultProps = {
  players: [],
  selfPlayerId: null,
  mainPlayerChoiceId: null,
};

export default PlayersList;
