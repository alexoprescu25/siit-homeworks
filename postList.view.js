class PostListView {

    constructor() {
        const model = new PostList();
        this.posts = model.getAll();
    }

    async displayElements() {
        const fragment = document.createDocumentFragment();
        const games = await this.posts;

        for(const game of games) {
            const p = document.createElement('p');
            const a = document.createElement('a');

            a.innerHTML = game.title;
            a.href = 'postDetails.html?postId=' + game._id;

            p.append(a);

            fragment.append(p);

        }

        document.body.append(fragment);
    }

    AddGame() {
        const newGame = document.createElement('button');
        newGame.innerHTML = 'Add New Game';
        newGame.addEventListener('click', addGameToDb);
        document.body.append(newGame);
    }
}

function addGameToDb() {
    fetch('https://games-world.herokuapp.com/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=Call+of+Duty%3A+WWII+Returned&releaseDate=1333929600&genre=First+Person+Shooter&publisher=Activision&imageUrl=https%3A%2F%2Fpsmedia.playstation.com%2Fis%2Fimage%2Fpsmedia%2Fcall-of-duty-wwii-two-column-01-ps4-eu-19apr17%3F%24TwoColumn_Image%24'
    });
}


const view = new PostListView();
view.displayElements();
view.AddGame();