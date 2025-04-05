import Product from '../models/product.model.js';
import usermodel from '../models/user.model.js';

export const addProduct = async ( req  , res )=>{
    try {
        const {productName , productUrl, price} = req.body;
        const newProduct  = await Product.create({
            productName ,
            productUrl ,
            price
        });
        res.status(201).json({
            message :"product created successfully",
            product:newProduct
        })
    } catch (error) {
        res.status(500).json({
            message : "internal server error while adding product"
        })
    }
}
export const getAllProducts = async (req, res)=>{
    try {
        const products = await Product.find({});;
        res.status(200).json({
            message : "all products fetched successfully",
            products
        })
    } catch (error) {
        res.status(500).json({
            message :"internal server error",
        })
    }
}
export const addProductToCart= async (req , res)=>{
    try {
        const productId = req.body.id;
        const userId = req.user.id;
        const user= await usermodel.findById(userId);
        if(!user){
            return res.status(404).json({
                message :"user not found "
            })
        }
        user.carts.push(productId);
        res.status(200).json({
            message :"product added to cart successfully"
            ,
            user
        })
    } catch (error) {
        console.log("this is error", error)
        res.status(500).json({
            message : "internal server error while adding product to cart"
        })
    }
}