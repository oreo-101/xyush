
import axios from 'axios'

const DEV_SERVER = "https://localhost:8080";
const DEMO_SERVER = "https://97.120.189.106:8080";
// override
const USE_DEV = true;
const baseURL = process.env.NODE_ENV !== "production" && USE_DEV ? DEV_SERVER : DEMO_SERVER;
const ax = axios.create({ baseURL });

export default ax;
