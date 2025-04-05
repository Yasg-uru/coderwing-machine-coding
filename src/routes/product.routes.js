import {Router} from "express";
import { addProduct, getAllProducts , addProductToCart} from "../controllers/product.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const productRouter = Router();
productRouter.post('/create', addProduct);
productRouter.post("/cart", authMiddleware, addProductToCart);
productRouter.get("/all",getAllProducts);

export default productRouter;
