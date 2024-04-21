import React, { Component, createRef } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ReactFitty } from "react-fitty";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import { IoDiceSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import {
  PlayerType,
  StrategyType,
  getPlayerWithId,
} from "../common/CommonUtils";
import { webSocketService } from "../..";

export class ChooseMainPlayer extends Component {
  constructor(props) {
    super(props);
    this.popupRef = createRef();
  }

  closePopup = () => {
    this.popupRef.current.close();
  };

  itemClicked = (isRandom, playerId = "") => {
    if (isRandom) {
      console.log("clicked for random");
      webSocketService.sendChooseMainPlayer(this.props.authData, true);
    } else {
      console.log("clicked for player id", playerId);
      webSocketService.sendChooseMainPlayer(
        this.props.authData,
        false,
        playerId
      );
    }
    this.closePopup();
  };

  getTriggerDiv = (open, isHost) => {
    const isRandom =
      this.props.strategyType === StrategyType.RANDOM ||
      this.props.strategyType === undefined ||
      this.props.mainPlayerId === undefined;
    return (
      <div className="popup-trigger" disabled={!isHost ? true : undefined}>
        <div className="popup-status-name-wrapper">
          {isRandom ? (
            <IoDiceSharp className="popup-player-icon"></IoDiceSharp>
          ) : (
            <IoPersonCircleSharp className="popup-player-icon"></IoPersonCircleSharp>
          )}
          <span>
            {isRandom
              ? "random"
              : getPlayerWithId(this.props.players, this.props.mainPlayerId)
                  .playerName}
          </span>
        </div>
        {!isHost ? null : !open ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </div>
    );
  };

  render() {
    const iAmHost =
      getPlayerWithId(this.props.players, this.props.authData.playerId)
        .playerType === PlayerType.HOST;
    return (
      <div className="rightside-widget choose-main-player-widget">
        <ReactFitty className="widget-header" maxSize={21}>
          {iAmHost ? "Choose main player" : "Main player:"}
        </ReactFitty>
        {iAmHost ? (
          <Popup
            trigger={(open) => {
              return this.getTriggerDiv(open, iAmHost);
            }}
            position="bottom left"
            on="click"
            closeOnDocumentClick
            repositionOnResize
            arrow={false}
            ref={this.popupRef}
          >
            <ol className="popup-menu">
              <li
                key="-1"
                className="popup-menu-item"
                onClick={() => this.itemClicked(true)}
              >
                <IoDiceSharp className="popup-player-icon"></IoDiceSharp>
                <span>random</span>
              </li>
              {this.props.players.map((item) => {
                if (item.playerType === PlayerType.HOST) {
                  return null;
                }
                return (
                  <li
                    key={item.playerId}
                    className="popup-menu-item"
                    onClick={() => this.itemClicked(false, item.playerId)}
                  >
                    <IoPersonCircleSharp className="popup-player-icon"></IoPersonCircleSharp>
                    <span>{item.playerName}</span>
                  </li>
                );
              })}
            </ol>
          </Popup>
        ) : (
          this.getTriggerDiv(iAmHost)
        )}
        {iAmHost ? null : <span className="small-clarification-text">Only host can change main player</span>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.gamestate.lobby.players,
    authData: state.authData,
    strategyType: state.gamestate.lobby.chooseMainPlayerStrategy,
    mainPlayerId: state.gamestate.lobby.mainPlayerId,
  };
};

export default connect(mapStateToProps)(ChooseMainPlayer);
