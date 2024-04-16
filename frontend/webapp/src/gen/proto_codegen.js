/*eslint-disable*/
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AuthData = (function() {

    /**
     * Properties of an AuthData.
     * @exports IAuthData
     * @interface IAuthData
     * @property {string|null} [roomCode] AuthData roomCode
     * @property {string|null} [playerId] AuthData playerId
     * @property {string|null} [authToken] AuthData authToken
     */

    /**
     * Constructs a new AuthData.
     * @exports AuthData
     * @classdesc Represents an AuthData.
     * @implements IAuthData
     * @constructor
     * @param {IAuthData=} [properties] Properties to set
     */
    function AuthData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthData roomCode.
     * @member {string} roomCode
     * @memberof AuthData
     * @instance
     */
    AuthData.prototype.roomCode = "";

    /**
     * AuthData playerId.
     * @member {string} playerId
     * @memberof AuthData
     * @instance
     */
    AuthData.prototype.playerId = "";

    /**
     * AuthData authToken.
     * @member {string} authToken
     * @memberof AuthData
     * @instance
     */
    AuthData.prototype.authToken = "";

    /**
     * Encodes the specified AuthData message. Does not implicitly {@link AuthData.verify|verify} messages.
     * @function encode
     * @memberof AuthData
     * @static
     * @param {IAuthData} message AuthData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomCode != null && Object.hasOwnProperty.call(message, "roomCode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomCode);
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
        if (message.authToken != null && Object.hasOwnProperty.call(message, "authToken"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.authToken);
        return writer;
    };

    /**
     * Encodes the specified AuthData message, length delimited. Does not implicitly {@link AuthData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthData
     * @static
     * @param {IAuthData} message AuthData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthData message from the specified reader or buffer.
     * @function decode
     * @memberof AuthData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthData} AuthData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.roomCode = reader.string();
                    break;
                }
            case 2: {
                    message.playerId = reader.string();
                    break;
                }
            case 3: {
                    message.authToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthData} AuthData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for AuthData
     * @function getTypeUrl
     * @memberof AuthData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AuthData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthData";
    };

    return AuthData;
})();

/**
 * HintType enum.
 * @exports HintType
 * @enum {number}
 * @property {number} SkipQuestion=0 SkipQuestion value
 * @property {number} MajorityOpinion=1 MajorityOpinion value
 * @property {number} TwoOpinions=2 TwoOpinions value
 */
$root.HintType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SkipQuestion"] = 0;
    values[valuesById[1] = "MajorityOpinion"] = 1;
    values[valuesById[2] = "TwoOpinions"] = 2;
    return values;
})();

$root.RootGameState = (function() {

    /**
     * Properties of a RootGameState.
     * @exports IRootGameState
     * @interface IRootGameState
     * @property {ILobbyGameState|null} [lobby] RootGameState lobby
     * @property {IWaitForQuestionState|null} [waitForQuestion] RootGameState waitForQuestion
     * @property {IWaitForAnswerState|null} [waitForAnswer] RootGameState waitForAnswer
     * @property {IWaitForMainPlayerState|null} [waitForMainPlayer] RootGameState waitForMainPlayer
     * @property {IGameOver|null} [gameOver] RootGameState gameOver
     */

    /**
     * Constructs a new RootGameState.
     * @exports RootGameState
     * @classdesc Represents a RootGameState.
     * @implements IRootGameState
     * @constructor
     * @param {IRootGameState=} [properties] Properties to set
     */
    function RootGameState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RootGameState lobby.
     * @member {ILobbyGameState|null|undefined} lobby
     * @memberof RootGameState
     * @instance
     */
    RootGameState.prototype.lobby = null;

    /**
     * RootGameState waitForQuestion.
     * @member {IWaitForQuestionState|null|undefined} waitForQuestion
     * @memberof RootGameState
     * @instance
     */
    RootGameState.prototype.waitForQuestion = null;

    /**
     * RootGameState waitForAnswer.
     * @member {IWaitForAnswerState|null|undefined} waitForAnswer
     * @memberof RootGameState
     * @instance
     */
    RootGameState.prototype.waitForAnswer = null;

    /**
     * RootGameState waitForMainPlayer.
     * @member {IWaitForMainPlayerState|null|undefined} waitForMainPlayer
     * @memberof RootGameState
     * @instance
     */
    RootGameState.prototype.waitForMainPlayer = null;

    /**
     * RootGameState gameOver.
     * @member {IGameOver|null|undefined} gameOver
     * @memberof RootGameState
     * @instance
     */
    RootGameState.prototype.gameOver = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RootGameState state.
     * @member {"lobby"|"waitForQuestion"|"waitForAnswer"|"waitForMainPlayer"|"gameOver"|undefined} state
     * @memberof RootGameState
     * @instance
     */
    Object.defineProperty(RootGameState.prototype, "state", {
        get: $util.oneOfGetter($oneOfFields = ["lobby", "waitForQuestion", "waitForAnswer", "waitForMainPlayer", "gameOver"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified RootGameState message. Does not implicitly {@link RootGameState.verify|verify} messages.
     * @function encode
     * @memberof RootGameState
     * @static
     * @param {IRootGameState} message RootGameState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootGameState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.lobby != null && Object.hasOwnProperty.call(message, "lobby"))
            $root.LobbyGameState.encode(message.lobby, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.waitForQuestion != null && Object.hasOwnProperty.call(message, "waitForQuestion"))
            $root.WaitForQuestionState.encode(message.waitForQuestion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.waitForAnswer != null && Object.hasOwnProperty.call(message, "waitForAnswer"))
            $root.WaitForAnswerState.encode(message.waitForAnswer, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.waitForMainPlayer != null && Object.hasOwnProperty.call(message, "waitForMainPlayer"))
            $root.WaitForMainPlayerState.encode(message.waitForMainPlayer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.gameOver != null && Object.hasOwnProperty.call(message, "gameOver"))
            $root.GameOver.encode(message.gameOver, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RootGameState message, length delimited. Does not implicitly {@link RootGameState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RootGameState
     * @static
     * @param {IRootGameState} message RootGameState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootGameState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RootGameState message from the specified reader or buffer.
     * @function decode
     * @memberof RootGameState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RootGameState} RootGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootGameState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RootGameState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.lobby = $root.LobbyGameState.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.waitForQuestion = $root.WaitForQuestionState.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.waitForAnswer = $root.WaitForAnswerState.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.waitForMainPlayer = $root.WaitForMainPlayerState.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.gameOver = $root.GameOver.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RootGameState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RootGameState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RootGameState} RootGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootGameState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for RootGameState
     * @function getTypeUrl
     * @memberof RootGameState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RootGameState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RootGameState";
    };

    return RootGameState;
})();

/**
 * PlayerType enum.
 * @exports PlayerType
 * @enum {number}
 * @property {number} Participant=0 Participant value
 * @property {number} MainPlayer=1 MainPlayer value
 * @property {number} Host=2 Host value
 */
$root.PlayerType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Participant"] = 0;
    values[valuesById[1] = "MainPlayer"] = 1;
    values[valuesById[2] = "Host"] = 2;
    return values;
})();

$root.Player = (function() {

    /**
     * Properties of a Player.
     * @exports IPlayer
     * @interface IPlayer
     * @property {string|null} [playerId] Player playerId
     * @property {string|null} [playerName] Player playerName
     * @property {PlayerType|null} [playerType] Player playerType
     * @property {boolean|null} [answerGiven] Player answerGiven
     * @property {boolean|null} [stillAlive] Player stillAlive
     */

    /**
     * Constructs a new Player.
     * @exports Player
     * @classdesc Represents a Player.
     * @implements IPlayer
     * @constructor
     * @param {IPlayer=} [properties] Properties to set
     */
    function Player(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Player playerId.
     * @member {string} playerId
     * @memberof Player
     * @instance
     */
    Player.prototype.playerId = "";

    /**
     * Player playerName.
     * @member {string} playerName
     * @memberof Player
     * @instance
     */
    Player.prototype.playerName = "";

    /**
     * Player playerType.
     * @member {PlayerType} playerType
     * @memberof Player
     * @instance
     */
    Player.prototype.playerType = 0;

    /**
     * Player answerGiven.
     * @member {boolean} answerGiven
     * @memberof Player
     * @instance
     */
    Player.prototype.answerGiven = false;

    /**
     * Player stillAlive.
     * @member {boolean} stillAlive
     * @memberof Player
     * @instance
     */
    Player.prototype.stillAlive = false;

    /**
     * Encodes the specified Player message. Does not implicitly {@link Player.verify|verify} messages.
     * @function encode
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
        if (message.playerType != null && Object.hasOwnProperty.call(message, "playerType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerType);
        if (message.answerGiven != null && Object.hasOwnProperty.call(message, "answerGiven"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.answerGiven);
        if (message.stillAlive != null && Object.hasOwnProperty.call(message, "stillAlive"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.stillAlive);
        return writer;
    };

    /**
     * Encodes the specified Player message, length delimited. Does not implicitly {@link Player.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Player message from the specified reader or buffer.
     * @function decode
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playerId = reader.string();
                    break;
                }
            case 2: {
                    message.playerName = reader.string();
                    break;
                }
            case 3: {
                    message.playerType = reader.int32();
                    break;
                }
            case 4: {
                    message.answerGiven = reader.bool();
                    break;
                }
            case 5: {
                    message.stillAlive = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Player message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for Player
     * @function getTypeUrl
     * @memberof Player
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Player";
    };

    return Player;
})();

$root.RunningGamePlayersInfo = (function() {

    /**
     * Properties of a RunningGamePlayersInfo.
     * @exports IRunningGamePlayersInfo
     * @interface IRunningGamePlayersInfo
     * @property {Array.<IPlayer>|null} [players] RunningGamePlayersInfo players
     * @property {number|Long|null} [mainPlayerScore] RunningGamePlayersInfo mainPlayerScore
     * @property {boolean|null} [hintSkipQuestionAvailable] RunningGamePlayersInfo hintSkipQuestionAvailable
     * @property {boolean|null} [hintMajorityOpinionAvailable] RunningGamePlayersInfo hintMajorityOpinionAvailable
     * @property {boolean|null} [hintTwoOpinionsAvailable] RunningGamePlayersInfo hintTwoOpinionsAvailable
     */

    /**
     * Constructs a new RunningGamePlayersInfo.
     * @exports RunningGamePlayersInfo
     * @classdesc Represents a RunningGamePlayersInfo.
     * @implements IRunningGamePlayersInfo
     * @constructor
     * @param {IRunningGamePlayersInfo=} [properties] Properties to set
     */
    function RunningGamePlayersInfo(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RunningGamePlayersInfo players.
     * @member {Array.<IPlayer>} players
     * @memberof RunningGamePlayersInfo
     * @instance
     */
    RunningGamePlayersInfo.prototype.players = $util.emptyArray;

    /**
     * RunningGamePlayersInfo mainPlayerScore.
     * @member {number|Long} mainPlayerScore
     * @memberof RunningGamePlayersInfo
     * @instance
     */
    RunningGamePlayersInfo.prototype.mainPlayerScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RunningGamePlayersInfo hintSkipQuestionAvailable.
     * @member {boolean} hintSkipQuestionAvailable
     * @memberof RunningGamePlayersInfo
     * @instance
     */
    RunningGamePlayersInfo.prototype.hintSkipQuestionAvailable = false;

    /**
     * RunningGamePlayersInfo hintMajorityOpinionAvailable.
     * @member {boolean} hintMajorityOpinionAvailable
     * @memberof RunningGamePlayersInfo
     * @instance
     */
    RunningGamePlayersInfo.prototype.hintMajorityOpinionAvailable = false;

    /**
     * RunningGamePlayersInfo hintTwoOpinionsAvailable.
     * @member {boolean} hintTwoOpinionsAvailable
     * @memberof RunningGamePlayersInfo
     * @instance
     */
    RunningGamePlayersInfo.prototype.hintTwoOpinionsAvailable = false;

    /**
     * Encodes the specified RunningGamePlayersInfo message. Does not implicitly {@link RunningGamePlayersInfo.verify|verify} messages.
     * @function encode
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {IRunningGamePlayersInfo} message RunningGamePlayersInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RunningGamePlayersInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.mainPlayerScore != null && Object.hasOwnProperty.call(message, "mainPlayerScore"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.mainPlayerScore);
        if (message.hintSkipQuestionAvailable != null && Object.hasOwnProperty.call(message, "hintSkipQuestionAvailable"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hintSkipQuestionAvailable);
        if (message.hintMajorityOpinionAvailable != null && Object.hasOwnProperty.call(message, "hintMajorityOpinionAvailable"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hintMajorityOpinionAvailable);
        if (message.hintTwoOpinionsAvailable != null && Object.hasOwnProperty.call(message, "hintTwoOpinionsAvailable"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hintTwoOpinionsAvailable);
        return writer;
    };

    /**
     * Encodes the specified RunningGamePlayersInfo message, length delimited. Does not implicitly {@link RunningGamePlayersInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {IRunningGamePlayersInfo} message RunningGamePlayersInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RunningGamePlayersInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RunningGamePlayersInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RunningGamePlayersInfo} RunningGamePlayersInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RunningGamePlayersInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RunningGamePlayersInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.Player.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    message.mainPlayerScore = reader.int64();
                    break;
                }
            case 3: {
                    message.hintSkipQuestionAvailable = reader.bool();
                    break;
                }
            case 4: {
                    message.hintMajorityOpinionAvailable = reader.bool();
                    break;
                }
            case 5: {
                    message.hintTwoOpinionsAvailable = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RunningGamePlayersInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RunningGamePlayersInfo} RunningGamePlayersInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RunningGamePlayersInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for RunningGamePlayersInfo
     * @function getTypeUrl
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RunningGamePlayersInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RunningGamePlayersInfo";
    };

    return RunningGamePlayersInfo;
})();

/**
 * ChooseMainPlayerStrategy enum.
 * @exports ChooseMainPlayerStrategy
 * @enum {number}
 * @property {number} Random=0 Random value
 * @property {number} Specific=1 Specific value
 */
$root.ChooseMainPlayerStrategy = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Random"] = 0;
    values[valuesById[1] = "Specific"] = 1;
    return values;
})();

$root.LobbyGameState = (function() {

    /**
     * Properties of a LobbyGameState.
     * @exports ILobbyGameState
     * @interface ILobbyGameState
     * @property {Array.<IPlayer>|null} [players] LobbyGameState players
     * @property {ChooseMainPlayerStrategy|null} [chooseMainPlayerStrategy] LobbyGameState chooseMainPlayerStrategy
     * @property {string|null} [mainPlayerId] LobbyGameState mainPlayerId
     */

    /**
     * Constructs a new LobbyGameState.
     * @exports LobbyGameState
     * @classdesc Represents a LobbyGameState.
     * @implements ILobbyGameState
     * @constructor
     * @param {ILobbyGameState=} [properties] Properties to set
     */
    function LobbyGameState(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LobbyGameState players.
     * @member {Array.<IPlayer>} players
     * @memberof LobbyGameState
     * @instance
     */
    LobbyGameState.prototype.players = $util.emptyArray;

    /**
     * LobbyGameState chooseMainPlayerStrategy.
     * @member {ChooseMainPlayerStrategy} chooseMainPlayerStrategy
     * @memberof LobbyGameState
     * @instance
     */
    LobbyGameState.prototype.chooseMainPlayerStrategy = 0;

    /**
     * LobbyGameState mainPlayerId.
     * @member {string|null|undefined} mainPlayerId
     * @memberof LobbyGameState
     * @instance
     */
    LobbyGameState.prototype.mainPlayerId = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * LobbyGameState _mainPlayerId.
     * @member {"mainPlayerId"|undefined} _mainPlayerId
     * @memberof LobbyGameState
     * @instance
     */
    Object.defineProperty(LobbyGameState.prototype, "_mainPlayerId", {
        get: $util.oneOfGetter($oneOfFields = ["mainPlayerId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified LobbyGameState message. Does not implicitly {@link LobbyGameState.verify|verify} messages.
     * @function encode
     * @memberof LobbyGameState
     * @static
     * @param {ILobbyGameState} message LobbyGameState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LobbyGameState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.chooseMainPlayerStrategy != null && Object.hasOwnProperty.call(message, "chooseMainPlayerStrategy"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chooseMainPlayerStrategy);
        if (message.mainPlayerId != null && Object.hasOwnProperty.call(message, "mainPlayerId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.mainPlayerId);
        return writer;
    };

    /**
     * Encodes the specified LobbyGameState message, length delimited. Does not implicitly {@link LobbyGameState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LobbyGameState
     * @static
     * @param {ILobbyGameState} message LobbyGameState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LobbyGameState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LobbyGameState message from the specified reader or buffer.
     * @function decode
     * @memberof LobbyGameState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LobbyGameState} LobbyGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LobbyGameState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LobbyGameState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.Player.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    message.chooseMainPlayerStrategy = reader.int32();
                    break;
                }
            case 3: {
                    message.mainPlayerId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LobbyGameState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LobbyGameState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LobbyGameState} LobbyGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LobbyGameState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for LobbyGameState
     * @function getTypeUrl
     * @memberof LobbyGameState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LobbyGameState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LobbyGameState";
    };

    return LobbyGameState;
})();

$root.WaitForQuestionState = (function() {

    /**
     * Properties of a WaitForQuestionState.
     * @exports IWaitForQuestionState
     * @interface IWaitForQuestionState
     * @property {IRunningGamePlayersInfo|null} [playersInfo] WaitForQuestionState playersInfo
     */

    /**
     * Constructs a new WaitForQuestionState.
     * @exports WaitForQuestionState
     * @classdesc Represents a WaitForQuestionState.
     * @implements IWaitForQuestionState
     * @constructor
     * @param {IWaitForQuestionState=} [properties] Properties to set
     */
    function WaitForQuestionState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WaitForQuestionState playersInfo.
     * @member {IRunningGamePlayersInfo|null|undefined} playersInfo
     * @memberof WaitForQuestionState
     * @instance
     */
    WaitForQuestionState.prototype.playersInfo = null;

    /**
     * Encodes the specified WaitForQuestionState message. Does not implicitly {@link WaitForQuestionState.verify|verify} messages.
     * @function encode
     * @memberof WaitForQuestionState
     * @static
     * @param {IWaitForQuestionState} message WaitForQuestionState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaitForQuestionState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playersInfo != null && Object.hasOwnProperty.call(message, "playersInfo"))
            $root.RunningGamePlayersInfo.encode(message.playersInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WaitForQuestionState message, length delimited. Does not implicitly {@link WaitForQuestionState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WaitForQuestionState
     * @static
     * @param {IWaitForQuestionState} message WaitForQuestionState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaitForQuestionState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WaitForQuestionState message from the specified reader or buffer.
     * @function decode
     * @memberof WaitForQuestionState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WaitForQuestionState} WaitForQuestionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaitForQuestionState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WaitForQuestionState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playersInfo = $root.RunningGamePlayersInfo.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WaitForQuestionState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WaitForQuestionState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WaitForQuestionState} WaitForQuestionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaitForQuestionState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for WaitForQuestionState
     * @function getTypeUrl
     * @memberof WaitForQuestionState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WaitForQuestionState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WaitForQuestionState";
    };

    return WaitForQuestionState;
})();

$root.QuestionInfo = (function() {

    /**
     * Properties of a QuestionInfo.
     * @exports IQuestionInfo
     * @interface IQuestionInfo
     * @property {string|null} [question] QuestionInfo question
     * @property {Array.<string>|null} [answerOptions] QuestionInfo answerOptions
     */

    /**
     * Constructs a new QuestionInfo.
     * @exports QuestionInfo
     * @classdesc Represents a QuestionInfo.
     * @implements IQuestionInfo
     * @constructor
     * @param {IQuestionInfo=} [properties] Properties to set
     */
    function QuestionInfo(properties) {
        this.answerOptions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuestionInfo question.
     * @member {string} question
     * @memberof QuestionInfo
     * @instance
     */
    QuestionInfo.prototype.question = "";

    /**
     * QuestionInfo answerOptions.
     * @member {Array.<string>} answerOptions
     * @memberof QuestionInfo
     * @instance
     */
    QuestionInfo.prototype.answerOptions = $util.emptyArray;

    /**
     * Encodes the specified QuestionInfo message. Does not implicitly {@link QuestionInfo.verify|verify} messages.
     * @function encode
     * @memberof QuestionInfo
     * @static
     * @param {IQuestionInfo} message QuestionInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuestionInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.question != null && Object.hasOwnProperty.call(message, "question"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.question);
        if (message.answerOptions != null && message.answerOptions.length)
            for (var i = 0; i < message.answerOptions.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.answerOptions[i]);
        return writer;
    };

    /**
     * Encodes the specified QuestionInfo message, length delimited. Does not implicitly {@link QuestionInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuestionInfo
     * @static
     * @param {IQuestionInfo} message QuestionInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuestionInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuestionInfo message from the specified reader or buffer.
     * @function decode
     * @memberof QuestionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuestionInfo} QuestionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuestionInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuestionInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    message.question = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.answerOptions && message.answerOptions.length))
                        message.answerOptions = [];
                    message.answerOptions.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a QuestionInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuestionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuestionInfo} QuestionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuestionInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for QuestionInfo
     * @function getTypeUrl
     * @memberof QuestionInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    QuestionInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/QuestionInfo";
    };

    return QuestionInfo;
})();

$root.WaitForAnswerState = (function() {

    /**
     * Properties of a WaitForAnswerState.
     * @exports IWaitForAnswerState
     * @interface IWaitForAnswerState
     * @property {IRunningGamePlayersInfo|null} [playersInfo] WaitForAnswerState playersInfo
     * @property {IQuestionInfo|null} [questionInfo] WaitForAnswerState questionInfo
     * @property {number|Long|null} [milisecondsLeft] WaitForAnswerState milisecondsLeft
     */

    /**
     * Constructs a new WaitForAnswerState.
     * @exports WaitForAnswerState
     * @classdesc Represents a WaitForAnswerState.
     * @implements IWaitForAnswerState
     * @constructor
     * @param {IWaitForAnswerState=} [properties] Properties to set
     */
    function WaitForAnswerState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WaitForAnswerState playersInfo.
     * @member {IRunningGamePlayersInfo|null|undefined} playersInfo
     * @memberof WaitForAnswerState
     * @instance
     */
    WaitForAnswerState.prototype.playersInfo = null;

    /**
     * WaitForAnswerState questionInfo.
     * @member {IQuestionInfo|null|undefined} questionInfo
     * @memberof WaitForAnswerState
     * @instance
     */
    WaitForAnswerState.prototype.questionInfo = null;

    /**
     * WaitForAnswerState milisecondsLeft.
     * @member {number|Long} milisecondsLeft
     * @memberof WaitForAnswerState
     * @instance
     */
    WaitForAnswerState.prototype.milisecondsLeft = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Encodes the specified WaitForAnswerState message. Does not implicitly {@link WaitForAnswerState.verify|verify} messages.
     * @function encode
     * @memberof WaitForAnswerState
     * @static
     * @param {IWaitForAnswerState} message WaitForAnswerState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaitForAnswerState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playersInfo != null && Object.hasOwnProperty.call(message, "playersInfo"))
            $root.RunningGamePlayersInfo.encode(message.playersInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.questionInfo != null && Object.hasOwnProperty.call(message, "questionInfo"))
            $root.QuestionInfo.encode(message.questionInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.milisecondsLeft != null && Object.hasOwnProperty.call(message, "milisecondsLeft"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.milisecondsLeft);
        return writer;
    };

    /**
     * Encodes the specified WaitForAnswerState message, length delimited. Does not implicitly {@link WaitForAnswerState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WaitForAnswerState
     * @static
     * @param {IWaitForAnswerState} message WaitForAnswerState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaitForAnswerState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WaitForAnswerState message from the specified reader or buffer.
     * @function decode
     * @memberof WaitForAnswerState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WaitForAnswerState} WaitForAnswerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaitForAnswerState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WaitForAnswerState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playersInfo = $root.RunningGamePlayersInfo.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.questionInfo = $root.QuestionInfo.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.milisecondsLeft = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WaitForAnswerState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WaitForAnswerState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WaitForAnswerState} WaitForAnswerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaitForAnswerState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for WaitForAnswerState
     * @function getTypeUrl
     * @memberof WaitForAnswerState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WaitForAnswerState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WaitForAnswerState";
    };

    return WaitForAnswerState;
})();

$root.SpoiledAnswer = (function() {

    /**
     * Properties of a SpoiledAnswer.
     * @exports ISpoiledAnswer
     * @interface ISpoiledAnswer
     * @property {string|null} [playerId] SpoiledAnswer playerId
     * @property {number|null} [answerIdx] SpoiledAnswer answerIdx
     */

    /**
     * Constructs a new SpoiledAnswer.
     * @exports SpoiledAnswer
     * @classdesc Represents a SpoiledAnswer.
     * @implements ISpoiledAnswer
     * @constructor
     * @param {ISpoiledAnswer=} [properties] Properties to set
     */
    function SpoiledAnswer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpoiledAnswer playerId.
     * @member {string} playerId
     * @memberof SpoiledAnswer
     * @instance
     */
    SpoiledAnswer.prototype.playerId = "";

    /**
     * SpoiledAnswer answerIdx.
     * @member {number} answerIdx
     * @memberof SpoiledAnswer
     * @instance
     */
    SpoiledAnswer.prototype.answerIdx = 0;

    /**
     * Encodes the specified SpoiledAnswer message. Does not implicitly {@link SpoiledAnswer.verify|verify} messages.
     * @function encode
     * @memberof SpoiledAnswer
     * @static
     * @param {ISpoiledAnswer} message SpoiledAnswer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpoiledAnswer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
        if (message.answerIdx != null && Object.hasOwnProperty.call(message, "answerIdx"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.answerIdx);
        return writer;
    };

    /**
     * Encodes the specified SpoiledAnswer message, length delimited. Does not implicitly {@link SpoiledAnswer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpoiledAnswer
     * @static
     * @param {ISpoiledAnswer} message SpoiledAnswer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpoiledAnswer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpoiledAnswer message from the specified reader or buffer.
     * @function decode
     * @memberof SpoiledAnswer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpoiledAnswer} SpoiledAnswer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpoiledAnswer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpoiledAnswer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playerId = reader.string();
                    break;
                }
            case 2: {
                    message.answerIdx = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpoiledAnswer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpoiledAnswer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpoiledAnswer} SpoiledAnswer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpoiledAnswer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for SpoiledAnswer
     * @function getTypeUrl
     * @memberof SpoiledAnswer
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SpoiledAnswer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SpoiledAnswer";
    };

    return SpoiledAnswer;
})();

$root.WaitForMainPlayerState = (function() {

    /**
     * Properties of a WaitForMainPlayerState.
     * @exports IWaitForMainPlayerState
     * @interface IWaitForMainPlayerState
     * @property {IRunningGamePlayersInfo|null} [playersInfo] WaitForMainPlayerState playersInfo
     * @property {IQuestionInfo|null} [questionInfo] WaitForMainPlayerState questionInfo
     * @property {Array.<ISpoiledAnswer>|null} [spoiledAnswers] WaitForMainPlayerState spoiledAnswers
     */

    /**
     * Constructs a new WaitForMainPlayerState.
     * @exports WaitForMainPlayerState
     * @classdesc Represents a WaitForMainPlayerState.
     * @implements IWaitForMainPlayerState
     * @constructor
     * @param {IWaitForMainPlayerState=} [properties] Properties to set
     */
    function WaitForMainPlayerState(properties) {
        this.spoiledAnswers = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WaitForMainPlayerState playersInfo.
     * @member {IRunningGamePlayersInfo|null|undefined} playersInfo
     * @memberof WaitForMainPlayerState
     * @instance
     */
    WaitForMainPlayerState.prototype.playersInfo = null;

    /**
     * WaitForMainPlayerState questionInfo.
     * @member {IQuestionInfo|null|undefined} questionInfo
     * @memberof WaitForMainPlayerState
     * @instance
     */
    WaitForMainPlayerState.prototype.questionInfo = null;

    /**
     * WaitForMainPlayerState spoiledAnswers.
     * @member {Array.<ISpoiledAnswer>} spoiledAnswers
     * @memberof WaitForMainPlayerState
     * @instance
     */
    WaitForMainPlayerState.prototype.spoiledAnswers = $util.emptyArray;

    /**
     * Encodes the specified WaitForMainPlayerState message. Does not implicitly {@link WaitForMainPlayerState.verify|verify} messages.
     * @function encode
     * @memberof WaitForMainPlayerState
     * @static
     * @param {IWaitForMainPlayerState} message WaitForMainPlayerState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaitForMainPlayerState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playersInfo != null && Object.hasOwnProperty.call(message, "playersInfo"))
            $root.RunningGamePlayersInfo.encode(message.playersInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.questionInfo != null && Object.hasOwnProperty.call(message, "questionInfo"))
            $root.QuestionInfo.encode(message.questionInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.spoiledAnswers != null && message.spoiledAnswers.length)
            for (var i = 0; i < message.spoiledAnswers.length; ++i)
                $root.SpoiledAnswer.encode(message.spoiledAnswers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WaitForMainPlayerState message, length delimited. Does not implicitly {@link WaitForMainPlayerState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WaitForMainPlayerState
     * @static
     * @param {IWaitForMainPlayerState} message WaitForMainPlayerState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaitForMainPlayerState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WaitForMainPlayerState message from the specified reader or buffer.
     * @function decode
     * @memberof WaitForMainPlayerState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WaitForMainPlayerState} WaitForMainPlayerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaitForMainPlayerState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WaitForMainPlayerState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playersInfo = $root.RunningGamePlayersInfo.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.questionInfo = $root.QuestionInfo.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    if (!(message.spoiledAnswers && message.spoiledAnswers.length))
                        message.spoiledAnswers = [];
                    message.spoiledAnswers.push($root.SpoiledAnswer.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WaitForMainPlayerState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WaitForMainPlayerState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WaitForMainPlayerState} WaitForMainPlayerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaitForMainPlayerState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for WaitForMainPlayerState
     * @function getTypeUrl
     * @memberof WaitForMainPlayerState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WaitForMainPlayerState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WaitForMainPlayerState";
    };

    return WaitForMainPlayerState;
})();

$root.GameOver = (function() {

    /**
     * Properties of a GameOver.
     * @exports IGameOver
     * @interface IGameOver
     */

    /**
     * Constructs a new GameOver.
     * @exports GameOver
     * @classdesc Represents a GameOver.
     * @implements IGameOver
     * @constructor
     * @param {IGameOver=} [properties] Properties to set
     */
    function GameOver(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified GameOver message. Does not implicitly {@link GameOver.verify|verify} messages.
     * @function encode
     * @memberof GameOver
     * @static
     * @param {IGameOver} message GameOver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameOver.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GameOver message, length delimited. Does not implicitly {@link GameOver.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameOver
     * @static
     * @param {IGameOver} message GameOver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameOver.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameOver message from the specified reader or buffer.
     * @function decode
     * @memberof GameOver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameOver} GameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameOver.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameOver();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameOver message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameOver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameOver} GameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameOver.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GameOver
     * @function getTypeUrl
     * @memberof GameOver
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GameOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GameOver";
    };

    return GameOver;
})();

$root.GameStateNotification = (function() {

    /**
     * Properties of a GameStateNotification.
     * @exports IGameStateNotification
     * @interface IGameStateNotification
     * @property {IRootGameState|null} [gamestate] GameStateNotification gamestate
     */

    /**
     * Constructs a new GameStateNotification.
     * @exports GameStateNotification
     * @classdesc Represents a GameStateNotification.
     * @implements IGameStateNotification
     * @constructor
     * @param {IGameStateNotification=} [properties] Properties to set
     */
    function GameStateNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameStateNotification gamestate.
     * @member {IRootGameState|null|undefined} gamestate
     * @memberof GameStateNotification
     * @instance
     */
    GameStateNotification.prototype.gamestate = null;

    /**
     * Encodes the specified GameStateNotification message. Does not implicitly {@link GameStateNotification.verify|verify} messages.
     * @function encode
     * @memberof GameStateNotification
     * @static
     * @param {IGameStateNotification} message GameStateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStateNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gamestate != null && Object.hasOwnProperty.call(message, "gamestate"))
            $root.RootGameState.encode(message.gamestate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GameStateNotification message, length delimited. Does not implicitly {@link GameStateNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameStateNotification
     * @static
     * @param {IGameStateNotification} message GameStateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStateNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameStateNotification message from the specified reader or buffer.
     * @function decode
     * @memberof GameStateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameStateNotification} GameStateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStateNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameStateNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.gamestate = $root.RootGameState.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameStateNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameStateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameStateNotification} GameStateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStateNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GameStateNotification
     * @function getTypeUrl
     * @memberof GameStateNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GameStateNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GameStateNotification";
    };

    return GameStateNotification;
})();

$root.RootRequest = (function() {

    /**
     * Properties of a RootRequest.
     * @exports IRootRequest
     * @interface IRootRequest
     * @property {ICreateRoomRequest|null} [createRoom] RootRequest createRoom
     * @property {IJoinRoomRequest|null} [joinRoom] RootRequest joinRoom
     * @property {IChangeNameRequest|null} [changeName] RootRequest changeName
     * @property {IChooseMainPlayerRequest|null} [chooseMainPlayer] RootRequest chooseMainPlayer
     * @property {IStartGameRequest|null} [startGame] RootRequest startGame
     * @property {IMakeQuestionRequest|null} [makeQuestion] RootRequest makeQuestion
     * @property {IGiveAnswerRequest|null} [giveAnswer] RootRequest giveAnswer
     * @property {IGetGameStateRequest|null} [getGameState] RootRequest getGameState
     * @property {ISkipTimeRequest|null} [skipTime] RootRequest skipTime
     */

    /**
     * Constructs a new RootRequest.
     * @exports RootRequest
     * @classdesc Represents a RootRequest.
     * @implements IRootRequest
     * @constructor
     * @param {IRootRequest=} [properties] Properties to set
     */
    function RootRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RootRequest createRoom.
     * @member {ICreateRoomRequest|null|undefined} createRoom
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.createRoom = null;

    /**
     * RootRequest joinRoom.
     * @member {IJoinRoomRequest|null|undefined} joinRoom
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.joinRoom = null;

    /**
     * RootRequest changeName.
     * @member {IChangeNameRequest|null|undefined} changeName
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.changeName = null;

    /**
     * RootRequest chooseMainPlayer.
     * @member {IChooseMainPlayerRequest|null|undefined} chooseMainPlayer
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.chooseMainPlayer = null;

    /**
     * RootRequest startGame.
     * @member {IStartGameRequest|null|undefined} startGame
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.startGame = null;

    /**
     * RootRequest makeQuestion.
     * @member {IMakeQuestionRequest|null|undefined} makeQuestion
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.makeQuestion = null;

    /**
     * RootRequest giveAnswer.
     * @member {IGiveAnswerRequest|null|undefined} giveAnswer
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.giveAnswer = null;

    /**
     * RootRequest getGameState.
     * @member {IGetGameStateRequest|null|undefined} getGameState
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.getGameState = null;

    /**
     * RootRequest skipTime.
     * @member {ISkipTimeRequest|null|undefined} skipTime
     * @memberof RootRequest
     * @instance
     */
    RootRequest.prototype.skipTime = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RootRequest request.
     * @member {"createRoom"|"joinRoom"|"changeName"|"chooseMainPlayer"|"startGame"|"makeQuestion"|"giveAnswer"|"getGameState"|"skipTime"|undefined} request
     * @memberof RootRequest
     * @instance
     */
    Object.defineProperty(RootRequest.prototype, "request", {
        get: $util.oneOfGetter($oneOfFields = ["createRoom", "joinRoom", "changeName", "chooseMainPlayer", "startGame", "makeQuestion", "giveAnswer", "getGameState", "skipTime"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified RootRequest message. Does not implicitly {@link RootRequest.verify|verify} messages.
     * @function encode
     * @memberof RootRequest
     * @static
     * @param {IRootRequest} message RootRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.createRoom != null && Object.hasOwnProperty.call(message, "createRoom"))
            $root.CreateRoomRequest.encode(message.createRoom, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.joinRoom != null && Object.hasOwnProperty.call(message, "joinRoom"))
            $root.JoinRoomRequest.encode(message.joinRoom, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.changeName != null && Object.hasOwnProperty.call(message, "changeName"))
            $root.ChangeNameRequest.encode(message.changeName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.chooseMainPlayer != null && Object.hasOwnProperty.call(message, "chooseMainPlayer"))
            $root.ChooseMainPlayerRequest.encode(message.chooseMainPlayer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.startGame != null && Object.hasOwnProperty.call(message, "startGame"))
            $root.StartGameRequest.encode(message.startGame, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.makeQuestion != null && Object.hasOwnProperty.call(message, "makeQuestion"))
            $root.MakeQuestionRequest.encode(message.makeQuestion, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.giveAnswer != null && Object.hasOwnProperty.call(message, "giveAnswer"))
            $root.GiveAnswerRequest.encode(message.giveAnswer, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.getGameState != null && Object.hasOwnProperty.call(message, "getGameState"))
            $root.GetGameStateRequest.encode(message.getGameState, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.skipTime != null && Object.hasOwnProperty.call(message, "skipTime"))
            $root.SkipTimeRequest.encode(message.skipTime, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RootRequest message, length delimited. Does not implicitly {@link RootRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RootRequest
     * @static
     * @param {IRootRequest} message RootRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RootRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RootRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RootRequest} RootRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RootRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.createRoom = $root.CreateRoomRequest.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.joinRoom = $root.JoinRoomRequest.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.changeName = $root.ChangeNameRequest.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.chooseMainPlayer = $root.ChooseMainPlayerRequest.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.startGame = $root.StartGameRequest.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.makeQuestion = $root.MakeQuestionRequest.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.giveAnswer = $root.GiveAnswerRequest.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.getGameState = $root.GetGameStateRequest.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.skipTime = $root.SkipTimeRequest.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RootRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RootRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RootRequest} RootRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for RootRequest
     * @function getTypeUrl
     * @memberof RootRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RootRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RootRequest";
    };

    return RootRequest;
})();

$root.CreateRoomRequest = (function() {

    /**
     * Properties of a CreateRoomRequest.
     * @exports ICreateRoomRequest
     * @interface ICreateRoomRequest
     * @property {string|null} [requestId] CreateRoomRequest requestId
     */

    /**
     * Constructs a new CreateRoomRequest.
     * @exports CreateRoomRequest
     * @classdesc Represents a CreateRoomRequest.
     * @implements ICreateRoomRequest
     * @constructor
     * @param {ICreateRoomRequest=} [properties] Properties to set
     */
    function CreateRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateRoomRequest requestId.
     * @member {string} requestId
     * @memberof CreateRoomRequest
     * @instance
     */
    CreateRoomRequest.prototype.requestId = "";

    /**
     * Encodes the specified CreateRoomRequest message. Does not implicitly {@link CreateRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateRoomRequest
     * @static
     * @param {ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        return writer;
    };

    /**
     * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link CreateRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateRoomRequest
     * @static
     * @param {ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateRoomRequest} CreateRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateRoomRequest} CreateRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for CreateRoomRequest
     * @function getTypeUrl
     * @memberof CreateRoomRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CreateRoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CreateRoomRequest";
    };

    return CreateRoomRequest;
})();

$root.JoinRoomRequest = (function() {

    /**
     * Properties of a JoinRoomRequest.
     * @exports IJoinRoomRequest
     * @interface IJoinRoomRequest
     * @property {string|null} [requestId] JoinRoomRequest requestId
     * @property {string|null} [roomCode] JoinRoomRequest roomCode
     */

    /**
     * Constructs a new JoinRoomRequest.
     * @exports JoinRoomRequest
     * @classdesc Represents a JoinRoomRequest.
     * @implements IJoinRoomRequest
     * @constructor
     * @param {IJoinRoomRequest=} [properties] Properties to set
     */
    function JoinRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomRequest requestId.
     * @member {string} requestId
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.requestId = "";

    /**
     * JoinRoomRequest roomCode.
     * @member {string} roomCode
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.roomCode = "";

    /**
     * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomRequest
     * @static
     * @param {IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.roomCode != null && Object.hasOwnProperty.call(message, "roomCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomCode);
        return writer;
    };

    /**
     * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomRequest
     * @static
     * @param {IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomRequest} JoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.roomCode = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomRequest} JoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for JoinRoomRequest
     * @function getTypeUrl
     * @memberof JoinRoomRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    JoinRoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/JoinRoomRequest";
    };

    return JoinRoomRequest;
})();

$root.ChangeNameRequest = (function() {

    /**
     * Properties of a ChangeNameRequest.
     * @exports IChangeNameRequest
     * @interface IChangeNameRequest
     * @property {string|null} [requestId] ChangeNameRequest requestId
     * @property {IAuthData|null} [authData] ChangeNameRequest authData
     * @property {string|null} [newName] ChangeNameRequest newName
     */

    /**
     * Constructs a new ChangeNameRequest.
     * @exports ChangeNameRequest
     * @classdesc Represents a ChangeNameRequest.
     * @implements IChangeNameRequest
     * @constructor
     * @param {IChangeNameRequest=} [properties] Properties to set
     */
    function ChangeNameRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeNameRequest requestId.
     * @member {string} requestId
     * @memberof ChangeNameRequest
     * @instance
     */
    ChangeNameRequest.prototype.requestId = "";

    /**
     * ChangeNameRequest authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof ChangeNameRequest
     * @instance
     */
    ChangeNameRequest.prototype.authData = null;

    /**
     * ChangeNameRequest newName.
     * @member {string} newName
     * @memberof ChangeNameRequest
     * @instance
     */
    ChangeNameRequest.prototype.newName = "";

    /**
     * Encodes the specified ChangeNameRequest message. Does not implicitly {@link ChangeNameRequest.verify|verify} messages.
     * @function encode
     * @memberof ChangeNameRequest
     * @static
     * @param {IChangeNameRequest} message ChangeNameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.newName != null && Object.hasOwnProperty.call(message, "newName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.newName);
        return writer;
    };

    /**
     * Encodes the specified ChangeNameRequest message, length delimited. Does not implicitly {@link ChangeNameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeNameRequest
     * @static
     * @param {IChangeNameRequest} message ChangeNameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeNameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeNameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeNameRequest} ChangeNameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeNameRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.newName = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeNameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeNameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeNameRequest} ChangeNameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChangeNameRequest
     * @function getTypeUrl
     * @memberof ChangeNameRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChangeNameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChangeNameRequest";
    };

    return ChangeNameRequest;
})();

$root.ChooseMainPlayerRequest = (function() {

    /**
     * Properties of a ChooseMainPlayerRequest.
     * @exports IChooseMainPlayerRequest
     * @interface IChooseMainPlayerRequest
     * @property {string|null} [requestId] ChooseMainPlayerRequest requestId
     * @property {IAuthData|null} [authData] ChooseMainPlayerRequest authData
     * @property {boolean|null} [random] ChooseMainPlayerRequest random
     * @property {string|null} [specificPlayerId] ChooseMainPlayerRequest specificPlayerId
     */

    /**
     * Constructs a new ChooseMainPlayerRequest.
     * @exports ChooseMainPlayerRequest
     * @classdesc Represents a ChooseMainPlayerRequest.
     * @implements IChooseMainPlayerRequest
     * @constructor
     * @param {IChooseMainPlayerRequest=} [properties] Properties to set
     */
    function ChooseMainPlayerRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChooseMainPlayerRequest requestId.
     * @member {string} requestId
     * @memberof ChooseMainPlayerRequest
     * @instance
     */
    ChooseMainPlayerRequest.prototype.requestId = "";

    /**
     * ChooseMainPlayerRequest authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof ChooseMainPlayerRequest
     * @instance
     */
    ChooseMainPlayerRequest.prototype.authData = null;

    /**
     * ChooseMainPlayerRequest random.
     * @member {boolean|null|undefined} random
     * @memberof ChooseMainPlayerRequest
     * @instance
     */
    ChooseMainPlayerRequest.prototype.random = null;

    /**
     * ChooseMainPlayerRequest specificPlayerId.
     * @member {string|null|undefined} specificPlayerId
     * @memberof ChooseMainPlayerRequest
     * @instance
     */
    ChooseMainPlayerRequest.prototype.specificPlayerId = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ChooseMainPlayerRequest choiceStrategy.
     * @member {"random"|"specificPlayerId"|undefined} choiceStrategy
     * @memberof ChooseMainPlayerRequest
     * @instance
     */
    Object.defineProperty(ChooseMainPlayerRequest.prototype, "choiceStrategy", {
        get: $util.oneOfGetter($oneOfFields = ["random", "specificPlayerId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified ChooseMainPlayerRequest message. Does not implicitly {@link ChooseMainPlayerRequest.verify|verify} messages.
     * @function encode
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {IChooseMainPlayerRequest} message ChooseMainPlayerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.random != null && Object.hasOwnProperty.call(message, "random"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.random);
        if (message.specificPlayerId != null && Object.hasOwnProperty.call(message, "specificPlayerId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.specificPlayerId);
        return writer;
    };

    /**
     * Encodes the specified ChooseMainPlayerRequest message, length delimited. Does not implicitly {@link ChooseMainPlayerRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {IChooseMainPlayerRequest} message ChooseMainPlayerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChooseMainPlayerRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChooseMainPlayerRequest} ChooseMainPlayerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChooseMainPlayerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.random = reader.bool();
                    break;
                }
            case 4: {
                    message.specificPlayerId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChooseMainPlayerRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChooseMainPlayerRequest} ChooseMainPlayerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChooseMainPlayerRequest
     * @function getTypeUrl
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChooseMainPlayerRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChooseMainPlayerRequest";
    };

    return ChooseMainPlayerRequest;
})();

$root.StartGameRequest = (function() {

    /**
     * Properties of a StartGameRequest.
     * @exports IStartGameRequest
     * @interface IStartGameRequest
     * @property {string|null} [requestId] StartGameRequest requestId
     * @property {IAuthData|null} [authData] StartGameRequest authData
     */

    /**
     * Constructs a new StartGameRequest.
     * @exports StartGameRequest
     * @classdesc Represents a StartGameRequest.
     * @implements IStartGameRequest
     * @constructor
     * @param {IStartGameRequest=} [properties] Properties to set
     */
    function StartGameRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StartGameRequest requestId.
     * @member {string} requestId
     * @memberof StartGameRequest
     * @instance
     */
    StartGameRequest.prototype.requestId = "";

    /**
     * StartGameRequest authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof StartGameRequest
     * @instance
     */
    StartGameRequest.prototype.authData = null;

    /**
     * Encodes the specified StartGameRequest message. Does not implicitly {@link StartGameRequest.verify|verify} messages.
     * @function encode
     * @memberof StartGameRequest
     * @static
     * @param {IStartGameRequest} message StartGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StartGameRequest message, length delimited. Does not implicitly {@link StartGameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartGameRequest
     * @static
     * @param {IStartGameRequest} message StartGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartGameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof StartGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartGameRequest} StartGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartGameRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartGameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartGameRequest} StartGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for StartGameRequest
     * @function getTypeUrl
     * @memberof StartGameRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartGameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartGameRequest";
    };

    return StartGameRequest;
})();

$root.MakeQuestionRequest = (function() {

    /**
     * Properties of a MakeQuestionRequest.
     * @exports IMakeQuestionRequest
     * @interface IMakeQuestionRequest
     * @property {string|null} [requestId] MakeQuestionRequest requestId
     * @property {IAuthData|null} [authData] MakeQuestionRequest authData
     * @property {string|null} [question] MakeQuestionRequest question
     * @property {Array.<string>|null} [answerOptions] MakeQuestionRequest answerOptions
     * @property {number|null} [rightAnswerIdx] MakeQuestionRequest rightAnswerIdx
     */

    /**
     * Constructs a new MakeQuestionRequest.
     * @exports MakeQuestionRequest
     * @classdesc Represents a MakeQuestionRequest.
     * @implements IMakeQuestionRequest
     * @constructor
     * @param {IMakeQuestionRequest=} [properties] Properties to set
     */
    function MakeQuestionRequest(properties) {
        this.answerOptions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MakeQuestionRequest requestId.
     * @member {string} requestId
     * @memberof MakeQuestionRequest
     * @instance
     */
    MakeQuestionRequest.prototype.requestId = "";

    /**
     * MakeQuestionRequest authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof MakeQuestionRequest
     * @instance
     */
    MakeQuestionRequest.prototype.authData = null;

    /**
     * MakeQuestionRequest question.
     * @member {string} question
     * @memberof MakeQuestionRequest
     * @instance
     */
    MakeQuestionRequest.prototype.question = "";

    /**
     * MakeQuestionRequest answerOptions.
     * @member {Array.<string>} answerOptions
     * @memberof MakeQuestionRequest
     * @instance
     */
    MakeQuestionRequest.prototype.answerOptions = $util.emptyArray;

    /**
     * MakeQuestionRequest rightAnswerIdx.
     * @member {number} rightAnswerIdx
     * @memberof MakeQuestionRequest
     * @instance
     */
    MakeQuestionRequest.prototype.rightAnswerIdx = 0;

    /**
     * Encodes the specified MakeQuestionRequest message. Does not implicitly {@link MakeQuestionRequest.verify|verify} messages.
     * @function encode
     * @memberof MakeQuestionRequest
     * @static
     * @param {IMakeQuestionRequest} message MakeQuestionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.question != null && Object.hasOwnProperty.call(message, "question"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.question);
        if (message.answerOptions != null && message.answerOptions.length)
            for (var i = 0; i < message.answerOptions.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.answerOptions[i]);
        if (message.rightAnswerIdx != null && Object.hasOwnProperty.call(message, "rightAnswerIdx"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rightAnswerIdx);
        return writer;
    };

    /**
     * Encodes the specified MakeQuestionRequest message, length delimited. Does not implicitly {@link MakeQuestionRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MakeQuestionRequest
     * @static
     * @param {IMakeQuestionRequest} message MakeQuestionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MakeQuestionRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MakeQuestionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MakeQuestionRequest} MakeQuestionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MakeQuestionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.question = reader.string();
                    break;
                }
            case 4: {
                    if (!(message.answerOptions && message.answerOptions.length))
                        message.answerOptions = [];
                    message.answerOptions.push(reader.string());
                    break;
                }
            case 5: {
                    message.rightAnswerIdx = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MakeQuestionRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MakeQuestionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MakeQuestionRequest} MakeQuestionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for MakeQuestionRequest
     * @function getTypeUrl
     * @memberof MakeQuestionRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MakeQuestionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MakeQuestionRequest";
    };

    return MakeQuestionRequest;
})();

$root.GiveAnswerRequest = (function() {

    /**
     * Properties of a GiveAnswerRequest.
     * @exports IGiveAnswerRequest
     * @interface IGiveAnswerRequest
     * @property {string|null} [requestId] GiveAnswerRequest requestId
     * @property {IAuthData|null} [authData] GiveAnswerRequest authData
     * @property {number|null} [answerIdx] GiveAnswerRequest answerIdx
     * @property {HintType|null} [hint] GiveAnswerRequest hint
     */

    /**
     * Constructs a new GiveAnswerRequest.
     * @exports GiveAnswerRequest
     * @classdesc Represents a GiveAnswerRequest.
     * @implements IGiveAnswerRequest
     * @constructor
     * @param {IGiveAnswerRequest=} [properties] Properties to set
     */
    function GiveAnswerRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GiveAnswerRequest requestId.
     * @member {string} requestId
     * @memberof GiveAnswerRequest
     * @instance
     */
    GiveAnswerRequest.prototype.requestId = "";

    /**
     * GiveAnswerRequest authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof GiveAnswerRequest
     * @instance
     */
    GiveAnswerRequest.prototype.authData = null;

    /**
     * GiveAnswerRequest answerIdx.
     * @member {number|null|undefined} answerIdx
     * @memberof GiveAnswerRequest
     * @instance
     */
    GiveAnswerRequest.prototype.answerIdx = null;

    /**
     * GiveAnswerRequest hint.
     * @member {HintType|null|undefined} hint
     * @memberof GiveAnswerRequest
     * @instance
     */
    GiveAnswerRequest.prototype.hint = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GiveAnswerRequest answer.
     * @member {"answerIdx"|"hint"|undefined} answer
     * @memberof GiveAnswerRequest
     * @instance
     */
    Object.defineProperty(GiveAnswerRequest.prototype, "answer", {
        get: $util.oneOfGetter($oneOfFields = ["answerIdx", "hint"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified GiveAnswerRequest message. Does not implicitly {@link GiveAnswerRequest.verify|verify} messages.
     * @function encode
     * @memberof GiveAnswerRequest
     * @static
     * @param {IGiveAnswerRequest} message GiveAnswerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.answerIdx != null && Object.hasOwnProperty.call(message, "answerIdx"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.answerIdx);
        if (message.hint != null && Object.hasOwnProperty.call(message, "hint"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hint);
        return writer;
    };

    /**
     * Encodes the specified GiveAnswerRequest message, length delimited. Does not implicitly {@link GiveAnswerRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GiveAnswerRequest
     * @static
     * @param {IGiveAnswerRequest} message GiveAnswerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GiveAnswerRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GiveAnswerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GiveAnswerRequest} GiveAnswerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GiveAnswerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.answerIdx = reader.int32();
                    break;
                }
            case 4: {
                    message.hint = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GiveAnswerRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GiveAnswerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GiveAnswerRequest} GiveAnswerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GiveAnswerRequest
     * @function getTypeUrl
     * @memberof GiveAnswerRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GiveAnswerRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GiveAnswerRequest";
    };

    return GiveAnswerRequest;
})();

$root.GetGameStateRequest = (function() {

    /**
     * Properties of a GetGameStateRequest.
     * @exports IGetGameStateRequest
     * @interface IGetGameStateRequest
     * @property {string|null} [requestId] GetGameStateRequest requestId
     * @property {IAuthData|null} [authData] GetGameStateRequest authData
     */

    /**
     * Constructs a new GetGameStateRequest.
     * @exports GetGameStateRequest
     * @classdesc Represents a GetGameStateRequest.
     * @implements IGetGameStateRequest
     * @constructor
     * @param {IGetGameStateRequest=} [properties] Properties to set
     */
    function GetGameStateRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetGameStateRequest requestId.
     * @member {string} requestId
     * @memberof GetGameStateRequest
     * @instance
     */
    GetGameStateRequest.prototype.requestId = "";

    /**
     * GetGameStateRequest authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof GetGameStateRequest
     * @instance
     */
    GetGameStateRequest.prototype.authData = null;

    /**
     * Encodes the specified GetGameStateRequest message. Does not implicitly {@link GetGameStateRequest.verify|verify} messages.
     * @function encode
     * @memberof GetGameStateRequest
     * @static
     * @param {IGetGameStateRequest} message GetGameStateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetGameStateRequest message, length delimited. Does not implicitly {@link GetGameStateRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetGameStateRequest
     * @static
     * @param {IGetGameStateRequest} message GetGameStateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetGameStateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetGameStateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetGameStateRequest} GetGameStateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetGameStateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetGameStateRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetGameStateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetGameStateRequest} GetGameStateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GetGameStateRequest
     * @function getTypeUrl
     * @memberof GetGameStateRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetGameStateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetGameStateRequest";
    };

    return GetGameStateRequest;
})();

$root.SkipTimeRequest = (function() {

    /**
     * Properties of a SkipTimeRequest.
     * @exports ISkipTimeRequest
     * @interface ISkipTimeRequest
     * @property {string|null} [requestId] SkipTimeRequest requestId
     * @property {string|null} [roomCode] SkipTimeRequest roomCode
     * @property {number|Long|null} [miliseconds] SkipTimeRequest miliseconds
     */

    /**
     * Constructs a new SkipTimeRequest.
     * @exports SkipTimeRequest
     * @classdesc Represents a SkipTimeRequest.
     * @implements ISkipTimeRequest
     * @constructor
     * @param {ISkipTimeRequest=} [properties] Properties to set
     */
    function SkipTimeRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SkipTimeRequest requestId.
     * @member {string} requestId
     * @memberof SkipTimeRequest
     * @instance
     */
    SkipTimeRequest.prototype.requestId = "";

    /**
     * SkipTimeRequest roomCode.
     * @member {string} roomCode
     * @memberof SkipTimeRequest
     * @instance
     */
    SkipTimeRequest.prototype.roomCode = "";

    /**
     * SkipTimeRequest miliseconds.
     * @member {number|Long} miliseconds
     * @memberof SkipTimeRequest
     * @instance
     */
    SkipTimeRequest.prototype.miliseconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Encodes the specified SkipTimeRequest message. Does not implicitly {@link SkipTimeRequest.verify|verify} messages.
     * @function encode
     * @memberof SkipTimeRequest
     * @static
     * @param {ISkipTimeRequest} message SkipTimeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.roomCode != null && Object.hasOwnProperty.call(message, "roomCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomCode);
        if (message.miliseconds != null && Object.hasOwnProperty.call(message, "miliseconds"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.miliseconds);
        return writer;
    };

    /**
     * Encodes the specified SkipTimeRequest message, length delimited. Does not implicitly {@link SkipTimeRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SkipTimeRequest
     * @static
     * @param {ISkipTimeRequest} message SkipTimeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SkipTimeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SkipTimeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SkipTimeRequest} SkipTimeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SkipTimeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.roomCode = reader.string();
                    break;
                }
            case 3: {
                    message.miliseconds = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SkipTimeRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SkipTimeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SkipTimeRequest} SkipTimeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for SkipTimeRequest
     * @function getTypeUrl
     * @memberof SkipTimeRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SkipTimeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SkipTimeRequest";
    };

    return SkipTimeRequest;
})();

$root.RootResponse = (function() {

    /**
     * Properties of a RootResponse.
     * @exports IRootResponse
     * @interface IRootResponse
     * @property {ICreateRoomResponse|null} [createRoom] RootResponse createRoom
     * @property {IJoinRoomResponse|null} [joinRoom] RootResponse joinRoom
     * @property {IChangeNameResponse|null} [changeName] RootResponse changeName
     * @property {IChooseMainPlayerResponse|null} [chooseMainPlayer] RootResponse chooseMainPlayer
     * @property {IStartGameResponse|null} [startGameResponse] RootResponse startGameResponse
     * @property {IMakeQuestionResponse|null} [makeQuestionResponse] RootResponse makeQuestionResponse
     * @property {IGiveAnswerResponse|null} [giveAnswerResponse] RootResponse giveAnswerResponse
     * @property {IGetGameStateResponse|null} [getGamestateResponse] RootResponse getGamestateResponse
     * @property {ISkipTimeResponse|null} [skipTimeResponse] RootResponse skipTimeResponse
     * @property {IGameStateNotification|null} [notificationGamestate] RootResponse notificationGamestate
     */

    /**
     * Constructs a new RootResponse.
     * @exports RootResponse
     * @classdesc Represents a RootResponse.
     * @implements IRootResponse
     * @constructor
     * @param {IRootResponse=} [properties] Properties to set
     */
    function RootResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RootResponse createRoom.
     * @member {ICreateRoomResponse|null|undefined} createRoom
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.createRoom = null;

    /**
     * RootResponse joinRoom.
     * @member {IJoinRoomResponse|null|undefined} joinRoom
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.joinRoom = null;

    /**
     * RootResponse changeName.
     * @member {IChangeNameResponse|null|undefined} changeName
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.changeName = null;

    /**
     * RootResponse chooseMainPlayer.
     * @member {IChooseMainPlayerResponse|null|undefined} chooseMainPlayer
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.chooseMainPlayer = null;

    /**
     * RootResponse startGameResponse.
     * @member {IStartGameResponse|null|undefined} startGameResponse
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.startGameResponse = null;

    /**
     * RootResponse makeQuestionResponse.
     * @member {IMakeQuestionResponse|null|undefined} makeQuestionResponse
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.makeQuestionResponse = null;

    /**
     * RootResponse giveAnswerResponse.
     * @member {IGiveAnswerResponse|null|undefined} giveAnswerResponse
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.giveAnswerResponse = null;

    /**
     * RootResponse getGamestateResponse.
     * @member {IGetGameStateResponse|null|undefined} getGamestateResponse
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.getGamestateResponse = null;

    /**
     * RootResponse skipTimeResponse.
     * @member {ISkipTimeResponse|null|undefined} skipTimeResponse
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.skipTimeResponse = null;

    /**
     * RootResponse notificationGamestate.
     * @member {IGameStateNotification|null|undefined} notificationGamestate
     * @memberof RootResponse
     * @instance
     */
    RootResponse.prototype.notificationGamestate = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RootResponse response.
     * @member {"createRoom"|"joinRoom"|"changeName"|"chooseMainPlayer"|"startGameResponse"|"makeQuestionResponse"|"giveAnswerResponse"|"getGamestateResponse"|"skipTimeResponse"|"notificationGamestate"|undefined} response
     * @memberof RootResponse
     * @instance
     */
    Object.defineProperty(RootResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["createRoom", "joinRoom", "changeName", "chooseMainPlayer", "startGameResponse", "makeQuestionResponse", "giveAnswerResponse", "getGamestateResponse", "skipTimeResponse", "notificationGamestate"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified RootResponse message. Does not implicitly {@link RootResponse.verify|verify} messages.
     * @function encode
     * @memberof RootResponse
     * @static
     * @param {IRootResponse} message RootResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.createRoom != null && Object.hasOwnProperty.call(message, "createRoom"))
            $root.CreateRoomResponse.encode(message.createRoom, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.joinRoom != null && Object.hasOwnProperty.call(message, "joinRoom"))
            $root.JoinRoomResponse.encode(message.joinRoom, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.changeName != null && Object.hasOwnProperty.call(message, "changeName"))
            $root.ChangeNameResponse.encode(message.changeName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.chooseMainPlayer != null && Object.hasOwnProperty.call(message, "chooseMainPlayer"))
            $root.ChooseMainPlayerResponse.encode(message.chooseMainPlayer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.startGameResponse != null && Object.hasOwnProperty.call(message, "startGameResponse"))
            $root.StartGameResponse.encode(message.startGameResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.makeQuestionResponse != null && Object.hasOwnProperty.call(message, "makeQuestionResponse"))
            $root.MakeQuestionResponse.encode(message.makeQuestionResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.giveAnswerResponse != null && Object.hasOwnProperty.call(message, "giveAnswerResponse"))
            $root.GiveAnswerResponse.encode(message.giveAnswerResponse, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.getGamestateResponse != null && Object.hasOwnProperty.call(message, "getGamestateResponse"))
            $root.GetGameStateResponse.encode(message.getGamestateResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.skipTimeResponse != null && Object.hasOwnProperty.call(message, "skipTimeResponse"))
            $root.SkipTimeResponse.encode(message.skipTimeResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.notificationGamestate != null && Object.hasOwnProperty.call(message, "notificationGamestate"))
            $root.GameStateNotification.encode(message.notificationGamestate, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RootResponse message, length delimited. Does not implicitly {@link RootResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RootResponse
     * @static
     * @param {IRootResponse} message RootResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RootResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RootResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RootResponse} RootResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RootResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.createRoom = $root.CreateRoomResponse.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.joinRoom = $root.JoinRoomResponse.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.changeName = $root.ChangeNameResponse.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.chooseMainPlayer = $root.ChooseMainPlayerResponse.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.startGameResponse = $root.StartGameResponse.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.makeQuestionResponse = $root.MakeQuestionResponse.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.giveAnswerResponse = $root.GiveAnswerResponse.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.getGamestateResponse = $root.GetGameStateResponse.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.skipTimeResponse = $root.SkipTimeResponse.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.notificationGamestate = $root.GameStateNotification.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RootResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RootResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RootResponse} RootResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for RootResponse
     * @function getTypeUrl
     * @memberof RootResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RootResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RootResponse";
    };

    return RootResponse;
})();

$root.CreateRoomResponseOk = (function() {

    /**
     * Properties of a CreateRoomResponseOk.
     * @exports ICreateRoomResponseOk
     * @interface ICreateRoomResponseOk
     * @property {IAuthData|null} [authData] CreateRoomResponseOk authData
     */

    /**
     * Constructs a new CreateRoomResponseOk.
     * @exports CreateRoomResponseOk
     * @classdesc Represents a CreateRoomResponseOk.
     * @implements ICreateRoomResponseOk
     * @constructor
     * @param {ICreateRoomResponseOk=} [properties] Properties to set
     */
    function CreateRoomResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateRoomResponseOk authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof CreateRoomResponseOk
     * @instance
     */
    CreateRoomResponseOk.prototype.authData = null;

    /**
     * Encodes the specified CreateRoomResponseOk message. Does not implicitly {@link CreateRoomResponseOk.verify|verify} messages.
     * @function encode
     * @memberof CreateRoomResponseOk
     * @static
     * @param {ICreateRoomResponseOk} message CreateRoomResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateRoomResponseOk message, length delimited. Does not implicitly {@link CreateRoomResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateRoomResponseOk
     * @static
     * @param {ICreateRoomResponseOk} message CreateRoomResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateRoomResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof CreateRoomResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateRoomResponseOk} CreateRoomResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateRoomResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateRoomResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateRoomResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateRoomResponseOk} CreateRoomResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for CreateRoomResponseOk
     * @function getTypeUrl
     * @memberof CreateRoomResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CreateRoomResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CreateRoomResponseOk";
    };

    return CreateRoomResponseOk;
})();

$root.CreateRoomResponseErr = (function() {

    /**
     * Properties of a CreateRoomResponseErr.
     * @exports ICreateRoomResponseErr
     * @interface ICreateRoomResponseErr
     * @property {string|null} [err] CreateRoomResponseErr err
     */

    /**
     * Constructs a new CreateRoomResponseErr.
     * @exports CreateRoomResponseErr
     * @classdesc Represents a CreateRoomResponseErr.
     * @implements ICreateRoomResponseErr
     * @constructor
     * @param {ICreateRoomResponseErr=} [properties] Properties to set
     */
    function CreateRoomResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateRoomResponseErr err.
     * @member {string} err
     * @memberof CreateRoomResponseErr
     * @instance
     */
    CreateRoomResponseErr.prototype.err = "";

    /**
     * Encodes the specified CreateRoomResponseErr message. Does not implicitly {@link CreateRoomResponseErr.verify|verify} messages.
     * @function encode
     * @memberof CreateRoomResponseErr
     * @static
     * @param {ICreateRoomResponseErr} message CreateRoomResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified CreateRoomResponseErr message, length delimited. Does not implicitly {@link CreateRoomResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateRoomResponseErr
     * @static
     * @param {ICreateRoomResponseErr} message CreateRoomResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateRoomResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof CreateRoomResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateRoomResponseErr} CreateRoomResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateRoomResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateRoomResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateRoomResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateRoomResponseErr} CreateRoomResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for CreateRoomResponseErr
     * @function getTypeUrl
     * @memberof CreateRoomResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CreateRoomResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CreateRoomResponseErr";
    };

    return CreateRoomResponseErr;
})();

$root.CreateRoomResponse = (function() {

    /**
     * Properties of a CreateRoomResponse.
     * @exports ICreateRoomResponse
     * @interface ICreateRoomResponse
     * @property {string|null} [requestId] CreateRoomResponse requestId
     * @property {ICreateRoomResponseOk|null} [ok] CreateRoomResponse ok
     * @property {ICreateRoomResponseErr|null} [err] CreateRoomResponse err
     */

    /**
     * Constructs a new CreateRoomResponse.
     * @exports CreateRoomResponse
     * @classdesc Represents a CreateRoomResponse.
     * @implements ICreateRoomResponse
     * @constructor
     * @param {ICreateRoomResponse=} [properties] Properties to set
     */
    function CreateRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateRoomResponse requestId.
     * @member {string} requestId
     * @memberof CreateRoomResponse
     * @instance
     */
    CreateRoomResponse.prototype.requestId = "";

    /**
     * CreateRoomResponse ok.
     * @member {ICreateRoomResponseOk|null|undefined} ok
     * @memberof CreateRoomResponse
     * @instance
     */
    CreateRoomResponse.prototype.ok = null;

    /**
     * CreateRoomResponse err.
     * @member {ICreateRoomResponseErr|null|undefined} err
     * @memberof CreateRoomResponse
     * @instance
     */
    CreateRoomResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * CreateRoomResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof CreateRoomResponse
     * @instance
     */
    Object.defineProperty(CreateRoomResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified CreateRoomResponse message. Does not implicitly {@link CreateRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof CreateRoomResponse
     * @static
     * @param {ICreateRoomResponse} message CreateRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.CreateRoomResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.CreateRoomResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateRoomResponse message, length delimited. Does not implicitly {@link CreateRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateRoomResponse
     * @static
     * @param {ICreateRoomResponse} message CreateRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreateRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateRoomResponse} CreateRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.CreateRoomResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.CreateRoomResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateRoomResponse} CreateRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for CreateRoomResponse
     * @function getTypeUrl
     * @memberof CreateRoomResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CreateRoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CreateRoomResponse";
    };

    return CreateRoomResponse;
})();

$root.JoinRoomResponseOk = (function() {

    /**
     * Properties of a JoinRoomResponseOk.
     * @exports IJoinRoomResponseOk
     * @interface IJoinRoomResponseOk
     * @property {IAuthData|null} [authData] JoinRoomResponseOk authData
     */

    /**
     * Constructs a new JoinRoomResponseOk.
     * @exports JoinRoomResponseOk
     * @classdesc Represents a JoinRoomResponseOk.
     * @implements IJoinRoomResponseOk
     * @constructor
     * @param {IJoinRoomResponseOk=} [properties] Properties to set
     */
    function JoinRoomResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomResponseOk authData.
     * @member {IAuthData|null|undefined} authData
     * @memberof JoinRoomResponseOk
     * @instance
     */
    JoinRoomResponseOk.prototype.authData = null;

    /**
     * Encodes the specified JoinRoomResponseOk message. Does not implicitly {@link JoinRoomResponseOk.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomResponseOk
     * @static
     * @param {IJoinRoomResponseOk} message JoinRoomResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.authData != null && Object.hasOwnProperty.call(message, "authData"))
            $root.AuthData.encode(message.authData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified JoinRoomResponseOk message, length delimited. Does not implicitly {@link JoinRoomResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomResponseOk
     * @static
     * @param {IJoinRoomResponseOk} message JoinRoomResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomResponseOk} JoinRoomResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.authData = $root.AuthData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomResponseOk} JoinRoomResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for JoinRoomResponseOk
     * @function getTypeUrl
     * @memberof JoinRoomResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    JoinRoomResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/JoinRoomResponseOk";
    };

    return JoinRoomResponseOk;
})();

$root.JoinRoomResponseErr = (function() {

    /**
     * Properties of a JoinRoomResponseErr.
     * @exports IJoinRoomResponseErr
     * @interface IJoinRoomResponseErr
     * @property {string|null} [err] JoinRoomResponseErr err
     */

    /**
     * Constructs a new JoinRoomResponseErr.
     * @exports JoinRoomResponseErr
     * @classdesc Represents a JoinRoomResponseErr.
     * @implements IJoinRoomResponseErr
     * @constructor
     * @param {IJoinRoomResponseErr=} [properties] Properties to set
     */
    function JoinRoomResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomResponseErr err.
     * @member {string} err
     * @memberof JoinRoomResponseErr
     * @instance
     */
    JoinRoomResponseErr.prototype.err = "";

    /**
     * Encodes the specified JoinRoomResponseErr message. Does not implicitly {@link JoinRoomResponseErr.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomResponseErr
     * @static
     * @param {IJoinRoomResponseErr} message JoinRoomResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified JoinRoomResponseErr message, length delimited. Does not implicitly {@link JoinRoomResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomResponseErr
     * @static
     * @param {IJoinRoomResponseErr} message JoinRoomResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomResponseErr} JoinRoomResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomResponseErr} JoinRoomResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for JoinRoomResponseErr
     * @function getTypeUrl
     * @memberof JoinRoomResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    JoinRoomResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/JoinRoomResponseErr";
    };

    return JoinRoomResponseErr;
})();

$root.JoinRoomResponse = (function() {

    /**
     * Properties of a JoinRoomResponse.
     * @exports IJoinRoomResponse
     * @interface IJoinRoomResponse
     * @property {string|null} [requestId] JoinRoomResponse requestId
     * @property {IJoinRoomResponseOk|null} [ok] JoinRoomResponse ok
     * @property {IJoinRoomResponseErr|null} [err] JoinRoomResponse err
     */

    /**
     * Constructs a new JoinRoomResponse.
     * @exports JoinRoomResponse
     * @classdesc Represents a JoinRoomResponse.
     * @implements IJoinRoomResponse
     * @constructor
     * @param {IJoinRoomResponse=} [properties] Properties to set
     */
    function JoinRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomResponse requestId.
     * @member {string} requestId
     * @memberof JoinRoomResponse
     * @instance
     */
    JoinRoomResponse.prototype.requestId = "";

    /**
     * JoinRoomResponse ok.
     * @member {IJoinRoomResponseOk|null|undefined} ok
     * @memberof JoinRoomResponse
     * @instance
     */
    JoinRoomResponse.prototype.ok = null;

    /**
     * JoinRoomResponse err.
     * @member {IJoinRoomResponseErr|null|undefined} err
     * @memberof JoinRoomResponse
     * @instance
     */
    JoinRoomResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * JoinRoomResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof JoinRoomResponse
     * @instance
     */
    Object.defineProperty(JoinRoomResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified JoinRoomResponse message. Does not implicitly {@link JoinRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomResponse
     * @static
     * @param {IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.JoinRoomResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.JoinRoomResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link JoinRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomResponse
     * @static
     * @param {IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomResponse} JoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.JoinRoomResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.JoinRoomResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomResponse} JoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for JoinRoomResponse
     * @function getTypeUrl
     * @memberof JoinRoomResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    JoinRoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/JoinRoomResponse";
    };

    return JoinRoomResponse;
})();

$root.ChangeNameResponseOk = (function() {

    /**
     * Properties of a ChangeNameResponseOk.
     * @exports IChangeNameResponseOk
     * @interface IChangeNameResponseOk
     */

    /**
     * Constructs a new ChangeNameResponseOk.
     * @exports ChangeNameResponseOk
     * @classdesc Represents a ChangeNameResponseOk.
     * @implements IChangeNameResponseOk
     * @constructor
     * @param {IChangeNameResponseOk=} [properties] Properties to set
     */
    function ChangeNameResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified ChangeNameResponseOk message. Does not implicitly {@link ChangeNameResponseOk.verify|verify} messages.
     * @function encode
     * @memberof ChangeNameResponseOk
     * @static
     * @param {IChangeNameResponseOk} message ChangeNameResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ChangeNameResponseOk message, length delimited. Does not implicitly {@link ChangeNameResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeNameResponseOk
     * @static
     * @param {IChangeNameResponseOk} message ChangeNameResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeNameResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeNameResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeNameResponseOk} ChangeNameResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeNameResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeNameResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeNameResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeNameResponseOk} ChangeNameResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChangeNameResponseOk
     * @function getTypeUrl
     * @memberof ChangeNameResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChangeNameResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChangeNameResponseOk";
    };

    return ChangeNameResponseOk;
})();

$root.ChangeNameResponseErr = (function() {

    /**
     * Properties of a ChangeNameResponseErr.
     * @exports IChangeNameResponseErr
     * @interface IChangeNameResponseErr
     * @property {string|null} [err] ChangeNameResponseErr err
     */

    /**
     * Constructs a new ChangeNameResponseErr.
     * @exports ChangeNameResponseErr
     * @classdesc Represents a ChangeNameResponseErr.
     * @implements IChangeNameResponseErr
     * @constructor
     * @param {IChangeNameResponseErr=} [properties] Properties to set
     */
    function ChangeNameResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeNameResponseErr err.
     * @member {string} err
     * @memberof ChangeNameResponseErr
     * @instance
     */
    ChangeNameResponseErr.prototype.err = "";

    /**
     * Encodes the specified ChangeNameResponseErr message. Does not implicitly {@link ChangeNameResponseErr.verify|verify} messages.
     * @function encode
     * @memberof ChangeNameResponseErr
     * @static
     * @param {IChangeNameResponseErr} message ChangeNameResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified ChangeNameResponseErr message, length delimited. Does not implicitly {@link ChangeNameResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeNameResponseErr
     * @static
     * @param {IChangeNameResponseErr} message ChangeNameResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeNameResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeNameResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeNameResponseErr} ChangeNameResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeNameResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeNameResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeNameResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeNameResponseErr} ChangeNameResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChangeNameResponseErr
     * @function getTypeUrl
     * @memberof ChangeNameResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChangeNameResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChangeNameResponseErr";
    };

    return ChangeNameResponseErr;
})();

$root.ChangeNameResponse = (function() {

    /**
     * Properties of a ChangeNameResponse.
     * @exports IChangeNameResponse
     * @interface IChangeNameResponse
     * @property {string|null} [requestId] ChangeNameResponse requestId
     * @property {IChangeNameResponseOk|null} [ok] ChangeNameResponse ok
     * @property {IChangeNameResponseErr|null} [err] ChangeNameResponse err
     */

    /**
     * Constructs a new ChangeNameResponse.
     * @exports ChangeNameResponse
     * @classdesc Represents a ChangeNameResponse.
     * @implements IChangeNameResponse
     * @constructor
     * @param {IChangeNameResponse=} [properties] Properties to set
     */
    function ChangeNameResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeNameResponse requestId.
     * @member {string} requestId
     * @memberof ChangeNameResponse
     * @instance
     */
    ChangeNameResponse.prototype.requestId = "";

    /**
     * ChangeNameResponse ok.
     * @member {IChangeNameResponseOk|null|undefined} ok
     * @memberof ChangeNameResponse
     * @instance
     */
    ChangeNameResponse.prototype.ok = null;

    /**
     * ChangeNameResponse err.
     * @member {IChangeNameResponseErr|null|undefined} err
     * @memberof ChangeNameResponse
     * @instance
     */
    ChangeNameResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ChangeNameResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof ChangeNameResponse
     * @instance
     */
    Object.defineProperty(ChangeNameResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified ChangeNameResponse message. Does not implicitly {@link ChangeNameResponse.verify|verify} messages.
     * @function encode
     * @memberof ChangeNameResponse
     * @static
     * @param {IChangeNameResponse} message ChangeNameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.ChangeNameResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.ChangeNameResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChangeNameResponse message, length delimited. Does not implicitly {@link ChangeNameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeNameResponse
     * @static
     * @param {IChangeNameResponse} message ChangeNameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeNameResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeNameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeNameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeNameResponse} ChangeNameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeNameResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.ChangeNameResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.ChangeNameResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeNameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeNameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeNameResponse} ChangeNameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeNameResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChangeNameResponse
     * @function getTypeUrl
     * @memberof ChangeNameResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChangeNameResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChangeNameResponse";
    };

    return ChangeNameResponse;
})();

$root.ChooseMainPlayerResponseOk = (function() {

    /**
     * Properties of a ChooseMainPlayerResponseOk.
     * @exports IChooseMainPlayerResponseOk
     * @interface IChooseMainPlayerResponseOk
     */

    /**
     * Constructs a new ChooseMainPlayerResponseOk.
     * @exports ChooseMainPlayerResponseOk
     * @classdesc Represents a ChooseMainPlayerResponseOk.
     * @implements IChooseMainPlayerResponseOk
     * @constructor
     * @param {IChooseMainPlayerResponseOk=} [properties] Properties to set
     */
    function ChooseMainPlayerResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified ChooseMainPlayerResponseOk message. Does not implicitly {@link ChooseMainPlayerResponseOk.verify|verify} messages.
     * @function encode
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {IChooseMainPlayerResponseOk} message ChooseMainPlayerResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ChooseMainPlayerResponseOk message, length delimited. Does not implicitly {@link ChooseMainPlayerResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {IChooseMainPlayerResponseOk} message ChooseMainPlayerResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChooseMainPlayerResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChooseMainPlayerResponseOk} ChooseMainPlayerResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChooseMainPlayerResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChooseMainPlayerResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChooseMainPlayerResponseOk} ChooseMainPlayerResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChooseMainPlayerResponseOk
     * @function getTypeUrl
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChooseMainPlayerResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChooseMainPlayerResponseOk";
    };

    return ChooseMainPlayerResponseOk;
})();

$root.ChooseMainPlayerResponseErr = (function() {

    /**
     * Properties of a ChooseMainPlayerResponseErr.
     * @exports IChooseMainPlayerResponseErr
     * @interface IChooseMainPlayerResponseErr
     * @property {string|null} [err] ChooseMainPlayerResponseErr err
     */

    /**
     * Constructs a new ChooseMainPlayerResponseErr.
     * @exports ChooseMainPlayerResponseErr
     * @classdesc Represents a ChooseMainPlayerResponseErr.
     * @implements IChooseMainPlayerResponseErr
     * @constructor
     * @param {IChooseMainPlayerResponseErr=} [properties] Properties to set
     */
    function ChooseMainPlayerResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChooseMainPlayerResponseErr err.
     * @member {string} err
     * @memberof ChooseMainPlayerResponseErr
     * @instance
     */
    ChooseMainPlayerResponseErr.prototype.err = "";

    /**
     * Encodes the specified ChooseMainPlayerResponseErr message. Does not implicitly {@link ChooseMainPlayerResponseErr.verify|verify} messages.
     * @function encode
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {IChooseMainPlayerResponseErr} message ChooseMainPlayerResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified ChooseMainPlayerResponseErr message, length delimited. Does not implicitly {@link ChooseMainPlayerResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {IChooseMainPlayerResponseErr} message ChooseMainPlayerResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChooseMainPlayerResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChooseMainPlayerResponseErr} ChooseMainPlayerResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChooseMainPlayerResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChooseMainPlayerResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChooseMainPlayerResponseErr} ChooseMainPlayerResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChooseMainPlayerResponseErr
     * @function getTypeUrl
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChooseMainPlayerResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChooseMainPlayerResponseErr";
    };

    return ChooseMainPlayerResponseErr;
})();

$root.ChooseMainPlayerResponse = (function() {

    /**
     * Properties of a ChooseMainPlayerResponse.
     * @exports IChooseMainPlayerResponse
     * @interface IChooseMainPlayerResponse
     * @property {string|null} [requestId] ChooseMainPlayerResponse requestId
     * @property {IChooseMainPlayerResponseOk|null} [ok] ChooseMainPlayerResponse ok
     * @property {IChooseMainPlayerResponseErr|null} [err] ChooseMainPlayerResponse err
     */

    /**
     * Constructs a new ChooseMainPlayerResponse.
     * @exports ChooseMainPlayerResponse
     * @classdesc Represents a ChooseMainPlayerResponse.
     * @implements IChooseMainPlayerResponse
     * @constructor
     * @param {IChooseMainPlayerResponse=} [properties] Properties to set
     */
    function ChooseMainPlayerResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChooseMainPlayerResponse requestId.
     * @member {string} requestId
     * @memberof ChooseMainPlayerResponse
     * @instance
     */
    ChooseMainPlayerResponse.prototype.requestId = "";

    /**
     * ChooseMainPlayerResponse ok.
     * @member {IChooseMainPlayerResponseOk|null|undefined} ok
     * @memberof ChooseMainPlayerResponse
     * @instance
     */
    ChooseMainPlayerResponse.prototype.ok = null;

    /**
     * ChooseMainPlayerResponse err.
     * @member {IChooseMainPlayerResponseErr|null|undefined} err
     * @memberof ChooseMainPlayerResponse
     * @instance
     */
    ChooseMainPlayerResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ChooseMainPlayerResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof ChooseMainPlayerResponse
     * @instance
     */
    Object.defineProperty(ChooseMainPlayerResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified ChooseMainPlayerResponse message. Does not implicitly {@link ChooseMainPlayerResponse.verify|verify} messages.
     * @function encode
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {IChooseMainPlayerResponse} message ChooseMainPlayerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.ChooseMainPlayerResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.ChooseMainPlayerResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChooseMainPlayerResponse message, length delimited. Does not implicitly {@link ChooseMainPlayerResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {IChooseMainPlayerResponse} message ChooseMainPlayerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChooseMainPlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChooseMainPlayerResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChooseMainPlayerResponse} ChooseMainPlayerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChooseMainPlayerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.ChooseMainPlayerResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.ChooseMainPlayerResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChooseMainPlayerResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChooseMainPlayerResponse} ChooseMainPlayerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChooseMainPlayerResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for ChooseMainPlayerResponse
     * @function getTypeUrl
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChooseMainPlayerResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChooseMainPlayerResponse";
    };

    return ChooseMainPlayerResponse;
})();

$root.StartGameResponseOk = (function() {

    /**
     * Properties of a StartGameResponseOk.
     * @exports IStartGameResponseOk
     * @interface IStartGameResponseOk
     */

    /**
     * Constructs a new StartGameResponseOk.
     * @exports StartGameResponseOk
     * @classdesc Represents a StartGameResponseOk.
     * @implements IStartGameResponseOk
     * @constructor
     * @param {IStartGameResponseOk=} [properties] Properties to set
     */
    function StartGameResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified StartGameResponseOk message. Does not implicitly {@link StartGameResponseOk.verify|verify} messages.
     * @function encode
     * @memberof StartGameResponseOk
     * @static
     * @param {IStartGameResponseOk} message StartGameResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified StartGameResponseOk message, length delimited. Does not implicitly {@link StartGameResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartGameResponseOk
     * @static
     * @param {IStartGameResponseOk} message StartGameResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartGameResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof StartGameResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartGameResponseOk} StartGameResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartGameResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartGameResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartGameResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartGameResponseOk} StartGameResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for StartGameResponseOk
     * @function getTypeUrl
     * @memberof StartGameResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartGameResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartGameResponseOk";
    };

    return StartGameResponseOk;
})();

$root.StartGameResponseErr = (function() {

    /**
     * Properties of a StartGameResponseErr.
     * @exports IStartGameResponseErr
     * @interface IStartGameResponseErr
     * @property {string|null} [err] StartGameResponseErr err
     */

    /**
     * Constructs a new StartGameResponseErr.
     * @exports StartGameResponseErr
     * @classdesc Represents a StartGameResponseErr.
     * @implements IStartGameResponseErr
     * @constructor
     * @param {IStartGameResponseErr=} [properties] Properties to set
     */
    function StartGameResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StartGameResponseErr err.
     * @member {string} err
     * @memberof StartGameResponseErr
     * @instance
     */
    StartGameResponseErr.prototype.err = "";

    /**
     * Encodes the specified StartGameResponseErr message. Does not implicitly {@link StartGameResponseErr.verify|verify} messages.
     * @function encode
     * @memberof StartGameResponseErr
     * @static
     * @param {IStartGameResponseErr} message StartGameResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified StartGameResponseErr message, length delimited. Does not implicitly {@link StartGameResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartGameResponseErr
     * @static
     * @param {IStartGameResponseErr} message StartGameResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartGameResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof StartGameResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartGameResponseErr} StartGameResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartGameResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartGameResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartGameResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartGameResponseErr} StartGameResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for StartGameResponseErr
     * @function getTypeUrl
     * @memberof StartGameResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartGameResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartGameResponseErr";
    };

    return StartGameResponseErr;
})();

$root.StartGameResponse = (function() {

    /**
     * Properties of a StartGameResponse.
     * @exports IStartGameResponse
     * @interface IStartGameResponse
     * @property {string|null} [requestId] StartGameResponse requestId
     * @property {IStartGameResponseOk|null} [ok] StartGameResponse ok
     * @property {IStartGameResponseErr|null} [err] StartGameResponse err
     */

    /**
     * Constructs a new StartGameResponse.
     * @exports StartGameResponse
     * @classdesc Represents a StartGameResponse.
     * @implements IStartGameResponse
     * @constructor
     * @param {IStartGameResponse=} [properties] Properties to set
     */
    function StartGameResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StartGameResponse requestId.
     * @member {string} requestId
     * @memberof StartGameResponse
     * @instance
     */
    StartGameResponse.prototype.requestId = "";

    /**
     * StartGameResponse ok.
     * @member {IStartGameResponseOk|null|undefined} ok
     * @memberof StartGameResponse
     * @instance
     */
    StartGameResponse.prototype.ok = null;

    /**
     * StartGameResponse err.
     * @member {IStartGameResponseErr|null|undefined} err
     * @memberof StartGameResponse
     * @instance
     */
    StartGameResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * StartGameResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof StartGameResponse
     * @instance
     */
    Object.defineProperty(StartGameResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified StartGameResponse message. Does not implicitly {@link StartGameResponse.verify|verify} messages.
     * @function encode
     * @memberof StartGameResponse
     * @static
     * @param {IStartGameResponse} message StartGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.StartGameResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.StartGameResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StartGameResponse message, length delimited. Does not implicitly {@link StartGameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartGameResponse
     * @static
     * @param {IStartGameResponse} message StartGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartGameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof StartGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartGameResponse} StartGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartGameResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.StartGameResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.StartGameResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartGameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartGameResponse} StartGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for StartGameResponse
     * @function getTypeUrl
     * @memberof StartGameResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartGameResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartGameResponse";
    };

    return StartGameResponse;
})();

$root.MakeQuestionResponseOk = (function() {

    /**
     * Properties of a MakeQuestionResponseOk.
     * @exports IMakeQuestionResponseOk
     * @interface IMakeQuestionResponseOk
     */

    /**
     * Constructs a new MakeQuestionResponseOk.
     * @exports MakeQuestionResponseOk
     * @classdesc Represents a MakeQuestionResponseOk.
     * @implements IMakeQuestionResponseOk
     * @constructor
     * @param {IMakeQuestionResponseOk=} [properties] Properties to set
     */
    function MakeQuestionResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified MakeQuestionResponseOk message. Does not implicitly {@link MakeQuestionResponseOk.verify|verify} messages.
     * @function encode
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {IMakeQuestionResponseOk} message MakeQuestionResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified MakeQuestionResponseOk message, length delimited. Does not implicitly {@link MakeQuestionResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {IMakeQuestionResponseOk} message MakeQuestionResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MakeQuestionResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MakeQuestionResponseOk} MakeQuestionResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MakeQuestionResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MakeQuestionResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MakeQuestionResponseOk} MakeQuestionResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for MakeQuestionResponseOk
     * @function getTypeUrl
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MakeQuestionResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MakeQuestionResponseOk";
    };

    return MakeQuestionResponseOk;
})();

$root.MakeQuestionResponseErr = (function() {

    /**
     * Properties of a MakeQuestionResponseErr.
     * @exports IMakeQuestionResponseErr
     * @interface IMakeQuestionResponseErr
     * @property {string|null} [err] MakeQuestionResponseErr err
     */

    /**
     * Constructs a new MakeQuestionResponseErr.
     * @exports MakeQuestionResponseErr
     * @classdesc Represents a MakeQuestionResponseErr.
     * @implements IMakeQuestionResponseErr
     * @constructor
     * @param {IMakeQuestionResponseErr=} [properties] Properties to set
     */
    function MakeQuestionResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MakeQuestionResponseErr err.
     * @member {string} err
     * @memberof MakeQuestionResponseErr
     * @instance
     */
    MakeQuestionResponseErr.prototype.err = "";

    /**
     * Encodes the specified MakeQuestionResponseErr message. Does not implicitly {@link MakeQuestionResponseErr.verify|verify} messages.
     * @function encode
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {IMakeQuestionResponseErr} message MakeQuestionResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified MakeQuestionResponseErr message, length delimited. Does not implicitly {@link MakeQuestionResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {IMakeQuestionResponseErr} message MakeQuestionResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MakeQuestionResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MakeQuestionResponseErr} MakeQuestionResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MakeQuestionResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MakeQuestionResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MakeQuestionResponseErr} MakeQuestionResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for MakeQuestionResponseErr
     * @function getTypeUrl
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MakeQuestionResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MakeQuestionResponseErr";
    };

    return MakeQuestionResponseErr;
})();

$root.MakeQuestionResponse = (function() {

    /**
     * Properties of a MakeQuestionResponse.
     * @exports IMakeQuestionResponse
     * @interface IMakeQuestionResponse
     * @property {string|null} [requestId] MakeQuestionResponse requestId
     * @property {IMakeQuestionResponseOk|null} [ok] MakeQuestionResponse ok
     * @property {IMakeQuestionResponseErr|null} [err] MakeQuestionResponse err
     */

    /**
     * Constructs a new MakeQuestionResponse.
     * @exports MakeQuestionResponse
     * @classdesc Represents a MakeQuestionResponse.
     * @implements IMakeQuestionResponse
     * @constructor
     * @param {IMakeQuestionResponse=} [properties] Properties to set
     */
    function MakeQuestionResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MakeQuestionResponse requestId.
     * @member {string} requestId
     * @memberof MakeQuestionResponse
     * @instance
     */
    MakeQuestionResponse.prototype.requestId = "";

    /**
     * MakeQuestionResponse ok.
     * @member {IMakeQuestionResponseOk|null|undefined} ok
     * @memberof MakeQuestionResponse
     * @instance
     */
    MakeQuestionResponse.prototype.ok = null;

    /**
     * MakeQuestionResponse err.
     * @member {IMakeQuestionResponseErr|null|undefined} err
     * @memberof MakeQuestionResponse
     * @instance
     */
    MakeQuestionResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * MakeQuestionResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof MakeQuestionResponse
     * @instance
     */
    Object.defineProperty(MakeQuestionResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified MakeQuestionResponse message. Does not implicitly {@link MakeQuestionResponse.verify|verify} messages.
     * @function encode
     * @memberof MakeQuestionResponse
     * @static
     * @param {IMakeQuestionResponse} message MakeQuestionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.MakeQuestionResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.MakeQuestionResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MakeQuestionResponse message, length delimited. Does not implicitly {@link MakeQuestionResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MakeQuestionResponse
     * @static
     * @param {IMakeQuestionResponse} message MakeQuestionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeQuestionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MakeQuestionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MakeQuestionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MakeQuestionResponse} MakeQuestionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MakeQuestionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.MakeQuestionResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.MakeQuestionResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MakeQuestionResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MakeQuestionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MakeQuestionResponse} MakeQuestionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeQuestionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for MakeQuestionResponse
     * @function getTypeUrl
     * @memberof MakeQuestionResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MakeQuestionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MakeQuestionResponse";
    };

    return MakeQuestionResponse;
})();

$root.GiveAnswerResponseOk = (function() {

    /**
     * Properties of a GiveAnswerResponseOk.
     * @exports IGiveAnswerResponseOk
     * @interface IGiveAnswerResponseOk
     */

    /**
     * Constructs a new GiveAnswerResponseOk.
     * @exports GiveAnswerResponseOk
     * @classdesc Represents a GiveAnswerResponseOk.
     * @implements IGiveAnswerResponseOk
     * @constructor
     * @param {IGiveAnswerResponseOk=} [properties] Properties to set
     */
    function GiveAnswerResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified GiveAnswerResponseOk message. Does not implicitly {@link GiveAnswerResponseOk.verify|verify} messages.
     * @function encode
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {IGiveAnswerResponseOk} message GiveAnswerResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GiveAnswerResponseOk message, length delimited. Does not implicitly {@link GiveAnswerResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {IGiveAnswerResponseOk} message GiveAnswerResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GiveAnswerResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GiveAnswerResponseOk} GiveAnswerResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GiveAnswerResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GiveAnswerResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GiveAnswerResponseOk} GiveAnswerResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GiveAnswerResponseOk
     * @function getTypeUrl
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GiveAnswerResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GiveAnswerResponseOk";
    };

    return GiveAnswerResponseOk;
})();

$root.GiveAnswerResponseErr = (function() {

    /**
     * Properties of a GiveAnswerResponseErr.
     * @exports IGiveAnswerResponseErr
     * @interface IGiveAnswerResponseErr
     * @property {string|null} [err] GiveAnswerResponseErr err
     */

    /**
     * Constructs a new GiveAnswerResponseErr.
     * @exports GiveAnswerResponseErr
     * @classdesc Represents a GiveAnswerResponseErr.
     * @implements IGiveAnswerResponseErr
     * @constructor
     * @param {IGiveAnswerResponseErr=} [properties] Properties to set
     */
    function GiveAnswerResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GiveAnswerResponseErr err.
     * @member {string} err
     * @memberof GiveAnswerResponseErr
     * @instance
     */
    GiveAnswerResponseErr.prototype.err = "";

    /**
     * Encodes the specified GiveAnswerResponseErr message. Does not implicitly {@link GiveAnswerResponseErr.verify|verify} messages.
     * @function encode
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {IGiveAnswerResponseErr} message GiveAnswerResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified GiveAnswerResponseErr message, length delimited. Does not implicitly {@link GiveAnswerResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {IGiveAnswerResponseErr} message GiveAnswerResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GiveAnswerResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GiveAnswerResponseErr} GiveAnswerResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GiveAnswerResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GiveAnswerResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GiveAnswerResponseErr} GiveAnswerResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GiveAnswerResponseErr
     * @function getTypeUrl
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GiveAnswerResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GiveAnswerResponseErr";
    };

    return GiveAnswerResponseErr;
})();

$root.GiveAnswerResponse = (function() {

    /**
     * Properties of a GiveAnswerResponse.
     * @exports IGiveAnswerResponse
     * @interface IGiveAnswerResponse
     * @property {string|null} [requestId] GiveAnswerResponse requestId
     * @property {IGiveAnswerResponseOk|null} [ok] GiveAnswerResponse ok
     * @property {IGiveAnswerResponseErr|null} [err] GiveAnswerResponse err
     */

    /**
     * Constructs a new GiveAnswerResponse.
     * @exports GiveAnswerResponse
     * @classdesc Represents a GiveAnswerResponse.
     * @implements IGiveAnswerResponse
     * @constructor
     * @param {IGiveAnswerResponse=} [properties] Properties to set
     */
    function GiveAnswerResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GiveAnswerResponse requestId.
     * @member {string} requestId
     * @memberof GiveAnswerResponse
     * @instance
     */
    GiveAnswerResponse.prototype.requestId = "";

    /**
     * GiveAnswerResponse ok.
     * @member {IGiveAnswerResponseOk|null|undefined} ok
     * @memberof GiveAnswerResponse
     * @instance
     */
    GiveAnswerResponse.prototype.ok = null;

    /**
     * GiveAnswerResponse err.
     * @member {IGiveAnswerResponseErr|null|undefined} err
     * @memberof GiveAnswerResponse
     * @instance
     */
    GiveAnswerResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GiveAnswerResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof GiveAnswerResponse
     * @instance
     */
    Object.defineProperty(GiveAnswerResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified GiveAnswerResponse message. Does not implicitly {@link GiveAnswerResponse.verify|verify} messages.
     * @function encode
     * @memberof GiveAnswerResponse
     * @static
     * @param {IGiveAnswerResponse} message GiveAnswerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.GiveAnswerResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.GiveAnswerResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GiveAnswerResponse message, length delimited. Does not implicitly {@link GiveAnswerResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GiveAnswerResponse
     * @static
     * @param {IGiveAnswerResponse} message GiveAnswerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiveAnswerResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GiveAnswerResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GiveAnswerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GiveAnswerResponse} GiveAnswerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GiveAnswerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.GiveAnswerResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.GiveAnswerResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GiveAnswerResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GiveAnswerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GiveAnswerResponse} GiveAnswerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiveAnswerResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GiveAnswerResponse
     * @function getTypeUrl
     * @memberof GiveAnswerResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GiveAnswerResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GiveAnswerResponse";
    };

    return GiveAnswerResponse;
})();

$root.GetGameStateResponseOk = (function() {

    /**
     * Properties of a GetGameStateResponseOk.
     * @exports IGetGameStateResponseOk
     * @interface IGetGameStateResponseOk
     * @property {IRootGameState|null} [gamestate] GetGameStateResponseOk gamestate
     */

    /**
     * Constructs a new GetGameStateResponseOk.
     * @exports GetGameStateResponseOk
     * @classdesc Represents a GetGameStateResponseOk.
     * @implements IGetGameStateResponseOk
     * @constructor
     * @param {IGetGameStateResponseOk=} [properties] Properties to set
     */
    function GetGameStateResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetGameStateResponseOk gamestate.
     * @member {IRootGameState|null|undefined} gamestate
     * @memberof GetGameStateResponseOk
     * @instance
     */
    GetGameStateResponseOk.prototype.gamestate = null;

    /**
     * Encodes the specified GetGameStateResponseOk message. Does not implicitly {@link GetGameStateResponseOk.verify|verify} messages.
     * @function encode
     * @memberof GetGameStateResponseOk
     * @static
     * @param {IGetGameStateResponseOk} message GetGameStateResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gamestate != null && Object.hasOwnProperty.call(message, "gamestate"))
            $root.RootGameState.encode(message.gamestate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetGameStateResponseOk message, length delimited. Does not implicitly {@link GetGameStateResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetGameStateResponseOk
     * @static
     * @param {IGetGameStateResponseOk} message GetGameStateResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetGameStateResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof GetGameStateResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetGameStateResponseOk} GetGameStateResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetGameStateResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.gamestate = $root.RootGameState.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetGameStateResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetGameStateResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetGameStateResponseOk} GetGameStateResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GetGameStateResponseOk
     * @function getTypeUrl
     * @memberof GetGameStateResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetGameStateResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetGameStateResponseOk";
    };

    return GetGameStateResponseOk;
})();

$root.GetGameStateInvalidAuth = (function() {

    /**
     * Properties of a GetGameStateInvalidAuth.
     * @exports IGetGameStateInvalidAuth
     * @interface IGetGameStateInvalidAuth
     * @property {string|null} [err] GetGameStateInvalidAuth err
     */

    /**
     * Constructs a new GetGameStateInvalidAuth.
     * @exports GetGameStateInvalidAuth
     * @classdesc Represents a GetGameStateInvalidAuth.
     * @implements IGetGameStateInvalidAuth
     * @constructor
     * @param {IGetGameStateInvalidAuth=} [properties] Properties to set
     */
    function GetGameStateInvalidAuth(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetGameStateInvalidAuth err.
     * @member {string} err
     * @memberof GetGameStateInvalidAuth
     * @instance
     */
    GetGameStateInvalidAuth.prototype.err = "";

    /**
     * Encodes the specified GetGameStateInvalidAuth message. Does not implicitly {@link GetGameStateInvalidAuth.verify|verify} messages.
     * @function encode
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {IGetGameStateInvalidAuth} message GetGameStateInvalidAuth message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateInvalidAuth.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified GetGameStateInvalidAuth message, length delimited. Does not implicitly {@link GetGameStateInvalidAuth.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {IGetGameStateInvalidAuth} message GetGameStateInvalidAuth message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateInvalidAuth.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetGameStateInvalidAuth message from the specified reader or buffer.
     * @function decode
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetGameStateInvalidAuth} GetGameStateInvalidAuth
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateInvalidAuth.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetGameStateInvalidAuth();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetGameStateInvalidAuth message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetGameStateInvalidAuth} GetGameStateInvalidAuth
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateInvalidAuth.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GetGameStateInvalidAuth
     * @function getTypeUrl
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetGameStateInvalidAuth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetGameStateInvalidAuth";
    };

    return GetGameStateInvalidAuth;
})();

$root.GetGameStateResponseErr = (function() {

    /**
     * Properties of a GetGameStateResponseErr.
     * @exports IGetGameStateResponseErr
     * @interface IGetGameStateResponseErr
     * @property {string|null} [err] GetGameStateResponseErr err
     */

    /**
     * Constructs a new GetGameStateResponseErr.
     * @exports GetGameStateResponseErr
     * @classdesc Represents a GetGameStateResponseErr.
     * @implements IGetGameStateResponseErr
     * @constructor
     * @param {IGetGameStateResponseErr=} [properties] Properties to set
     */
    function GetGameStateResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetGameStateResponseErr err.
     * @member {string} err
     * @memberof GetGameStateResponseErr
     * @instance
     */
    GetGameStateResponseErr.prototype.err = "";

    /**
     * Encodes the specified GetGameStateResponseErr message. Does not implicitly {@link GetGameStateResponseErr.verify|verify} messages.
     * @function encode
     * @memberof GetGameStateResponseErr
     * @static
     * @param {IGetGameStateResponseErr} message GetGameStateResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified GetGameStateResponseErr message, length delimited. Does not implicitly {@link GetGameStateResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetGameStateResponseErr
     * @static
     * @param {IGetGameStateResponseErr} message GetGameStateResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetGameStateResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof GetGameStateResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetGameStateResponseErr} GetGameStateResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetGameStateResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetGameStateResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetGameStateResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetGameStateResponseErr} GetGameStateResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GetGameStateResponseErr
     * @function getTypeUrl
     * @memberof GetGameStateResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetGameStateResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetGameStateResponseErr";
    };

    return GetGameStateResponseErr;
})();

$root.GetGameStateResponse = (function() {

    /**
     * Properties of a GetGameStateResponse.
     * @exports IGetGameStateResponse
     * @interface IGetGameStateResponse
     * @property {string|null} [requestId] GetGameStateResponse requestId
     * @property {IGetGameStateResponseOk|null} [ok] GetGameStateResponse ok
     * @property {IGetGameStateResponseErr|null} [err] GetGameStateResponse err
     * @property {IGetGameStateInvalidAuth|null} [invalidAuth] GetGameStateResponse invalidAuth
     */

    /**
     * Constructs a new GetGameStateResponse.
     * @exports GetGameStateResponse
     * @classdesc Represents a GetGameStateResponse.
     * @implements IGetGameStateResponse
     * @constructor
     * @param {IGetGameStateResponse=} [properties] Properties to set
     */
    function GetGameStateResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetGameStateResponse requestId.
     * @member {string} requestId
     * @memberof GetGameStateResponse
     * @instance
     */
    GetGameStateResponse.prototype.requestId = "";

    /**
     * GetGameStateResponse ok.
     * @member {IGetGameStateResponseOk|null|undefined} ok
     * @memberof GetGameStateResponse
     * @instance
     */
    GetGameStateResponse.prototype.ok = null;

    /**
     * GetGameStateResponse err.
     * @member {IGetGameStateResponseErr|null|undefined} err
     * @memberof GetGameStateResponse
     * @instance
     */
    GetGameStateResponse.prototype.err = null;

    /**
     * GetGameStateResponse invalidAuth.
     * @member {IGetGameStateInvalidAuth|null|undefined} invalidAuth
     * @memberof GetGameStateResponse
     * @instance
     */
    GetGameStateResponse.prototype.invalidAuth = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GetGameStateResponse response.
     * @member {"ok"|"err"|"invalidAuth"|undefined} response
     * @memberof GetGameStateResponse
     * @instance
     */
    Object.defineProperty(GetGameStateResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err", "invalidAuth"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified GetGameStateResponse message. Does not implicitly {@link GetGameStateResponse.verify|verify} messages.
     * @function encode
     * @memberof GetGameStateResponse
     * @static
     * @param {IGetGameStateResponse} message GetGameStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.GetGameStateResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.GetGameStateResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.invalidAuth != null && Object.hasOwnProperty.call(message, "invalidAuth"))
            $root.GetGameStateInvalidAuth.encode(message.invalidAuth, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetGameStateResponse message, length delimited. Does not implicitly {@link GetGameStateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetGameStateResponse
     * @static
     * @param {IGetGameStateResponse} message GetGameStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetGameStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetGameStateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetGameStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetGameStateResponse} GetGameStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetGameStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.GetGameStateResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.GetGameStateResponseErr.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.invalidAuth = $root.GetGameStateInvalidAuth.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetGameStateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetGameStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetGameStateResponse} GetGameStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetGameStateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for GetGameStateResponse
     * @function getTypeUrl
     * @memberof GetGameStateResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetGameStateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetGameStateResponse";
    };

    return GetGameStateResponse;
})();

$root.SkipTimeResponseOk = (function() {

    /**
     * Properties of a SkipTimeResponseOk.
     * @exports ISkipTimeResponseOk
     * @interface ISkipTimeResponseOk
     */

    /**
     * Constructs a new SkipTimeResponseOk.
     * @exports SkipTimeResponseOk
     * @classdesc Represents a SkipTimeResponseOk.
     * @implements ISkipTimeResponseOk
     * @constructor
     * @param {ISkipTimeResponseOk=} [properties] Properties to set
     */
    function SkipTimeResponseOk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified SkipTimeResponseOk message. Does not implicitly {@link SkipTimeResponseOk.verify|verify} messages.
     * @function encode
     * @memberof SkipTimeResponseOk
     * @static
     * @param {ISkipTimeResponseOk} message SkipTimeResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeResponseOk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified SkipTimeResponseOk message, length delimited. Does not implicitly {@link SkipTimeResponseOk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SkipTimeResponseOk
     * @static
     * @param {ISkipTimeResponseOk} message SkipTimeResponseOk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeResponseOk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SkipTimeResponseOk message from the specified reader or buffer.
     * @function decode
     * @memberof SkipTimeResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SkipTimeResponseOk} SkipTimeResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeResponseOk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SkipTimeResponseOk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SkipTimeResponseOk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SkipTimeResponseOk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SkipTimeResponseOk} SkipTimeResponseOk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeResponseOk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for SkipTimeResponseOk
     * @function getTypeUrl
     * @memberof SkipTimeResponseOk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SkipTimeResponseOk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SkipTimeResponseOk";
    };

    return SkipTimeResponseOk;
})();

$root.SkipTimeResponseErr = (function() {

    /**
     * Properties of a SkipTimeResponseErr.
     * @exports ISkipTimeResponseErr
     * @interface ISkipTimeResponseErr
     * @property {string|null} [err] SkipTimeResponseErr err
     */

    /**
     * Constructs a new SkipTimeResponseErr.
     * @exports SkipTimeResponseErr
     * @classdesc Represents a SkipTimeResponseErr.
     * @implements ISkipTimeResponseErr
     * @constructor
     * @param {ISkipTimeResponseErr=} [properties] Properties to set
     */
    function SkipTimeResponseErr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SkipTimeResponseErr err.
     * @member {string} err
     * @memberof SkipTimeResponseErr
     * @instance
     */
    SkipTimeResponseErr.prototype.err = "";

    /**
     * Encodes the specified SkipTimeResponseErr message. Does not implicitly {@link SkipTimeResponseErr.verify|verify} messages.
     * @function encode
     * @memberof SkipTimeResponseErr
     * @static
     * @param {ISkipTimeResponseErr} message SkipTimeResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeResponseErr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
        return writer;
    };

    /**
     * Encodes the specified SkipTimeResponseErr message, length delimited. Does not implicitly {@link SkipTimeResponseErr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SkipTimeResponseErr
     * @static
     * @param {ISkipTimeResponseErr} message SkipTimeResponseErr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeResponseErr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SkipTimeResponseErr message from the specified reader or buffer.
     * @function decode
     * @memberof SkipTimeResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SkipTimeResponseErr} SkipTimeResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeResponseErr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SkipTimeResponseErr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.err = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SkipTimeResponseErr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SkipTimeResponseErr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SkipTimeResponseErr} SkipTimeResponseErr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeResponseErr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for SkipTimeResponseErr
     * @function getTypeUrl
     * @memberof SkipTimeResponseErr
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SkipTimeResponseErr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SkipTimeResponseErr";
    };

    return SkipTimeResponseErr;
})();

$root.SkipTimeResponse = (function() {

    /**
     * Properties of a SkipTimeResponse.
     * @exports ISkipTimeResponse
     * @interface ISkipTimeResponse
     * @property {string|null} [requestId] SkipTimeResponse requestId
     * @property {ISkipTimeResponseOk|null} [ok] SkipTimeResponse ok
     * @property {ISkipTimeResponseErr|null} [err] SkipTimeResponse err
     */

    /**
     * Constructs a new SkipTimeResponse.
     * @exports SkipTimeResponse
     * @classdesc Represents a SkipTimeResponse.
     * @implements ISkipTimeResponse
     * @constructor
     * @param {ISkipTimeResponse=} [properties] Properties to set
     */
    function SkipTimeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SkipTimeResponse requestId.
     * @member {string} requestId
     * @memberof SkipTimeResponse
     * @instance
     */
    SkipTimeResponse.prototype.requestId = "";

    /**
     * SkipTimeResponse ok.
     * @member {ISkipTimeResponseOk|null|undefined} ok
     * @memberof SkipTimeResponse
     * @instance
     */
    SkipTimeResponse.prototype.ok = null;

    /**
     * SkipTimeResponse err.
     * @member {ISkipTimeResponseErr|null|undefined} err
     * @memberof SkipTimeResponse
     * @instance
     */
    SkipTimeResponse.prototype.err = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * SkipTimeResponse response.
     * @member {"ok"|"err"|undefined} response
     * @memberof SkipTimeResponse
     * @instance
     */
    Object.defineProperty(SkipTimeResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified SkipTimeResponse message. Does not implicitly {@link SkipTimeResponse.verify|verify} messages.
     * @function encode
     * @memberof SkipTimeResponse
     * @static
     * @param {ISkipTimeResponse} message SkipTimeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            $root.SkipTimeResponseOk.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.err != null && Object.hasOwnProperty.call(message, "err"))
            $root.SkipTimeResponseErr.encode(message.err, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SkipTimeResponse message, length delimited. Does not implicitly {@link SkipTimeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SkipTimeResponse
     * @static
     * @param {ISkipTimeResponse} message SkipTimeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SkipTimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SkipTimeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SkipTimeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SkipTimeResponse} SkipTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SkipTimeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestId = reader.string();
                    break;
                }
            case 2: {
                    message.ok = $root.SkipTimeResponseOk.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.err = $root.SkipTimeResponseErr.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SkipTimeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SkipTimeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SkipTimeResponse} SkipTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SkipTimeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Gets the default type url for SkipTimeResponse
     * @function getTypeUrl
     * @memberof SkipTimeResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SkipTimeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SkipTimeResponse";
    };

    return SkipTimeResponse;
})();

module.exports = $root;
