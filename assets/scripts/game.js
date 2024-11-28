const version = "1";
const games = [
	{
		icon: "games/GunSpin/IMG_4781.png",
		path: "games/GunSpin/index.html",
		error: false,
		name: "Gun Spin",
	},
	{
		icon: "games/2048/meta/apple-touch-icon.png",
		path: "games/2048/index.html",
		error: false,
		name: "2048",
	},
	{
		icon: "games/8-ball/IMG_2666.png",
		path: "games/8-ball/index.html",
		error: false,
		name: "8 Ball Pool",
	},
	{
		icon: "games/Among-Us/red.png",
		path: "games/Among-Us/index.html",
		error: false,
		name: "Among Us",
	},
	{
		icon: "games/AngrySharks/assets/favicon/icon-512x512.png",
		path: "games/AngrySharks/index.html",
		error: false,
		name: "Angry Sharks",
	},
	{
		icon: "games/AwesomeTanks/IMG_4799.jpeg",
		path: "games/AwesomeTanks/index.html",
		error: false,
		name: "Awesome Tanks",
	},
	{
		icon: "games/BallisticChickens/IMG_4808.jpeg",
		path: "games/BallisticChickens/index.html",
		error: false,
		name: "Ballistic Chickens",
	},
	{
		icon: "games/Basketball-random/splash.jpeg",
		path: "games/Basketball-random/index.html",
		error: false,
		name: "Basketball Random",
	},
	{
		icon: "games/Basketbros/thumb.jpg",
		path: "games/Basketbros/index.html",
		error: false,
		name: "Basket Bros",
	},
	{
		icon: "games/Breakthebank/breakingthebank.png",
		path: "games/Breakthebank/index.html",
		error: false,
		name: "Break The Bank",
	},
	{
		icon: "games/Color-Switch/CS.jpeg",
		path: "games/Color-Switch/index.html",
		error: false,
		name: "Color Switch",
	},
	{
		icon: "games/Coreball/IMG_4800.png",
		path: "games/Coreball/index.html",
		error: false,
		name: "Coreball",
	},
	{
		icon: "games/Defendthetank/portrait-start.jpg",
		path: "games/Defendthetank/index.html",
		error: false,
		name: "Defend The Tank",
	},
	{
		icon: "games/Driftboss/drift-boss.png",
		path: "games/Driftboss/index.html",
		error: false,
		name: "Drift Boss",
	},
	{
		icon: "games/Dunes/Dunes.jpeg",
		path: "games/Dunes/index.html",
		error: false,
		name: "Dunes",
	},
	{
		icon: "games/Edgesurf/IMG_4801.jpeg",
		path: "games/Edgesurf/index.html",
		error: false,
		name: "Edge Surf",
	},
	{
		icon: "games/EuroCup/splash.png",
		path: "games/EuroCup/index.html",
		error: false,
		name: "Euro Cup",
	},
	{
		icon: "games/FactoryBallsForever/IMG_4784.jpeg",
		path: "games/FactoryBallsForever/index.html",
		error: false,
		name: "Factory Balls Forever",
	},
	{
		icon: "games/Flappy2048/IMG_4803.png",
		path: "games/Flappy2048/index.html",
		error: false,
		name: "Flappy 2048",
	},
	{
		icon: "games/GeoDashSubZero/IMG_0858.png",
		path: "games/GeoDashSubZero/index.html",
		error: false,
		name: "Geometry Dash SubZero",
	},
	{
		icon: "games/Geodashworld/IMG_0856.png",
		path: "games/Geodashworld/index.html",
		error: false,
		name: "Geometry Dash World",
	},
	{
		icon: "games/IdleBreakout/img/thumbnail.png",
		path: "games/IdleBreakout/index.html",
		error: false,
		name: "Idle Breakout",
	},
	{
		icon: "games/Monkey-mart/IMG_4804.png",
		path: "games/Monkey-mart/index.html",
		error: false,
		name: "Monkey Mart",
	},
	{
		icon: "games/Paperio2/images/icon512.png",
		path: "games/Paperio2/index.html",
		error: false,
		name: "Paper.io 2",
	},
	{
		icon: "games/Pixelgun3d/IMG_4636.png",
		path: "games/Pixelgun3d/index.html",
		error: false,
		name: "Pixel Gun 3D",
	},
	{
		icon: "games/Red-button/bigredbutton.png",
		path: "games/Red-button/index.html",
		error: false,
		name: "Big Red Button",
	},
	{
		icon: "games/Retro-bowl/retro.png",
		path: "games/Retro-bowl/index.html",
		error: false,
		name: "Retro Bowl",
	},
	{
		icon: "games/Smallworldcup/icon-256.png",
		path: "games/Smallworldcup/index.html",
		error: false,
		name: "Small World Cup",
	},
	{
		icon: "games/Stack/icon.png",
		path: "games/Stack/index.html",
		error: false,
		name: "Stack",
	},
	{
		icon: "games/Stickman-hook/unnamed.jpg",
		path: "games/Stickman-hook/index.html",
		error: false,
		name: "Stickman Hook",
	},
	{
		icon: "games/Subwaysurfers/img/splash.jpg",
		path: "games/Subwaysurfers/index.html",
		error: false,
		name: "Subway Surfers",
	},
	{
		icon: "games/cannonbasket4/img/splash.png",
		path: "games/cannonbasket4/index.html",
		error: false,
		name: "Cannon Basket 4",
	},
	{
		icon: "games/championisland/IMG_4806.jpeg",
		path: "games/championisland/index.html",
		error: false,
		name: "Champion Island",
	},
	{
		icon: "games/drawhill/icons/icon-512.png",
		path: "games/drawhill/index.html",
		error: false,
		name: "Draw Hill",
	},
	{
		icon: "games/geodashlite/geodashlite.png",
		path: "games/geodashlite/index.html",
		error: false,
		name: "Geometry Dash Lite",
	},
	{
		icon: "games/learntoflyidle/icon.jpg",
		path: "games/learntoflyidle/index.html",
		error: false,
		name: "Learn To Fly Idle",
	},
	{
		icon: "games/snowbattle/img/logo.png",
		path: "games/snowbattle/index.html",
		error: false,
		name: "Snow Battle",
	},
	{
		icon: "games/tanukisunset/IMG_4797.jpeg",
		path: "games/tanukisunset/index.html",
		error: false,
		name: "Tanuki Sunset",
	},
	{
		icon: "games/tinyfishing/thumb.png",
		path: "games/tinyfishing/index.html",
		error: false,
		name: "Tiny Fishing",
	},
	{
		icon: "games/wordle/img/logo_32x32.png",
		path: "games/wordle/index.html",
		error: false,
		name: "Wordle",
	},
        {
		icon: "games/roblox/IMG_2686.jpeg",
		path: "games/roblox/index.html",
		error: false,
		name: "Roblox",
	},
	{
		icon: "games/VolleyRandom/splash.png",
		path: "games/VolleyRandom/index.html",
		error: false,
		name: "Volleyball Random",
	},
];


const gameContainer = document.getElementById("gameContainer");
const lastPlayedContainer = document.getElementById("lastPlayedContainer");
const searchInput = document.getElementById("searchInput");

function loadLastPlayedGames() {
	const lastPlayed = JSON.parse(localStorage.getItem("@void/lp")) || [];
	for (let i = 0; i < lastPlayed.length; i++) {
		const { icon, path, name, error } = lastPlayed[i];
		createGameCard(lastPlayedContainer, icon, path, name, error);
	}
}

function createGameCard(container, icon, path, name, error) {
	const gameCard = document.createElement("div");
	gameCard.className = "game-card";
	gameCard.onclick = () => {
		if (!error) {
			localStorage.setItem("@void/path", path);
			saveLastPlayedGame({ icon, path, name, error });
			window.location.href = path;
		} else {
			alert(
				'Error: This game is unavailable. It could be because it is being worked on. If you think this is a bug, please contact us under the "contact" tab.',
			);
		}
	};

	const gameIcon = document.createElement("img");
	gameIcon.src = icon;
	gameIcon.alt = name;
	gameIcon.className = "game-icon";

	const gameName = document.createElement("div");
	gameName.className = "game-name";
	gameName.innerText = name;

	gameCard.append(gameIcon, gameName);
	container.appendChild(gameCard);
}

function saveLastPlayedGame(game) {
	const lastPlayed = JSON.parse(localStorage.getItem("@void/lp")) || [];
	const existingIndex = lastPlayed.findIndex((item) => item.path === game.path);
	if (existingIndex !== -1) {
		lastPlayed.splice(existingIndex, 1);
	}
	lastPlayed.unshift(game);
	localStorage.setItem("@void/lp", JSON.stringify(lastPlayed.slice(0, 5))); // Correct key here
}

function loadAllGames() {
	for (let i = 0; i < games.length; i++) {
		const { icon, path, name, error } = games[i];
		createGameCard(gameContainer, icon, path, name, error);
	}
}

function filterGames() {
	const searchTerm = searchInput.value.toLowerCase();
	const allGameCards = document.querySelectorAll(".game-card");

	for (let i = 0; i < allGameCards.length; i++) {
		const card = allGameCards[i];
		const gameName = card.querySelector(".game-name").innerText.toLowerCase();
		card.style.display = gameName.includes(searchTerm) ? "" : "none";
	}
}

searchInput.addEventListener("input", filterGames);

loadLastPlayedGames();
loadAllGames();
