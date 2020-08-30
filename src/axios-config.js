import axios from 'axios';

export const instance = axios.create({
    baseURL: "https://burger-builder-d0787.firebaseio.com/"
})

