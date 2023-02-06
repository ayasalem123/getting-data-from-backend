import './App.css';
import  {fetch_all} from './redux/reducer'
 import { useEffect,useState } from 'react';
 import {fetch,add}from './redux/reducer.js'
import { useSelector, useDispatch } from 'react-redux'
import * as api from './api';   
function App() {
  const [val, setVal] = useState({name:""});
  const myScript=  (event)=>{
    console.log(event.target.value)
 setVal(event.target.value)
  }
  const {data} = useSelector((state) => state.data)
  console.log(data)
  const dispatch = useDispatch()
  const click=()=>{
    dispatch(add({"name":"hameda"}));
  }
  useEffect(() => {
      dispatch(fetch());
      
  },[dispatch]);
  return (
    <div className="App">
       {data.length?data.map((el)=>{
        console.log(data)
        return <div>{el.name}</div>}):<div>hi</div>
      } 
      <input type="text" onChange={myScript}/>
      <button onClick={()=>{click()}}>OK</button>
    </div>
  );
}

export default App;
