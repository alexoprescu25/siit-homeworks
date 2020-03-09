class PostList {
    apiUrl = 'https://games-world.herokuapp.com/games';

    getAll() {
        return fetch(this.apiUrl).then((res) => res.json());
    }

    findById(_id) {
        return fetch(`${this.apiUrl}/${_id}`).then((res) => res.json());
    }
}