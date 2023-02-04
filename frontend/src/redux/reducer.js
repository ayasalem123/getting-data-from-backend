import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
 import * as api from '../api';
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
       return action.payload
      }
    },
  
});
export { fetch};
export const {fetch_all,post} = dataSlice.actions

export default dataSlice.reducer;