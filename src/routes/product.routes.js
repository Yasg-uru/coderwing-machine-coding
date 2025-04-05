import {Router} from "express";
import { addProduct, getAllProducts , addProductToCart} from "../controllers/product.controller.js";
const productRouter = Router();
productRouter.post('/create', addProduct);
productRouter.post("/cart/:id", addProductToCart);
productRouter.get("/all", getAllProducts);

export default productRouter;
