export default class InstaService {

    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    // Строчная функция, чтобы не терять контекст (для много this без потери фокуса)
    getResource = async (url) => {
       const res = await fetch(`${this._apiBase}${url}`);

       if (!res.ok) {
           throw new Error(`Could not fetch ${url}, recieve ${res.status}`);
       } 

       return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        { console.log("getAllPosts class") }
        { console.log(res) }
        return res;
    }
}