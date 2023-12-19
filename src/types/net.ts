import { Component } from "cc";
import { BallController } from "./ball";

interface NetUser {
	avatar_url: string;
	connected: boolean;
	id: string;
	username: string;
	premium_type: number;
	discriminator: string;
	// TODO: figure this out
	properties: any[];

	updateData(data: NetUser): void;
}

interface NetClient {
	appID: string;
	cleanClose: boolean;
	closeCode: number;
	connection: {
		missedPings: number;
		ping: number;
		protocol: "OpPack" | string;
		pt: number;
		rtt: number;
		ws: WebSocket;
		serverTimeOffset: number;
		timeout: number;

		_connecting: boolean;
		_reconnectAttempts: number;
		_reconnecting: boolean;
		_savedUrl: string;
	};
	debug: boolean;
	discordID: string;
	// TODO: find type
	group: any | null;
	guildID: string;
	localUID: string;
	token: string;
	wasError: boolean;
	RTT: number;

	onConnectionStatus(): void;
	onMessage(): void;
	onOpcodeError(): void;

	auth(): void;
	// TODO: find type
	connect(t: any, JwtId: any[]): void;
	disconnect(): void;
	generateJWT(JwtId?: any[]): void;
	getServerTimeOffset(): void;
	getUserList(): void;
	isConnected(): boolean;
	joinGame(state?: { [key: string]: any }): void;
	joinGroup(t: any, n: any): void;
	leaveGame(): void;
	leaveGroup(): void;
	makeid(length: number): string;
}

interface NetworkManager extends Component {
	apiServer: string;
	appID: string;
	gameServer: string;
	userID: string;
	guildID: string;
	activityStatus: string;

	_netGame: {
		game: {
			app_id: string;
			created_at: number;
			max_players: number;
			id: string;
			creator_id: string;
			is_over: boolean;
			updated_at: number;
			state: {
				// TODO: Fill this out
				[key: string]: any;
			};
		} | null;
		users: Map<string, NetUser>;
		localUser: NetUser;
		maxPlayers: number;
		client: NetClient;
		localPlayer: NetPlayer;

		// i am unsure about most of these types
		properties: {
			gameplay_mode: number;
			round_state: number;
			current_hole: number;
			hole_time: number;
			level_start: number;
			level: number;
			level_seed: number;
			active_status_effects: string[];
			destroyed_placeables: {
				[key: string]: number;
			};
			tournament_levels: null | number[];
			levels_complete: null | number[];
			start_timer: number;
			votes: {
				[key: string]: number;
			};
			course_select_options: number;
			modes: number;
			available: number;
			tourney: number;
		};

		// there is like 40 of these, im not gonna get ALL the types.
		AddPlayer(t: any): void;
		HandleApplyStatusEffectToTarget(e: any, t: any, a: any): void;
		HandleConsumeStatusEffectCharge(e: any, t: any): void;
		HandleHoleTimeout(e: any): void;
		JoinGroup(e: any): void;
		PartialPlayerStateUpdate(e: any, t: any): void;
		QueueLocalPlayerMove(e: any): void;
		QueuePlayerMove(e: any, t: any): void;
		RecvPlayerBulkSetState(e: any): void;
		RegisterGameCommandHandler(e: any, t: any): void;
		RemovePlayer(e: any): void;
		SendApplyStatusEffectToTarget(e: any, a: any, r: any): void;
		SendBallAnimate(e: any): void;
		SendBallStopped(e: any): void;
		SendConsumeStatusEffectCharge(e: any, t: any): void;
		SendCorrection(e: any, t: any): void;
		SendForceLeaveGame(e: any): void;
		SendForcePlayerToSpectator(e: any): void;
		SendGameCommand(e: any, t: any): void;
		SendGameLogEvent(e: any): void;
		SendHoleTimeout(e: any): void;
		SendMarkPlacableAsDestroyed(e: any): void;
		SendPlayerBulkSetState(e: any): void;
		SendQueueMove(e: any): void;
		SendStartNewHole(e: any): void;
		SendStatusEffectEvent(e: any, t: any): void;
		SendTo(e: any, t: any): void;
		SendToMyGroup(e: any): void;
		SetPlayerState(e: any, t: any): void;
		UnregisterGameCommandHandler(e: any, t: any): void;
		UpdateGameProperties(e: any): void;
		UpdatePlayerState(e: any): void;
		canJoinGame(): boolean;
		connect(e: any, t: any, a: any, r: any, s: any): void;
		createGame(e: any): void;
		getLocalUserID(): string;
		getNetworkDebug(): boolean;
		getUser(e: any): NetUser;
	};
}


interface NetPlayer {
	local: boolean;
	localState: {
		golfPlayer: any; // there is so much stuff in that class
		visual: BallController;
	};
	netGame: NetworkManager;
	state: {
		phase: number;
		strokes: number;
		score: number[];
		hole: number;
		stroke_total: number[];
        prev_score: number | null;
		active_status_effects: string[];
		timeouts: number;
		hrtt: number;
		index: number;
		pos: {
			x: number;
			y: number;
			z: number;
		};
		vel: {
			x: number;
			y: number;
			z: number;
		};
	};
	uid: string;

    getLocalRTT(): number;
    getUser(): NetUser;
    isConnected(): boolean;
    partialStateUpdate(e: any): void;
    stateUpdated(): void;
}

export { NetworkManager, NetUser, NetClient };
