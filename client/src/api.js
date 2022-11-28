import axios from 'axios';
const url = "/api/post";

export default class API {
    //to get all the post from the server
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data;
    }
    // to get single post by id
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    
    
     // to get single post by id
     static async getAPI(id){
        const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${id}`);
        console.log(res.data.data);
        return res.data.data;
    }


    // to insert post into database
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }
    // to update post into database
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    // to delete a post
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}