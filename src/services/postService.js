import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (pageParam = 1) => {
    const response = await axios.get(`${BASE_URL}/posts`, {
        params: { _page: pageParam, _limit: 10 },
    });
    return response.data;
};
