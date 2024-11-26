
const version = "1";
const games = [
  { "icon": `test1234`, "path": `TEST`, "error": true, "name": "1234" },
  { "icon": `games/GunSpin/IMG_2653.jpeg`, "path": `games/GunSpin/index.html`, "error": false, "name": "GunSpin" },
];

const gameContainer = document.getElementById('gameContainer');
const lastPlayedContainer = document.getElementById('lastPlayedContainer');
const searchInput = document.getElementById('searchInput');

function loadLastPlayedGames() {
  const lastPlayed = JSON.parse(localStorage.getItem('@void/lp')) || [];
  lastPlayed.forEach(({ icon, path, name, error }) => {
    createGameCard(lastPlayedContainer, icon, path, name, error);
  });
}

function createGameCard(container, icon, path, name, error) {
  const gameCard = document.createElement('div');
  gameCard.className = 'game-card';
  gameCard.onclick = () => {
    if (!error) {
      localStorage.setItem('@void/path', path);
      saveLastPlayedGame({ icon, path, name, error });
      window.location.href = path;
    } else {
      alert('Error: This game is unavailable. It could be because it is being worked on. If you think this is a bug, please contact us under the "contact" tab.');
    }
  };

  const gameIcon = document.createElement('img');
  gameIcon.src = icon;
  gameIcon.alt = name;
  gameIcon.className = 'game-icon';

  const gameName = document.createElement('div');
  gameName.className = 'game-name';
  gameName.innerText = name;

  gameCard.append(gameIcon, gameName);
  container.appendChild(gameCard);
}

function saveLastPlayedGame(game) {
  const lastPlayed = JSON.parse(localStorage.getItem('@void/lp')) || [];
  const existingIndex = lastPlayed.findIndex(item => item.path === game.path);
  if (existingIndex !== -1) {
    lastPlayed.splice(existingIndex, 1);
  }
  lastPlayed.unshift(game);
  localStorage.setItem('@void/lp', JSON.stringify(lastPlayed.slice(0, 5)));  // Correct key here
}

function loadAllGames() {
  games.forEach(({ icon, path, name, error }) => {
    createGameCard(gameContainer, icon, path, name, error);
  });
}

function filterGames() {
  const searchTerm = searchInput.value.toLowerCase();
  const allGameCards = document.querySelectorAll('.game-card');

  allGameCards.forEach(card => {
    const gameName = card.querySelector('.game-name').innerText.toLowerCase();
    card.style.display = gameName.includes(searchTerm) ? '' : 'none';
  });
}

searchInput.addEventListener('input', filterGames);

loadLastPlayedGames();
loadAllGames();
