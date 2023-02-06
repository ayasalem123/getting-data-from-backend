import express from'express';
import post from '../model/model.js'
import bodyParser  from 'body-parser'
var router = express.Router();
const run=async function(){
var arrayOfPeople=[{name:"amira" ,age:18, favoriteFoods:["coke"]},{name:"ahmed" ,age:25, favoriteFoods:["pizza","burritos","noodles"]}]
await post.create(arrayOfPeople)}
//run()
router.get('/api',async  function (req, res) {
    const data= await post.find({});
    res.send(data);
 })
 // parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());
 router.post('/post',async(req,res)=>{
    const {name,favoriteFoods,age}=req.body;
    const newpost= new post({name,favoriteFoods,age});
    try{
      await newpost.save();
      res.status(201).json(newpost );
    }catch(e){
      res.status(409).json({ message: error.message });
    }
    console.log(res.post)
 })

export default router;