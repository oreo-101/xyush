
import axios from 'axios'

// local dev: http://localhost:8080
const baseURL = process.env.NODE_ENV !== "production" ? "https://localhost:8080" : "https://97.120.189.106:8080";
const ax = axios.create({ baseURL });

export default ax;
