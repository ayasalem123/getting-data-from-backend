import axios from'axios'
export const fetchpost=()=>{
    return axios.get("http://localhost:500/api")
}
export const postdata=(d)=>axios.post("http://localhost:500/post",d)