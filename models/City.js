import {Schema,model} from "mongoose";

let collection = 'cities'
let schema = new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
},{
    timestamps:true
})

let City = model(collection,schema)
export default City