import mongoose,  { model, Schema } from "mongoose";

const userSchema = new Schema({
    username : {
        type:String ,
        required:true
    },
    email:{
        type:String ,
        required:true ,
        unique:true
    },
    password:{
        type:String ,
        required:true ,

    },
    carts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Productmodel"
        }
    ]
});
const usermodel = model("UserModel",userSchema);
export default usermodel;
