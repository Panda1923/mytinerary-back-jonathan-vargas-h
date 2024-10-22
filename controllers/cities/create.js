import User from "../../models/City.js";

let create = async (req,res,next) =>{
    try {
        let user = req.body
        let all = await User.create(city)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create}