
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler' 

const protect = asyncHandler(async (req, res, next) => {
    let token

    // if(
    //     req.headers.authorization &&
    //     req.headers.authorization.startsWith('Bearer')
    //     ){
    //         try {
    //             token = req.headers.authorization.split(' ')[1]

    //             const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //             console.log(decoded) 

    //             console.log('token found!')

    //             req.user = await User.findById(decoded.id).select('-password -token')
                
    //             console.log(req.user) 
               
    //             //next()

    //         } catch (error) {
    //             console.error(error)
    //             res.status(401)
    //             throw new Error('Not authorized. Token failed') 
    //         }
    //     }

    //     if(!token){
    //        res.status(401)
    //        console.log('token NOT found!')
    //        throw new Error('Not authorised, Token not found') 
    //     }

    // next()
})

const protectDes = async (req, res, next) => {
    let token = ''

    next()
}

export {protect, protectDes}