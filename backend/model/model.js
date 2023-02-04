import mongoose from 'mongoose';
var Schema = mongoose.Schema
const postSchema = new Schema({
    name :
    { type:String,
      required:true,
    },
    content : String,
    favoriteFoods:[String],
    age:Number,
    });
const post = mongoose.model("post",postSchema);
export default post;