import axios from 'axios'

var serverUrl = 'http://yelp.sherydev.com:3000/api/'
// var serverUrl = 'http://localhost:3000/api/'

export default function query(url, body={}) {
    return axios.post(serverUrl + url, body);
}