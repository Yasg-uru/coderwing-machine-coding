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
const productModel = mongoose.model("product", productSchema);
export default productModel;
