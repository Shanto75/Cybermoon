import axios from 'axios';
var  apiBaseUrl  = import.meta.env.VITE_API_BASE;
// var  apiBaseUrl  = 'http://localhost/cybermoon/wp-json/wp/v2';
// var  apiBaseUrl  = 'https://cybermoon.epizy.com/backend/wp-json/wp/v2';

export async function getCategories() {
    try {
        var  response = await axios.get(apiBaseUrl+'/categories');
        // return  JSON.stringify(response.data);
        return response.data.filter((data)=>{
            return data.name != 'Uncategorized';
        });
    } catch (error) {
        console.error(error);
    }
}

export async function getPosts() {
    try {
        var  response = await axios.get(apiBaseUrl+'/posts?_embed');
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

export async function getPostsById(id) {
    try {
        var  response = await axios.get(apiBaseUrl+'/posts?categories='+id+'&_embed');
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

export async function getPost(id) {
    try {
        var  response = await axios.get(apiBaseUrl+'/posts/'+id+'?_embed');
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

export async function getAboutPage() {
    try {
        var  response = await axios.get(apiBaseUrl+'/pages?search=About&per_page=1');
        return response.data[0];
    } catch (error) {
        console.error(error.message);
    }
}