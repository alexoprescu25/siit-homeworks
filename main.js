function getGameList() {
    const url = 'https://games-world.herokuapp.com/games';
    return fetch(url)
        .then((res) => res.json());
}

(async function displayGames() {
    const games = await getGameList();

    for(const game of games) {
        const title = document.createElement('h2');
        title.innerHTML = game.title;
        document.body.append(title);

        const img = document.createElement('img');
        img.setAttribute('src', game.imageUrl);
        document.body.append(img);

        const description = document.createElement('p');
        description.innerHTML = game.description;
        document.body.append(description);

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.gameid = 'https://games-world.herokuapp.com/games/' + game._id;
        editButton.addEventListener('click', editGame);
        document.body.append(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.gameid = 'https://games-world.herokuapp.com/games/' + game._id;
        deleteButton.addEventListener('click', deleteGame);
        document.body.append(deleteButton);
    }
})();



function editGame(e) {
    fetch(e.target.gameid, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=Name Changed'
    })
    
}

function deleteGame(e) {
    fetch(e.target.gameid, {
        method:'DELETE'
    }) 
    
}

const addNewGame = document.querySelector('.js-new-game');
addNewGame.addEventListener('click', addGameToDb);

function addGameToDb() {
    fetch('https://games-world.herokuapp.com/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=Call+of+Duty%3A+WWII+Returned&releaseDate=1333929600&genre=First+Person+Shooter&publisher=Activision&imageUrl=https%3A%2F%2Fpsmedia.playstation.com%2Fis%2Fimage%2Fpsmedia%2Fcall-of-duty-wwii-two-column-01-ps4-eu-19apr17%3F%24TwoColumn_Image%24'
    })
}
