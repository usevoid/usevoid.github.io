const version = "1";
const games = [
	{ icon: "test1234", path: "TEST", error: true, name: "1234" },
	{
		icon: "games/GunSpin/IMG_2653.jpeg",
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
