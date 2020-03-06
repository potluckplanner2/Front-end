import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log('token', token);

    return axios.create({
        baseURL: 'https://potluck-planner2.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}