import axios from "axios";

axios.defaults.baseURL = 'https://gamer-connect-api-692895d2a2be.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true