class PostDetailsView {

    constructor() {
        const model = new PostList();

        const queryParams = location.search.split('&');
        const postId = queryParams
            .find(param => param.includes('postId='))
            .split('=')[1];

            this.post = model.findById(postId);
    }

    async displayPost() {
        const article = document.querySelector('.js-post-details');
        article.append(await this.createHtml());
    }

    async createHtml() {
        const post = await this.post;

        const title = document.createElement('h2');
        title.innerHTML = post.title;

        const image = document.createElement('img');
        image.src = post.imageUrl;

        const description = document.createElement('p');
        description.innerHTML = post.description;

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.gameid = 'https://games-world.herokuapp.com/games/' + post._id;
        editButton.addEventListener('click', handleEdit);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.gameid = 'https://games-world.herokuapp.com/games/' + post._id;
        deleteButton.addEventListener('click', handleDelete);

        document.body.append(title, editButton, deleteButton, image, description);

    }
}

function handleEdit(e) {
    fetch(e.target.gameid, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=EA SPORTS™ FIFA 18'
    })
    
}

function handleDelete(e) {
    fetch(e.target.gameid, {
        method: 'DELETE'
    })
}

const view = new PostDetailsView();
view.displayPost();