import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message :"unauthorized user"
            })
        }
        const decodedData =  jwt.verify(token , process.env.JWT_SECRET );
        req.user= decodedData;
        next();

    } catch (error) {
        
        res.status(500).json({
            message : "internal server error while authorizing user"
        })
    }
}