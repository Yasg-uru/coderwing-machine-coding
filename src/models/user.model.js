import { model, Schema } from "mongoose";

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
            type:Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
});
const usermodel = model("UserModel",userSchema);
export default usermodel;
