import axios from'axios'
export const fetchpost=()=>{
    return axios.get("http://localhost:500/api")
}
export const postdata=(d)=>axios.post("http://localhost:500/post",d);
export const modifypost=(id,val)=>axios.patch(`http://localhost:500/post/${id}`,val);
export const deletepost=(id)=>axios.delete(`http://localhost:500/delete/${id}`);