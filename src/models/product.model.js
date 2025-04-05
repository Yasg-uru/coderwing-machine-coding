import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    productName :
    {
        type:String ,
        required:true 
    },
    productUrl : {
        type:String ,
        required:true ,

    },
    price:{
        type:Number ,
        required:true,

    },

});
const productModel = mongoose.model("Productmodel", productSchema);
export default productModel;
