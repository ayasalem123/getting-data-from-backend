import express from'express';
import post from '../model/model.js'
var router = express.Router();
const run=async function(){
var arrayOfPeople=[{name:"amira" ,age:18, favoriteFoods:["coke"]},{name:"ahmed" ,age:25, favoriteFoods:["pizza","burritos","noodles"]}]
await post.create(arrayOfPeople)}
//run()
router.get('/api',async  function (req, res) {
    const data= await post.find({});
    res.send(data);

 })
export default router;