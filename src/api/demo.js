import axios from '@/http/http';

// export function fetchPermission() {
//     return axios.get('/user/info')
// }


export function getTable(data) {
    return axios.post('/api/statement/findAmountMaster/', data)
}
