import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
 import * as api from '../api';
 export const add=createAsyncThunk('datared/add',async(poste)=>{
  try{
    console.log(poste)
    const res =await api.postdata(poste);
    console.log(res.data);
    console.log("b");
    return res.data;
   // const data=await res.json();
  }catch(error){
    console.log(error)}
})
const fetch=createAsyncThunk('datared/fetch',async(args,thunkAPI)=>{
  try{
    const res=await api.fetchpost();
   // const data=await res.json();
    return res.data;
  }catch(error){
    console.log(error)}
})
export const dataSlice = createSlice({
  name: 'datared',
  initialState:{
    data:[]
},
reducers:{},
    extraReducers:{
      [fetch.fulfilled]:(state,action)=>{
        state.data=action.payload
      },
      [add.fulfilled]:(state,action)=>{
        console.log(state)
        state.data= [...state.data,action.payload]
       }
    },
  
});
export { fetch};
export const {fetch_all,post} = dataSlice.actions

export default dataSlice.reducer;