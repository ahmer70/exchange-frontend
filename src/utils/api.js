import axios from 'axios';

//const baseUrl = 'http://localhost:81';
const baseUrl = 'http://3.134.91.43';
export default axios.create({
    baseURL: `${baseUrl}/api`
})