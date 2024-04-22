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
     * Creates an AuthData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthData} AuthData
     */
    AuthData.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthData)
            return object;
        var message = new $root.AuthData();
        if (object.roomCode != null)
            message.roomCode = String(object.roomCode);
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        if (object.authToken != null)
            message.authToken = String(object.authToken);
        return message;
    };

    /**
     * Creates a plain object from an AuthData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthData
     * @static
     * @param {AuthData} message AuthData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.roomCode = "";
            object.playerId = "";
            object.authToken = "";
        }
        if (message.roomCode != null && message.hasOwnProperty("roomCode"))
            object.roomCode = message.roomCode;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.authToken != null && message.hasOwnProperty("authToken"))
            object.authToken = message.authToken;
        return object;
    };

    /**
     * Converts this AuthData to JSON.
     * @function toJSON
     * @memberof AuthData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a RootGameState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RootGameState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RootGameState} RootGameState
     */
    RootGameState.fromObject = function fromObject(object) {
        if (object instanceof $root.RootGameState)
            return object;
        var message = new $root.RootGameState();
        if (object.lobby != null) {
            if (typeof object.lobby !== "object")
                throw TypeError(".RootGameState.lobby: object expected");
            message.lobby = $root.LobbyGameState.fromObject(object.lobby);
        }
        if (object.waitForQuestion != null) {
            if (typeof object.waitForQuestion !== "object")
                throw TypeError(".RootGameState.waitForQuestion: object expected");
            message.waitForQuestion = $root.WaitForQuestionState.fromObject(object.waitForQuestion);
        }
        if (object.waitForAnswer != null) {
            if (typeof object.waitForAnswer !== "object")
                throw TypeError(".RootGameState.waitForAnswer: object expected");
            message.waitForAnswer = $root.WaitForAnswerState.fromObject(object.waitForAnswer);
        }
        if (object.waitForMainPlayer != null) {
            if (typeof object.waitForMainPlayer !== "object")
                throw TypeError(".RootGameState.waitForMainPlayer: object expected");
            message.waitForMainPlayer = $root.WaitForMainPlayerState.fromObject(object.waitForMainPlayer);
        }
        if (object.gameOver != null) {
            if (typeof object.gameOver !== "object")
                throw TypeError(".RootGameState.gameOver: object expected");
            message.gameOver = $root.GameOver.fromObject(object.gameOver);
        }
        return message;
    };

    /**
     * Creates a plain object from a RootGameState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RootGameState
     * @static
     * @param {RootGameState} message RootGameState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RootGameState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.lobby != null && message.hasOwnProperty("lobby")) {
            object.lobby = $root.LobbyGameState.toObject(message.lobby, options);
            if (options.oneofs)
                object.state = "lobby";
        }
        if (message.waitForQuestion != null && message.hasOwnProperty("waitForQuestion")) {
            object.waitForQuestion = $root.WaitForQuestionState.toObject(message.waitForQuestion, options);
            if (options.oneofs)
                object.state = "waitForQuestion";
        }
        if (message.waitForAnswer != null && message.hasOwnProperty("waitForAnswer")) {
            object.waitForAnswer = $root.WaitForAnswerState.toObject(message.waitForAnswer, options);
            if (options.oneofs)
                object.state = "waitForAnswer";
        }
        if (message.waitForMainPlayer != null && message.hasOwnProperty("waitForMainPlayer")) {
            object.waitForMainPlayer = $root.WaitForMainPlayerState.toObject(message.waitForMainPlayer, options);
            if (options.oneofs)
                object.state = "waitForMainPlayer";
        }
        if (message.gameOver != null && message.hasOwnProperty("gameOver")) {
            object.gameOver = $root.GameOver.toObject(message.gameOver, options);
            if (options.oneofs)
                object.state = "gameOver";
        }
        return object;
    };

    /**
     * Converts this RootGameState to JSON.
     * @function toJSON
     * @memberof RootGameState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RootGameState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a Player message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Player
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Player} Player
     */
    Player.fromObject = function fromObject(object) {
        if (object instanceof $root.Player)
            return object;
        var message = new $root.Player();
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        switch (object.playerType) {
        default:
            if (typeof object.playerType === "number") {
                message.playerType = object.playerType;
                break;
            }
            break;
        case "Participant":
        case 0:
            message.playerType = 0;
            break;
        case "MainPlayer":
        case 1:
            message.playerType = 1;
            break;
        case "Host":
        case 2:
            message.playerType = 2;
            break;
        }
        if (object.answerGiven != null)
            message.answerGiven = Boolean(object.answerGiven);
        if (object.stillAlive != null)
            message.stillAlive = Boolean(object.stillAlive);
        return message;
    };

    /**
     * Creates a plain object from a Player message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Player
     * @static
     * @param {Player} message Player
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Player.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerId = "";
            object.playerName = "";
            object.playerType = options.enums === String ? "Participant" : 0;
            object.answerGiven = false;
            object.stillAlive = false;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.playerType != null && message.hasOwnProperty("playerType"))
            object.playerType = options.enums === String ? $root.PlayerType[message.playerType] === undefined ? message.playerType : $root.PlayerType[message.playerType] : message.playerType;
        if (message.answerGiven != null && message.hasOwnProperty("answerGiven"))
            object.answerGiven = message.answerGiven;
        if (message.stillAlive != null && message.hasOwnProperty("stillAlive"))
            object.stillAlive = message.stillAlive;
        return object;
    };

    /**
     * Converts this Player to JSON.
     * @function toJSON
     * @memberof Player
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Player.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a RunningGamePlayersInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RunningGamePlayersInfo} RunningGamePlayersInfo
     */
    RunningGamePlayersInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RunningGamePlayersInfo)
            return object;
        var message = new $root.RunningGamePlayersInfo();
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".RunningGamePlayersInfo.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".RunningGamePlayersInfo.players: object expected");
                message.players[i] = $root.Player.fromObject(object.players[i]);
            }
        }
        if (object.mainPlayerScore != null)
            if ($util.Long)
                (message.mainPlayerScore = $util.Long.fromValue(object.mainPlayerScore)).unsigned = false;
            else if (typeof object.mainPlayerScore === "string")
                message.mainPlayerScore = parseInt(object.mainPlayerScore, 10);
            else if (typeof object.mainPlayerScore === "number")
                message.mainPlayerScore = object.mainPlayerScore;
            else if (typeof object.mainPlayerScore === "object")
                message.mainPlayerScore = new $util.LongBits(object.mainPlayerScore.low >>> 0, object.mainPlayerScore.high >>> 0).toNumber();
        if (object.hintSkipQuestionAvailable != null)
            message.hintSkipQuestionAvailable = Boolean(object.hintSkipQuestionAvailable);
        if (object.hintMajorityOpinionAvailable != null)
            message.hintMajorityOpinionAvailable = Boolean(object.hintMajorityOpinionAvailable);
        if (object.hintTwoOpinionsAvailable != null)
            message.hintTwoOpinionsAvailable = Boolean(object.hintTwoOpinionsAvailable);
        return message;
    };

    /**
     * Creates a plain object from a RunningGamePlayersInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RunningGamePlayersInfo
     * @static
     * @param {RunningGamePlayersInfo} message RunningGamePlayersInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RunningGamePlayersInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.players = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.mainPlayerScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.mainPlayerScore = options.longs === String ? "0" : 0;
            object.hintSkipQuestionAvailable = false;
            object.hintMajorityOpinionAvailable = false;
            object.hintTwoOpinionsAvailable = false;
        }
        if (message.players && message.players.length) {
            object.players = [];
            for (var j = 0; j < message.players.length; ++j)
                object.players[j] = $root.Player.toObject(message.players[j], options);
        }
        if (message.mainPlayerScore != null && message.hasOwnProperty("mainPlayerScore"))
            if (typeof message.mainPlayerScore === "number")
                object.mainPlayerScore = options.longs === String ? String(message.mainPlayerScore) : message.mainPlayerScore;
            else
                object.mainPlayerScore = options.longs === String ? $util.Long.prototype.toString.call(message.mainPlayerScore) : options.longs === Number ? new $util.LongBits(message.mainPlayerScore.low >>> 0, message.mainPlayerScore.high >>> 0).toNumber() : message.mainPlayerScore;
        if (message.hintSkipQuestionAvailable != null && message.hasOwnProperty("hintSkipQuestionAvailable"))
            object.hintSkipQuestionAvailable = message.hintSkipQuestionAvailable;
        if (message.hintMajorityOpinionAvailable != null && message.hasOwnProperty("hintMajorityOpinionAvailable"))
            object.hintMajorityOpinionAvailable = message.hintMajorityOpinionAvailable;
        if (message.hintTwoOpinionsAvailable != null && message.hasOwnProperty("hintTwoOpinionsAvailable"))
            object.hintTwoOpinionsAvailable = message.hintTwoOpinionsAvailable;
        return object;
    };

    /**
     * Converts this RunningGamePlayersInfo to JSON.
     * @function toJSON
     * @memberof RunningGamePlayersInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RunningGamePlayersInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a LobbyGameState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LobbyGameState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LobbyGameState} LobbyGameState
     */
    LobbyGameState.fromObject = function fromObject(object) {
        if (object instanceof $root.LobbyGameState)
            return object;
        var message = new $root.LobbyGameState();
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".LobbyGameState.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".LobbyGameState.players: object expected");
                message.players[i] = $root.Player.fromObject(object.players[i]);
            }
        }
        switch (object.chooseMainPlayerStrategy) {
        default:
            if (typeof object.chooseMainPlayerStrategy === "number") {
                message.chooseMainPlayerStrategy = object.chooseMainPlayerStrategy;
                break;
            }
            break;
        case "Random":
        case 0:
            message.chooseMainPlayerStrategy = 0;
            break;
        case "Specific":
        case 1:
            message.chooseMainPlayerStrategy = 1;
            break;
        }
        if (object.mainPlayerId != null)
            message.mainPlayerId = String(object.mainPlayerId);
        return message;
    };

    /**
     * Creates a plain object from a LobbyGameState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LobbyGameState
     * @static
     * @param {LobbyGameState} message LobbyGameState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LobbyGameState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.players = [];
        if (options.defaults)
            object.chooseMainPlayerStrategy = options.enums === String ? "Random" : 0;
        if (message.players && message.players.length) {
            object.players = [];
            for (var j = 0; j < message.players.length; ++j)
                object.players[j] = $root.Player.toObject(message.players[j], options);
        }
        if (message.chooseMainPlayerStrategy != null && message.hasOwnProperty("chooseMainPlayerStrategy"))
            object.chooseMainPlayerStrategy = options.enums === String ? $root.ChooseMainPlayerStrategy[message.chooseMainPlayerStrategy] === undefined ? message.chooseMainPlayerStrategy : $root.ChooseMainPlayerStrategy[message.chooseMainPlayerStrategy] : message.chooseMainPlayerStrategy;
        if (message.mainPlayerId != null && message.hasOwnProperty("mainPlayerId")) {
            object.mainPlayerId = message.mainPlayerId;
            if (options.oneofs)
                object._mainPlayerId = "mainPlayerId";
        }
        return object;
    };

    /**
     * Converts this LobbyGameState to JSON.
     * @function toJSON
     * @memberof LobbyGameState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LobbyGameState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a WaitForQuestionState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WaitForQuestionState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WaitForQuestionState} WaitForQuestionState
     */
    WaitForQuestionState.fromObject = function fromObject(object) {
        if (object instanceof $root.WaitForQuestionState)
            return object;
        var message = new $root.WaitForQuestionState();
        if (object.playersInfo != null) {
            if (typeof object.playersInfo !== "object")
                throw TypeError(".WaitForQuestionState.playersInfo: object expected");
            message.playersInfo = $root.RunningGamePlayersInfo.fromObject(object.playersInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a WaitForQuestionState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WaitForQuestionState
     * @static
     * @param {WaitForQuestionState} message WaitForQuestionState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WaitForQuestionState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.playersInfo = null;
        if (message.playersInfo != null && message.hasOwnProperty("playersInfo"))
            object.playersInfo = $root.RunningGamePlayersInfo.toObject(message.playersInfo, options);
        return object;
    };

    /**
     * Converts this WaitForQuestionState to JSON.
     * @function toJSON
     * @memberof WaitForQuestionState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WaitForQuestionState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a QuestionInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuestionInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuestionInfo} QuestionInfo
     */
    QuestionInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.QuestionInfo)
            return object;
        var message = new $root.QuestionInfo();
        if (object.question != null)
            message.question = String(object.question);
        if (object.answerOptions) {
            if (!Array.isArray(object.answerOptions))
                throw TypeError(".QuestionInfo.answerOptions: array expected");
            message.answerOptions = [];
            for (var i = 0; i < object.answerOptions.length; ++i)
                message.answerOptions[i] = String(object.answerOptions[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a QuestionInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuestionInfo
     * @static
     * @param {QuestionInfo} message QuestionInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuestionInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.answerOptions = [];
        if (options.defaults)
            object.question = "";
        if (message.question != null && message.hasOwnProperty("question"))
            object.question = message.question;
        if (message.answerOptions && message.answerOptions.length) {
            object.answerOptions = [];
            for (var j = 0; j < message.answerOptions.length; ++j)
                object.answerOptions[j] = message.answerOptions[j];
        }
        return object;
    };

    /**
     * Converts this QuestionInfo to JSON.
     * @function toJSON
     * @memberof QuestionInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuestionInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a WaitForAnswerState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WaitForAnswerState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WaitForAnswerState} WaitForAnswerState
     */
    WaitForAnswerState.fromObject = function fromObject(object) {
        if (object instanceof $root.WaitForAnswerState)
            return object;
        var message = new $root.WaitForAnswerState();
        if (object.playersInfo != null) {
            if (typeof object.playersInfo !== "object")
                throw TypeError(".WaitForAnswerState.playersInfo: object expected");
            message.playersInfo = $root.RunningGamePlayersInfo.fromObject(object.playersInfo);
        }
        if (object.questionInfo != null) {
            if (typeof object.questionInfo !== "object")
                throw TypeError(".WaitForAnswerState.questionInfo: object expected");
            message.questionInfo = $root.QuestionInfo.fromObject(object.questionInfo);
        }
        if (object.milisecondsLeft != null)
            if ($util.Long)
                (message.milisecondsLeft = $util.Long.fromValue(object.milisecondsLeft)).unsigned = true;
            else if (typeof object.milisecondsLeft === "string")
                message.milisecondsLeft = parseInt(object.milisecondsLeft, 10);
            else if (typeof object.milisecondsLeft === "number")
                message.milisecondsLeft = object.milisecondsLeft;
            else if (typeof object.milisecondsLeft === "object")
                message.milisecondsLeft = new $util.LongBits(object.milisecondsLeft.low >>> 0, object.milisecondsLeft.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a WaitForAnswerState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WaitForAnswerState
     * @static
     * @param {WaitForAnswerState} message WaitForAnswerState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WaitForAnswerState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playersInfo = null;
            object.questionInfo = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.milisecondsLeft = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.milisecondsLeft = options.longs === String ? "0" : 0;
        }
        if (message.playersInfo != null && message.hasOwnProperty("playersInfo"))
            object.playersInfo = $root.RunningGamePlayersInfo.toObject(message.playersInfo, options);
        if (message.questionInfo != null && message.hasOwnProperty("questionInfo"))
            object.questionInfo = $root.QuestionInfo.toObject(message.questionInfo, options);
        if (message.milisecondsLeft != null && message.hasOwnProperty("milisecondsLeft"))
            if (typeof message.milisecondsLeft === "number")
                object.milisecondsLeft = options.longs === String ? String(message.milisecondsLeft) : message.milisecondsLeft;
            else
                object.milisecondsLeft = options.longs === String ? $util.Long.prototype.toString.call(message.milisecondsLeft) : options.longs === Number ? new $util.LongBits(message.milisecondsLeft.low >>> 0, message.milisecondsLeft.high >>> 0).toNumber(true) : message.milisecondsLeft;
        return object;
    };

    /**
     * Converts this WaitForAnswerState to JSON.
     * @function toJSON
     * @memberof WaitForAnswerState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WaitForAnswerState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a SpoiledAnswer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpoiledAnswer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpoiledAnswer} SpoiledAnswer
     */
    SpoiledAnswer.fromObject = function fromObject(object) {
        if (object instanceof $root.SpoiledAnswer)
            return object;
        var message = new $root.SpoiledAnswer();
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        if (object.answerIdx != null)
            message.answerIdx = object.answerIdx >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SpoiledAnswer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpoiledAnswer
     * @static
     * @param {SpoiledAnswer} message SpoiledAnswer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpoiledAnswer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerId = "";
            object.answerIdx = 0;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.answerIdx != null && message.hasOwnProperty("answerIdx"))
            object.answerIdx = message.answerIdx;
        return object;
    };

    /**
     * Converts this SpoiledAnswer to JSON.
     * @function toJSON
     * @memberof SpoiledAnswer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpoiledAnswer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a WaitForMainPlayerState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WaitForMainPlayerState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WaitForMainPlayerState} WaitForMainPlayerState
     */
    WaitForMainPlayerState.fromObject = function fromObject(object) {
        if (object instanceof $root.WaitForMainPlayerState)
            return object;
        var message = new $root.WaitForMainPlayerState();
        if (object.playersInfo != null) {
            if (typeof object.playersInfo !== "object")
                throw TypeError(".WaitForMainPlayerState.playersInfo: object expected");
            message.playersInfo = $root.RunningGamePlayersInfo.fromObject(object.playersInfo);
        }
        if (object.questionInfo != null) {
            if (typeof object.questionInfo !== "object")
                throw TypeError(".WaitForMainPlayerState.questionInfo: object expected");
            message.questionInfo = $root.QuestionInfo.fromObject(object.questionInfo);
        }
        if (object.spoiledAnswers) {
            if (!Array.isArray(object.spoiledAnswers))
                throw TypeError(".WaitForMainPlayerState.spoiledAnswers: array expected");
            message.spoiledAnswers = [];
            for (var i = 0; i < object.spoiledAnswers.length; ++i) {
                if (typeof object.spoiledAnswers[i] !== "object")
                    throw TypeError(".WaitForMainPlayerState.spoiledAnswers: object expected");
                message.spoiledAnswers[i] = $root.SpoiledAnswer.fromObject(object.spoiledAnswers[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a WaitForMainPlayerState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WaitForMainPlayerState
     * @static
     * @param {WaitForMainPlayerState} message WaitForMainPlayerState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WaitForMainPlayerState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.spoiledAnswers = [];
        if (options.defaults) {
            object.playersInfo = null;
            object.questionInfo = null;
        }
        if (message.playersInfo != null && message.hasOwnProperty("playersInfo"))
            object.playersInfo = $root.RunningGamePlayersInfo.toObject(message.playersInfo, options);
        if (message.questionInfo != null && message.hasOwnProperty("questionInfo"))
            object.questionInfo = $root.QuestionInfo.toObject(message.questionInfo, options);
        if (message.spoiledAnswers && message.spoiledAnswers.length) {
            object.spoiledAnswers = [];
            for (var j = 0; j < message.spoiledAnswers.length; ++j)
                object.spoiledAnswers[j] = $root.SpoiledAnswer.toObject(message.spoiledAnswers[j], options);
        }
        return object;
    };

    /**
     * Converts this WaitForMainPlayerState to JSON.
     * @function toJSON
     * @memberof WaitForMainPlayerState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WaitForMainPlayerState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GameOver message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameOver
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameOver} GameOver
     */
    GameOver.fromObject = function fromObject(object) {
        if (object instanceof $root.GameOver)
            return object;
        return new $root.GameOver();
    };

    /**
     * Creates a plain object from a GameOver message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameOver
     * @static
     * @param {GameOver} message GameOver
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameOver.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GameOver to JSON.
     * @function toJSON
     * @memberof GameOver
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameOver.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GameStateNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameStateNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameStateNotification} GameStateNotification
     */
    GameStateNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.GameStateNotification)
            return object;
        var message = new $root.GameStateNotification();
        if (object.gamestate != null) {
            if (typeof object.gamestate !== "object")
                throw TypeError(".GameStateNotification.gamestate: object expected");
            message.gamestate = $root.RootGameState.fromObject(object.gamestate);
        }
        return message;
    };

    /**
     * Creates a plain object from a GameStateNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameStateNotification
     * @static
     * @param {GameStateNotification} message GameStateNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameStateNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.gamestate = null;
        if (message.gamestate != null && message.hasOwnProperty("gamestate"))
            object.gamestate = $root.RootGameState.toObject(message.gamestate, options);
        return object;
    };

    /**
     * Converts this GameStateNotification to JSON.
     * @function toJSON
     * @memberof GameStateNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameStateNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a RootRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RootRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RootRequest} RootRequest
     */
    RootRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RootRequest)
            return object;
        var message = new $root.RootRequest();
        if (object.createRoom != null) {
            if (typeof object.createRoom !== "object")
                throw TypeError(".RootRequest.createRoom: object expected");
            message.createRoom = $root.CreateRoomRequest.fromObject(object.createRoom);
        }
        if (object.joinRoom != null) {
            if (typeof object.joinRoom !== "object")
                throw TypeError(".RootRequest.joinRoom: object expected");
            message.joinRoom = $root.JoinRoomRequest.fromObject(object.joinRoom);
        }
        if (object.changeName != null) {
            if (typeof object.changeName !== "object")
                throw TypeError(".RootRequest.changeName: object expected");
            message.changeName = $root.ChangeNameRequest.fromObject(object.changeName);
        }
        if (object.chooseMainPlayer != null) {
            if (typeof object.chooseMainPlayer !== "object")
                throw TypeError(".RootRequest.chooseMainPlayer: object expected");
            message.chooseMainPlayer = $root.ChooseMainPlayerRequest.fromObject(object.chooseMainPlayer);
        }
        if (object.startGame != null) {
            if (typeof object.startGame !== "object")
                throw TypeError(".RootRequest.startGame: object expected");
            message.startGame = $root.StartGameRequest.fromObject(object.startGame);
        }
        if (object.makeQuestion != null) {
            if (typeof object.makeQuestion !== "object")
                throw TypeError(".RootRequest.makeQuestion: object expected");
            message.makeQuestion = $root.MakeQuestionRequest.fromObject(object.makeQuestion);
        }
        if (object.giveAnswer != null) {
            if (typeof object.giveAnswer !== "object")
                throw TypeError(".RootRequest.giveAnswer: object expected");
            message.giveAnswer = $root.GiveAnswerRequest.fromObject(object.giveAnswer);
        }
        if (object.getGameState != null) {
            if (typeof object.getGameState !== "object")
                throw TypeError(".RootRequest.getGameState: object expected");
            message.getGameState = $root.GetGameStateRequest.fromObject(object.getGameState);
        }
        if (object.skipTime != null) {
            if (typeof object.skipTime !== "object")
                throw TypeError(".RootRequest.skipTime: object expected");
            message.skipTime = $root.SkipTimeRequest.fromObject(object.skipTime);
        }
        return message;
    };

    /**
     * Creates a plain object from a RootRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RootRequest
     * @static
     * @param {RootRequest} message RootRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RootRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.createRoom != null && message.hasOwnProperty("createRoom")) {
            object.createRoom = $root.CreateRoomRequest.toObject(message.createRoom, options);
            if (options.oneofs)
                object.request = "createRoom";
        }
        if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
            object.joinRoom = $root.JoinRoomRequest.toObject(message.joinRoom, options);
            if (options.oneofs)
                object.request = "joinRoom";
        }
        if (message.changeName != null && message.hasOwnProperty("changeName")) {
            object.changeName = $root.ChangeNameRequest.toObject(message.changeName, options);
            if (options.oneofs)
                object.request = "changeName";
        }
        if (message.chooseMainPlayer != null && message.hasOwnProperty("chooseMainPlayer")) {
            object.chooseMainPlayer = $root.ChooseMainPlayerRequest.toObject(message.chooseMainPlayer, options);
            if (options.oneofs)
                object.request = "chooseMainPlayer";
        }
        if (message.startGame != null && message.hasOwnProperty("startGame")) {
            object.startGame = $root.StartGameRequest.toObject(message.startGame, options);
            if (options.oneofs)
                object.request = "startGame";
        }
        if (message.makeQuestion != null && message.hasOwnProperty("makeQuestion")) {
            object.makeQuestion = $root.MakeQuestionRequest.toObject(message.makeQuestion, options);
            if (options.oneofs)
                object.request = "makeQuestion";
        }
        if (message.giveAnswer != null && message.hasOwnProperty("giveAnswer")) {
            object.giveAnswer = $root.GiveAnswerRequest.toObject(message.giveAnswer, options);
            if (options.oneofs)
                object.request = "giveAnswer";
        }
        if (message.getGameState != null && message.hasOwnProperty("getGameState")) {
            object.getGameState = $root.GetGameStateRequest.toObject(message.getGameState, options);
            if (options.oneofs)
                object.request = "getGameState";
        }
        if (message.skipTime != null && message.hasOwnProperty("skipTime")) {
            object.skipTime = $root.SkipTimeRequest.toObject(message.skipTime, options);
            if (options.oneofs)
                object.request = "skipTime";
        }
        return object;
    };

    /**
     * Converts this RootRequest to JSON.
     * @function toJSON
     * @memberof RootRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RootRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateRoomRequest} CreateRoomRequest
     */
    CreateRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateRoomRequest)
            return object;
        var message = new $root.CreateRoomRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        return message;
    };

    /**
     * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateRoomRequest
     * @static
     * @param {CreateRoomRequest} message CreateRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        return object;
    };

    /**
     * Converts this CreateRoomRequest to JSON.
     * @function toJSON
     * @memberof CreateRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a JoinRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomRequest} JoinRoomRequest
     */
    JoinRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomRequest)
            return object;
        var message = new $root.JoinRoomRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.roomCode != null)
            message.roomCode = String(object.roomCode);
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomRequest
     * @static
     * @param {JoinRoomRequest} message JoinRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.roomCode = "";
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.roomCode != null && message.hasOwnProperty("roomCode"))
            object.roomCode = message.roomCode;
        return object;
    };

    /**
     * Converts this JoinRoomRequest to JSON.
     * @function toJSON
     * @memberof JoinRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChangeNameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeNameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeNameRequest} ChangeNameRequest
     */
    ChangeNameRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeNameRequest)
            return object;
        var message = new $root.ChangeNameRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".ChangeNameRequest.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        if (object.newName != null)
            message.newName = String(object.newName);
        return message;
    };

    /**
     * Creates a plain object from a ChangeNameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeNameRequest
     * @static
     * @param {ChangeNameRequest} message ChangeNameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeNameRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.authData = null;
            object.newName = "";
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        if (message.newName != null && message.hasOwnProperty("newName"))
            object.newName = message.newName;
        return object;
    };

    /**
     * Converts this ChangeNameRequest to JSON.
     * @function toJSON
     * @memberof ChangeNameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeNameRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChooseMainPlayerRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChooseMainPlayerRequest} ChooseMainPlayerRequest
     */
    ChooseMainPlayerRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ChooseMainPlayerRequest)
            return object;
        var message = new $root.ChooseMainPlayerRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".ChooseMainPlayerRequest.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        if (object.random != null)
            message.random = Boolean(object.random);
        if (object.specificPlayerId != null)
            message.specificPlayerId = String(object.specificPlayerId);
        return message;
    };

    /**
     * Creates a plain object from a ChooseMainPlayerRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChooseMainPlayerRequest
     * @static
     * @param {ChooseMainPlayerRequest} message ChooseMainPlayerRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChooseMainPlayerRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.authData = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        if (message.random != null && message.hasOwnProperty("random")) {
            object.random = message.random;
            if (options.oneofs)
                object.choiceStrategy = "random";
        }
        if (message.specificPlayerId != null && message.hasOwnProperty("specificPlayerId")) {
            object.specificPlayerId = message.specificPlayerId;
            if (options.oneofs)
                object.choiceStrategy = "specificPlayerId";
        }
        return object;
    };

    /**
     * Converts this ChooseMainPlayerRequest to JSON.
     * @function toJSON
     * @memberof ChooseMainPlayerRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChooseMainPlayerRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a StartGameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartGameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartGameRequest} StartGameRequest
     */
    StartGameRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.StartGameRequest)
            return object;
        var message = new $root.StartGameRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".StartGameRequest.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        return message;
    };

    /**
     * Creates a plain object from a StartGameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartGameRequest
     * @static
     * @param {StartGameRequest} message StartGameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartGameRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.authData = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        return object;
    };

    /**
     * Converts this StartGameRequest to JSON.
     * @function toJSON
     * @memberof StartGameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartGameRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a MakeQuestionRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MakeQuestionRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MakeQuestionRequest} MakeQuestionRequest
     */
    MakeQuestionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MakeQuestionRequest)
            return object;
        var message = new $root.MakeQuestionRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".MakeQuestionRequest.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        if (object.question != null)
            message.question = String(object.question);
        if (object.answerOptions) {
            if (!Array.isArray(object.answerOptions))
                throw TypeError(".MakeQuestionRequest.answerOptions: array expected");
            message.answerOptions = [];
            for (var i = 0; i < object.answerOptions.length; ++i)
                message.answerOptions[i] = String(object.answerOptions[i]);
        }
        if (object.rightAnswerIdx != null)
            message.rightAnswerIdx = object.rightAnswerIdx | 0;
        return message;
    };

    /**
     * Creates a plain object from a MakeQuestionRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MakeQuestionRequest
     * @static
     * @param {MakeQuestionRequest} message MakeQuestionRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MakeQuestionRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.answerOptions = [];
        if (options.defaults) {
            object.requestId = "";
            object.authData = null;
            object.question = "";
            object.rightAnswerIdx = 0;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        if (message.question != null && message.hasOwnProperty("question"))
            object.question = message.question;
        if (message.answerOptions && message.answerOptions.length) {
            object.answerOptions = [];
            for (var j = 0; j < message.answerOptions.length; ++j)
                object.answerOptions[j] = message.answerOptions[j];
        }
        if (message.rightAnswerIdx != null && message.hasOwnProperty("rightAnswerIdx"))
            object.rightAnswerIdx = message.rightAnswerIdx;
        return object;
    };

    /**
     * Converts this MakeQuestionRequest to JSON.
     * @function toJSON
     * @memberof MakeQuestionRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MakeQuestionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GiveAnswerRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GiveAnswerRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GiveAnswerRequest} GiveAnswerRequest
     */
    GiveAnswerRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GiveAnswerRequest)
            return object;
        var message = new $root.GiveAnswerRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".GiveAnswerRequest.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        if (object.answerIdx != null)
            message.answerIdx = object.answerIdx | 0;
        switch (object.hint) {
        default:
            if (typeof object.hint === "number") {
                message.hint = object.hint;
                break;
            }
            break;
        case "SkipQuestion":
        case 0:
            message.hint = 0;
            break;
        case "MajorityOpinion":
        case 1:
            message.hint = 1;
            break;
        case "TwoOpinions":
        case 2:
            message.hint = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a GiveAnswerRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GiveAnswerRequest
     * @static
     * @param {GiveAnswerRequest} message GiveAnswerRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GiveAnswerRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.authData = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        if (message.answerIdx != null && message.hasOwnProperty("answerIdx")) {
            object.answerIdx = message.answerIdx;
            if (options.oneofs)
                object.answer = "answerIdx";
        }
        if (message.hint != null && message.hasOwnProperty("hint")) {
            object.hint = options.enums === String ? $root.HintType[message.hint] === undefined ? message.hint : $root.HintType[message.hint] : message.hint;
            if (options.oneofs)
                object.answer = "hint";
        }
        return object;
    };

    /**
     * Converts this GiveAnswerRequest to JSON.
     * @function toJSON
     * @memberof GiveAnswerRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GiveAnswerRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GetGameStateRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetGameStateRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetGameStateRequest} GetGameStateRequest
     */
    GetGameStateRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetGameStateRequest)
            return object;
        var message = new $root.GetGameStateRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".GetGameStateRequest.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetGameStateRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetGameStateRequest
     * @static
     * @param {GetGameStateRequest} message GetGameStateRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetGameStateRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.authData = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        return object;
    };

    /**
     * Converts this GetGameStateRequest to JSON.
     * @function toJSON
     * @memberof GetGameStateRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetGameStateRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a SkipTimeRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SkipTimeRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SkipTimeRequest} SkipTimeRequest
     */
    SkipTimeRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SkipTimeRequest)
            return object;
        var message = new $root.SkipTimeRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.roomCode != null)
            message.roomCode = String(object.roomCode);
        if (object.miliseconds != null)
            if ($util.Long)
                (message.miliseconds = $util.Long.fromValue(object.miliseconds)).unsigned = true;
            else if (typeof object.miliseconds === "string")
                message.miliseconds = parseInt(object.miliseconds, 10);
            else if (typeof object.miliseconds === "number")
                message.miliseconds = object.miliseconds;
            else if (typeof object.miliseconds === "object")
                message.miliseconds = new $util.LongBits(object.miliseconds.low >>> 0, object.miliseconds.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a SkipTimeRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SkipTimeRequest
     * @static
     * @param {SkipTimeRequest} message SkipTimeRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SkipTimeRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.roomCode = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.miliseconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.miliseconds = options.longs === String ? "0" : 0;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.roomCode != null && message.hasOwnProperty("roomCode"))
            object.roomCode = message.roomCode;
        if (message.miliseconds != null && message.hasOwnProperty("miliseconds"))
            if (typeof message.miliseconds === "number")
                object.miliseconds = options.longs === String ? String(message.miliseconds) : message.miliseconds;
            else
                object.miliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.miliseconds) : options.longs === Number ? new $util.LongBits(message.miliseconds.low >>> 0, message.miliseconds.high >>> 0).toNumber(true) : message.miliseconds;
        return object;
    };

    /**
     * Converts this SkipTimeRequest to JSON.
     * @function toJSON
     * @memberof SkipTimeRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SkipTimeRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a RootResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RootResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RootResponse} RootResponse
     */
    RootResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RootResponse)
            return object;
        var message = new $root.RootResponse();
        if (object.createRoom != null) {
            if (typeof object.createRoom !== "object")
                throw TypeError(".RootResponse.createRoom: object expected");
            message.createRoom = $root.CreateRoomResponse.fromObject(object.createRoom);
        }
        if (object.joinRoom != null) {
            if (typeof object.joinRoom !== "object")
                throw TypeError(".RootResponse.joinRoom: object expected");
            message.joinRoom = $root.JoinRoomResponse.fromObject(object.joinRoom);
        }
        if (object.changeName != null) {
            if (typeof object.changeName !== "object")
                throw TypeError(".RootResponse.changeName: object expected");
            message.changeName = $root.ChangeNameResponse.fromObject(object.changeName);
        }
        if (object.chooseMainPlayer != null) {
            if (typeof object.chooseMainPlayer !== "object")
                throw TypeError(".RootResponse.chooseMainPlayer: object expected");
            message.chooseMainPlayer = $root.ChooseMainPlayerResponse.fromObject(object.chooseMainPlayer);
        }
        if (object.startGameResponse != null) {
            if (typeof object.startGameResponse !== "object")
                throw TypeError(".RootResponse.startGameResponse: object expected");
            message.startGameResponse = $root.StartGameResponse.fromObject(object.startGameResponse);
        }
        if (object.makeQuestionResponse != null) {
            if (typeof object.makeQuestionResponse !== "object")
                throw TypeError(".RootResponse.makeQuestionResponse: object expected");
            message.makeQuestionResponse = $root.MakeQuestionResponse.fromObject(object.makeQuestionResponse);
        }
        if (object.giveAnswerResponse != null) {
            if (typeof object.giveAnswerResponse !== "object")
                throw TypeError(".RootResponse.giveAnswerResponse: object expected");
            message.giveAnswerResponse = $root.GiveAnswerResponse.fromObject(object.giveAnswerResponse);
        }
        if (object.getGamestateResponse != null) {
            if (typeof object.getGamestateResponse !== "object")
                throw TypeError(".RootResponse.getGamestateResponse: object expected");
            message.getGamestateResponse = $root.GetGameStateResponse.fromObject(object.getGamestateResponse);
        }
        if (object.skipTimeResponse != null) {
            if (typeof object.skipTimeResponse !== "object")
                throw TypeError(".RootResponse.skipTimeResponse: object expected");
            message.skipTimeResponse = $root.SkipTimeResponse.fromObject(object.skipTimeResponse);
        }
        if (object.notificationGamestate != null) {
            if (typeof object.notificationGamestate !== "object")
                throw TypeError(".RootResponse.notificationGamestate: object expected");
            message.notificationGamestate = $root.GameStateNotification.fromObject(object.notificationGamestate);
        }
        return message;
    };

    /**
     * Creates a plain object from a RootResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RootResponse
     * @static
     * @param {RootResponse} message RootResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RootResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.createRoom != null && message.hasOwnProperty("createRoom")) {
            object.createRoom = $root.CreateRoomResponse.toObject(message.createRoom, options);
            if (options.oneofs)
                object.response = "createRoom";
        }
        if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
            object.joinRoom = $root.JoinRoomResponse.toObject(message.joinRoom, options);
            if (options.oneofs)
                object.response = "joinRoom";
        }
        if (message.changeName != null && message.hasOwnProperty("changeName")) {
            object.changeName = $root.ChangeNameResponse.toObject(message.changeName, options);
            if (options.oneofs)
                object.response = "changeName";
        }
        if (message.chooseMainPlayer != null && message.hasOwnProperty("chooseMainPlayer")) {
            object.chooseMainPlayer = $root.ChooseMainPlayerResponse.toObject(message.chooseMainPlayer, options);
            if (options.oneofs)
                object.response = "chooseMainPlayer";
        }
        if (message.startGameResponse != null && message.hasOwnProperty("startGameResponse")) {
            object.startGameResponse = $root.StartGameResponse.toObject(message.startGameResponse, options);
            if (options.oneofs)
                object.response = "startGameResponse";
        }
        if (message.makeQuestionResponse != null && message.hasOwnProperty("makeQuestionResponse")) {
            object.makeQuestionResponse = $root.MakeQuestionResponse.toObject(message.makeQuestionResponse, options);
            if (options.oneofs)
                object.response = "makeQuestionResponse";
        }
        if (message.giveAnswerResponse != null && message.hasOwnProperty("giveAnswerResponse")) {
            object.giveAnswerResponse = $root.GiveAnswerResponse.toObject(message.giveAnswerResponse, options);
            if (options.oneofs)
                object.response = "giveAnswerResponse";
        }
        if (message.getGamestateResponse != null && message.hasOwnProperty("getGamestateResponse")) {
            object.getGamestateResponse = $root.GetGameStateResponse.toObject(message.getGamestateResponse, options);
            if (options.oneofs)
                object.response = "getGamestateResponse";
        }
        if (message.skipTimeResponse != null && message.hasOwnProperty("skipTimeResponse")) {
            object.skipTimeResponse = $root.SkipTimeResponse.toObject(message.skipTimeResponse, options);
            if (options.oneofs)
                object.response = "skipTimeResponse";
        }
        if (message.notificationGamestate != null && message.hasOwnProperty("notificationGamestate")) {
            object.notificationGamestate = $root.GameStateNotification.toObject(message.notificationGamestate, options);
            if (options.oneofs)
                object.response = "notificationGamestate";
        }
        return object;
    };

    /**
     * Converts this RootResponse to JSON.
     * @function toJSON
     * @memberof RootResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RootResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a CreateRoomResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateRoomResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateRoomResponseOk} CreateRoomResponseOk
     */
    CreateRoomResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateRoomResponseOk)
            return object;
        var message = new $root.CreateRoomResponseOk();
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".CreateRoomResponseOk.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateRoomResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateRoomResponseOk
     * @static
     * @param {CreateRoomResponseOk} message CreateRoomResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateRoomResponseOk.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.authData = null;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        return object;
    };

    /**
     * Converts this CreateRoomResponseOk to JSON.
     * @function toJSON
     * @memberof CreateRoomResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateRoomResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a CreateRoomResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateRoomResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateRoomResponseErr} CreateRoomResponseErr
     */
    CreateRoomResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateRoomResponseErr)
            return object;
        var message = new $root.CreateRoomResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a CreateRoomResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateRoomResponseErr
     * @static
     * @param {CreateRoomResponseErr} message CreateRoomResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateRoomResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this CreateRoomResponseErr to JSON.
     * @function toJSON
     * @memberof CreateRoomResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateRoomResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a CreateRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateRoomResponse} CreateRoomResponse
     */
    CreateRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateRoomResponse)
            return object;
        var message = new $root.CreateRoomResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".CreateRoomResponse.ok: object expected");
            message.ok = $root.CreateRoomResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".CreateRoomResponse.err: object expected");
            message.err = $root.CreateRoomResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateRoomResponse
     * @static
     * @param {CreateRoomResponse} message CreateRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.CreateRoomResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.CreateRoomResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this CreateRoomResponse to JSON.
     * @function toJSON
     * @memberof CreateRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a JoinRoomResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoomResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomResponseOk} JoinRoomResponseOk
     */
    JoinRoomResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomResponseOk)
            return object;
        var message = new $root.JoinRoomResponseOk();
        if (object.authData != null) {
            if (typeof object.authData !== "object")
                throw TypeError(".JoinRoomResponseOk.authData: object expected");
            message.authData = $root.AuthData.fromObject(object.authData);
        }
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomResponseOk
     * @static
     * @param {JoinRoomResponseOk} message JoinRoomResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoomResponseOk.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.authData = null;
        if (message.authData != null && message.hasOwnProperty("authData"))
            object.authData = $root.AuthData.toObject(message.authData, options);
        return object;
    };

    /**
     * Converts this JoinRoomResponseOk to JSON.
     * @function toJSON
     * @memberof JoinRoomResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a JoinRoomResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoomResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomResponseErr} JoinRoomResponseErr
     */
    JoinRoomResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomResponseErr)
            return object;
        var message = new $root.JoinRoomResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomResponseErr
     * @static
     * @param {JoinRoomResponseErr} message JoinRoomResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoomResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this JoinRoomResponseErr to JSON.
     * @function toJSON
     * @memberof JoinRoomResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a JoinRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomResponse} JoinRoomResponse
     */
    JoinRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomResponse)
            return object;
        var message = new $root.JoinRoomResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".JoinRoomResponse.ok: object expected");
            message.ok = $root.JoinRoomResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".JoinRoomResponse.err: object expected");
            message.err = $root.JoinRoomResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomResponse
     * @static
     * @param {JoinRoomResponse} message JoinRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.JoinRoomResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.JoinRoomResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this JoinRoomResponse to JSON.
     * @function toJSON
     * @memberof JoinRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChangeNameResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeNameResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeNameResponseOk} ChangeNameResponseOk
     */
    ChangeNameResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeNameResponseOk)
            return object;
        return new $root.ChangeNameResponseOk();
    };

    /**
     * Creates a plain object from a ChangeNameResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeNameResponseOk
     * @static
     * @param {ChangeNameResponseOk} message ChangeNameResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeNameResponseOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ChangeNameResponseOk to JSON.
     * @function toJSON
     * @memberof ChangeNameResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeNameResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChangeNameResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeNameResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeNameResponseErr} ChangeNameResponseErr
     */
    ChangeNameResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeNameResponseErr)
            return object;
        var message = new $root.ChangeNameResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a ChangeNameResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeNameResponseErr
     * @static
     * @param {ChangeNameResponseErr} message ChangeNameResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeNameResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this ChangeNameResponseErr to JSON.
     * @function toJSON
     * @memberof ChangeNameResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeNameResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChangeNameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeNameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeNameResponse} ChangeNameResponse
     */
    ChangeNameResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeNameResponse)
            return object;
        var message = new $root.ChangeNameResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".ChangeNameResponse.ok: object expected");
            message.ok = $root.ChangeNameResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".ChangeNameResponse.err: object expected");
            message.err = $root.ChangeNameResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChangeNameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeNameResponse
     * @static
     * @param {ChangeNameResponse} message ChangeNameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeNameResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.ChangeNameResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.ChangeNameResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this ChangeNameResponse to JSON.
     * @function toJSON
     * @memberof ChangeNameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeNameResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChooseMainPlayerResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChooseMainPlayerResponseOk} ChooseMainPlayerResponseOk
     */
    ChooseMainPlayerResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.ChooseMainPlayerResponseOk)
            return object;
        return new $root.ChooseMainPlayerResponseOk();
    };

    /**
     * Creates a plain object from a ChooseMainPlayerResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChooseMainPlayerResponseOk
     * @static
     * @param {ChooseMainPlayerResponseOk} message ChooseMainPlayerResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChooseMainPlayerResponseOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ChooseMainPlayerResponseOk to JSON.
     * @function toJSON
     * @memberof ChooseMainPlayerResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChooseMainPlayerResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChooseMainPlayerResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChooseMainPlayerResponseErr} ChooseMainPlayerResponseErr
     */
    ChooseMainPlayerResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.ChooseMainPlayerResponseErr)
            return object;
        var message = new $root.ChooseMainPlayerResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a ChooseMainPlayerResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChooseMainPlayerResponseErr
     * @static
     * @param {ChooseMainPlayerResponseErr} message ChooseMainPlayerResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChooseMainPlayerResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this ChooseMainPlayerResponseErr to JSON.
     * @function toJSON
     * @memberof ChooseMainPlayerResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChooseMainPlayerResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a ChooseMainPlayerResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChooseMainPlayerResponse} ChooseMainPlayerResponse
     */
    ChooseMainPlayerResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ChooseMainPlayerResponse)
            return object;
        var message = new $root.ChooseMainPlayerResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".ChooseMainPlayerResponse.ok: object expected");
            message.ok = $root.ChooseMainPlayerResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".ChooseMainPlayerResponse.err: object expected");
            message.err = $root.ChooseMainPlayerResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChooseMainPlayerResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChooseMainPlayerResponse
     * @static
     * @param {ChooseMainPlayerResponse} message ChooseMainPlayerResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChooseMainPlayerResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.ChooseMainPlayerResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.ChooseMainPlayerResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this ChooseMainPlayerResponse to JSON.
     * @function toJSON
     * @memberof ChooseMainPlayerResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChooseMainPlayerResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a StartGameResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartGameResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartGameResponseOk} StartGameResponseOk
     */
    StartGameResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.StartGameResponseOk)
            return object;
        return new $root.StartGameResponseOk();
    };

    /**
     * Creates a plain object from a StartGameResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartGameResponseOk
     * @static
     * @param {StartGameResponseOk} message StartGameResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartGameResponseOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this StartGameResponseOk to JSON.
     * @function toJSON
     * @memberof StartGameResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartGameResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a StartGameResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartGameResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartGameResponseErr} StartGameResponseErr
     */
    StartGameResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.StartGameResponseErr)
            return object;
        var message = new $root.StartGameResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a StartGameResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartGameResponseErr
     * @static
     * @param {StartGameResponseErr} message StartGameResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartGameResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this StartGameResponseErr to JSON.
     * @function toJSON
     * @memberof StartGameResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartGameResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a StartGameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartGameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartGameResponse} StartGameResponse
     */
    StartGameResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.StartGameResponse)
            return object;
        var message = new $root.StartGameResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".StartGameResponse.ok: object expected");
            message.ok = $root.StartGameResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".StartGameResponse.err: object expected");
            message.err = $root.StartGameResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a StartGameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartGameResponse
     * @static
     * @param {StartGameResponse} message StartGameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartGameResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.StartGameResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.StartGameResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this StartGameResponse to JSON.
     * @function toJSON
     * @memberof StartGameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartGameResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a MakeQuestionResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MakeQuestionResponseOk} MakeQuestionResponseOk
     */
    MakeQuestionResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.MakeQuestionResponseOk)
            return object;
        return new $root.MakeQuestionResponseOk();
    };

    /**
     * Creates a plain object from a MakeQuestionResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MakeQuestionResponseOk
     * @static
     * @param {MakeQuestionResponseOk} message MakeQuestionResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MakeQuestionResponseOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this MakeQuestionResponseOk to JSON.
     * @function toJSON
     * @memberof MakeQuestionResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MakeQuestionResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a MakeQuestionResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MakeQuestionResponseErr} MakeQuestionResponseErr
     */
    MakeQuestionResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.MakeQuestionResponseErr)
            return object;
        var message = new $root.MakeQuestionResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a MakeQuestionResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MakeQuestionResponseErr
     * @static
     * @param {MakeQuestionResponseErr} message MakeQuestionResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MakeQuestionResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this MakeQuestionResponseErr to JSON.
     * @function toJSON
     * @memberof MakeQuestionResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MakeQuestionResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a MakeQuestionResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MakeQuestionResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MakeQuestionResponse} MakeQuestionResponse
     */
    MakeQuestionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MakeQuestionResponse)
            return object;
        var message = new $root.MakeQuestionResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".MakeQuestionResponse.ok: object expected");
            message.ok = $root.MakeQuestionResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".MakeQuestionResponse.err: object expected");
            message.err = $root.MakeQuestionResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a MakeQuestionResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MakeQuestionResponse
     * @static
     * @param {MakeQuestionResponse} message MakeQuestionResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MakeQuestionResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.MakeQuestionResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.MakeQuestionResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this MakeQuestionResponse to JSON.
     * @function toJSON
     * @memberof MakeQuestionResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MakeQuestionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GiveAnswerResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GiveAnswerResponseOk} GiveAnswerResponseOk
     */
    GiveAnswerResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.GiveAnswerResponseOk)
            return object;
        return new $root.GiveAnswerResponseOk();
    };

    /**
     * Creates a plain object from a GiveAnswerResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GiveAnswerResponseOk
     * @static
     * @param {GiveAnswerResponseOk} message GiveAnswerResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GiveAnswerResponseOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GiveAnswerResponseOk to JSON.
     * @function toJSON
     * @memberof GiveAnswerResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GiveAnswerResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GiveAnswerResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GiveAnswerResponseErr} GiveAnswerResponseErr
     */
    GiveAnswerResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.GiveAnswerResponseErr)
            return object;
        var message = new $root.GiveAnswerResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a GiveAnswerResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GiveAnswerResponseErr
     * @static
     * @param {GiveAnswerResponseErr} message GiveAnswerResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GiveAnswerResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this GiveAnswerResponseErr to JSON.
     * @function toJSON
     * @memberof GiveAnswerResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GiveAnswerResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GiveAnswerResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GiveAnswerResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GiveAnswerResponse} GiveAnswerResponse
     */
    GiveAnswerResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GiveAnswerResponse)
            return object;
        var message = new $root.GiveAnswerResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".GiveAnswerResponse.ok: object expected");
            message.ok = $root.GiveAnswerResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".GiveAnswerResponse.err: object expected");
            message.err = $root.GiveAnswerResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a GiveAnswerResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GiveAnswerResponse
     * @static
     * @param {GiveAnswerResponse} message GiveAnswerResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GiveAnswerResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.GiveAnswerResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.GiveAnswerResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this GiveAnswerResponse to JSON.
     * @function toJSON
     * @memberof GiveAnswerResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GiveAnswerResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GetGameStateResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetGameStateResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetGameStateResponseOk} GetGameStateResponseOk
     */
    GetGameStateResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.GetGameStateResponseOk)
            return object;
        var message = new $root.GetGameStateResponseOk();
        if (object.gamestate != null) {
            if (typeof object.gamestate !== "object")
                throw TypeError(".GetGameStateResponseOk.gamestate: object expected");
            message.gamestate = $root.RootGameState.fromObject(object.gamestate);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetGameStateResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetGameStateResponseOk
     * @static
     * @param {GetGameStateResponseOk} message GetGameStateResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetGameStateResponseOk.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.gamestate = null;
        if (message.gamestate != null && message.hasOwnProperty("gamestate"))
            object.gamestate = $root.RootGameState.toObject(message.gamestate, options);
        return object;
    };

    /**
     * Converts this GetGameStateResponseOk to JSON.
     * @function toJSON
     * @memberof GetGameStateResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetGameStateResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GetGameStateInvalidAuth message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetGameStateInvalidAuth} GetGameStateInvalidAuth
     */
    GetGameStateInvalidAuth.fromObject = function fromObject(object) {
        if (object instanceof $root.GetGameStateInvalidAuth)
            return object;
        var message = new $root.GetGameStateInvalidAuth();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a GetGameStateInvalidAuth message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetGameStateInvalidAuth
     * @static
     * @param {GetGameStateInvalidAuth} message GetGameStateInvalidAuth
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetGameStateInvalidAuth.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this GetGameStateInvalidAuth to JSON.
     * @function toJSON
     * @memberof GetGameStateInvalidAuth
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetGameStateInvalidAuth.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GetGameStateResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetGameStateResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetGameStateResponseErr} GetGameStateResponseErr
     */
    GetGameStateResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.GetGameStateResponseErr)
            return object;
        var message = new $root.GetGameStateResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a GetGameStateResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetGameStateResponseErr
     * @static
     * @param {GetGameStateResponseErr} message GetGameStateResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetGameStateResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this GetGameStateResponseErr to JSON.
     * @function toJSON
     * @memberof GetGameStateResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetGameStateResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a GetGameStateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetGameStateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetGameStateResponse} GetGameStateResponse
     */
    GetGameStateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetGameStateResponse)
            return object;
        var message = new $root.GetGameStateResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".GetGameStateResponse.ok: object expected");
            message.ok = $root.GetGameStateResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".GetGameStateResponse.err: object expected");
            message.err = $root.GetGameStateResponseErr.fromObject(object.err);
        }
        if (object.invalidAuth != null) {
            if (typeof object.invalidAuth !== "object")
                throw TypeError(".GetGameStateResponse.invalidAuth: object expected");
            message.invalidAuth = $root.GetGameStateInvalidAuth.fromObject(object.invalidAuth);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetGameStateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetGameStateResponse
     * @static
     * @param {GetGameStateResponse} message GetGameStateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetGameStateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.GetGameStateResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.GetGameStateResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        if (message.invalidAuth != null && message.hasOwnProperty("invalidAuth")) {
            object.invalidAuth = $root.GetGameStateInvalidAuth.toObject(message.invalidAuth, options);
            if (options.oneofs)
                object.response = "invalidAuth";
        }
        return object;
    };

    /**
     * Converts this GetGameStateResponse to JSON.
     * @function toJSON
     * @memberof GetGameStateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetGameStateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a SkipTimeResponseOk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SkipTimeResponseOk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SkipTimeResponseOk} SkipTimeResponseOk
     */
    SkipTimeResponseOk.fromObject = function fromObject(object) {
        if (object instanceof $root.SkipTimeResponseOk)
            return object;
        return new $root.SkipTimeResponseOk();
    };

    /**
     * Creates a plain object from a SkipTimeResponseOk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SkipTimeResponseOk
     * @static
     * @param {SkipTimeResponseOk} message SkipTimeResponseOk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SkipTimeResponseOk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this SkipTimeResponseOk to JSON.
     * @function toJSON
     * @memberof SkipTimeResponseOk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SkipTimeResponseOk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a SkipTimeResponseErr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SkipTimeResponseErr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SkipTimeResponseErr} SkipTimeResponseErr
     */
    SkipTimeResponseErr.fromObject = function fromObject(object) {
        if (object instanceof $root.SkipTimeResponseErr)
            return object;
        var message = new $root.SkipTimeResponseErr();
        if (object.err != null)
            message.err = String(object.err);
        return message;
    };

    /**
     * Creates a plain object from a SkipTimeResponseErr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SkipTimeResponseErr
     * @static
     * @param {SkipTimeResponseErr} message SkipTimeResponseErr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SkipTimeResponseErr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.err = "";
        if (message.err != null && message.hasOwnProperty("err"))
            object.err = message.err;
        return object;
    };

    /**
     * Converts this SkipTimeResponseErr to JSON.
     * @function toJSON
     * @memberof SkipTimeResponseErr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SkipTimeResponseErr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
     * Creates a SkipTimeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SkipTimeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SkipTimeResponse} SkipTimeResponse
     */
    SkipTimeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SkipTimeResponse)
            return object;
        var message = new $root.SkipTimeResponse();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.ok != null) {
            if (typeof object.ok !== "object")
                throw TypeError(".SkipTimeResponse.ok: object expected");
            message.ok = $root.SkipTimeResponseOk.fromObject(object.ok);
        }
        if (object.err != null) {
            if (typeof object.err !== "object")
                throw TypeError(".SkipTimeResponse.err: object expected");
            message.err = $root.SkipTimeResponseErr.fromObject(object.err);
        }
        return message;
    };

    /**
     * Creates a plain object from a SkipTimeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SkipTimeResponse
     * @static
     * @param {SkipTimeResponse} message SkipTimeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SkipTimeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.ok != null && message.hasOwnProperty("ok")) {
            object.ok = $root.SkipTimeResponseOk.toObject(message.ok, options);
            if (options.oneofs)
                object.response = "ok";
        }
        if (message.err != null && message.hasOwnProperty("err")) {
            object.err = $root.SkipTimeResponseErr.toObject(message.err, options);
            if (options.oneofs)
                object.response = "err";
        }
        return object;
    };

    /**
     * Converts this SkipTimeResponse to JSON.
     * @function toJSON
     * @memberof SkipTimeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SkipTimeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
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
