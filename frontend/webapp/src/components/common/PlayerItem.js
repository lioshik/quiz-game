import React, { Component } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { ReactFitty } from "react-fitty";
import { PlayerType } from "./CommonUtils";
import { GiQueenCrown } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import { FaSkull } from "react-icons/fa";

export class PlayerItem extends Component {
  render() {
    const player = this.props.player;
    const isMyself = this.props.isMyself;

    const playerItemClassname = `player-item ${
      isMyself ? "self-palyer-item" : ""
    }`;

    if (player === null) {
      return <li className={playerItemClassname}></li>;
    }

    var playerIcon;
    switch (player.playerType) {
      case PlayerType.MAIN:
        playerIcon = <GiQueenCrown className="player-icon"></GiQueenCrown>;
        break;
      case PlayerType.HOST:
        playerIcon = <FaMicrophone className="player-icon"></FaMicrophone>;
        break;
      default:
        playerIcon =
          player.playerId === this.props.mainPlayerChoiceId ? (
            (playerIcon = <GiQueenCrown className="player-icon"></GiQueenCrown>)
          ) : (
            <IoPersonCircleSharp className="player-icon"></IoPersonCircleSharp>
          );
    }
    const isDead = !player.stillAlive;
    if (isDead) {
      if (player.playerType !== PlayerType.MAIN) {
        playerIcon = <FaSkullCrossbones className="player-icon" />;
      } else {
        playerIcon = <FaSkull className="player-icon" />;
      }
    }

    return (
      <li className={playerItemClassname}>
        <div className="player-status-name">
          {playerIcon}
          <div className={`player-name ${isDead ? "dead-name" : ""}`}>
            <ReactFitty className="player-name-span" maxSize={16} minSize={5}>
              {player.playerName}
            </ReactFitty>
          </div>
        </div>
      </li>
    );
  }
}

PlayerItem.defaultProps = {
  player: null,
};

export default PlayerItem;
