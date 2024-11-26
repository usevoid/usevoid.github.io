const changelogBtn = document.getElementById('changelogBtn');
        const changelogPopup = document.getElementById('changelogPopup');
        const closePopupBtn = document.getElementById('closePopupBtn');
        

        changelogBtn.onclick = () => {
            changelogPopup.style.display = 'block';
        };

        closePopupBtn.onclick = () => {
            changelogPopup.style.display = 'none';
        };
      // +1 when update duh idiot
        const version = "1";
const games = [
        { "icon": `games/2048/IMG_2647.jpeg?v=${version}`, "path": `/proton/games/2048/index.html?v=${version}`, "error": false, "name": "TEST" },
        ];

        const gameContainer = document.getElementById('gameContainer');
        const lastPlayedContainer = document.getElementById('lastPlayedContainer');
        const searchInput = document.getElementById('searchInput');


        function loadLastPlayedGames() {
            const lastPlayed = JSON.parse(localStorage.getItem('@proton/lp')) || [];
            lastPlayed.forEach(({ icon, path, name }) => {
                createGameCard(lastPlayedContainer, icon, path, name, false);
            });
        }

        function createGameCard(container, icon, path, name, error) {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.onclick = () => {
                if (!error) {
                    localStorage.setItem('@proton/path', path);
                    saveLastPlayedGame({ icon, path, name });
                    window.location.href = path;
                } else {
                    alert('Error: This game is unavailable.');
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
            const lastPlayed = JSON.parse(localStorage.getItem('@proton/lp')) || [];
            const existingIndex = lastPlayed.findIndex(item => item.path === game.path);
            if (existingIndex !== -1) {
                lastPlayed.splice(existingIndex, 1);
            }
            lastPlayed.unshift(game);
            localStorage.setItem('@proton/lp', JSON.stringify(lastPlayed.slice(0, 5)));
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
