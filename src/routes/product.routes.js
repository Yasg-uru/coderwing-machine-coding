import {Router} from "express";
import { addProduct, getAllProducts , addProductToCart, removeCarts} from "../controllers/product.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const productRouter = Router();
productRouter.post('/create', addProduct);
productRouter.post("/cart", authMiddleware, addProductToCart);
productRouter.get("/all",getAllProducts);
productRouter.delete("/delete/:id", authMiddleware, removeCarts);

export default productRouter;
