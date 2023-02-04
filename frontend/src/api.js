import axios from'axios'
export const fetchpost=()=>{
    return axios.get("http://localhost:500/api")
}