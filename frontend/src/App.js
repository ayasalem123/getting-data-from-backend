import './App.css';
import  {fetch_all} from './redux/reducer'
 import { useEffect } from 'react';
 import {fetch}from './redux/reducer.js'
import { useSelector, useDispatch } from 'react-redux'
import * as api from './api';   
function App() {
  const {data} = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetch());
  },[dispatch]);
  return (
    <div className="App">
      {
       data.length?data.map((el)=>{
        console.log(data)
        return <div>{el}</div>}):<div>hi</div>
      }
    </div>
  );
}

export default App;
