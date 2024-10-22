import User from "../../models/City.js";
import City from "../../models/City.js";

let allCity = async (req,res,next) => {
    try {
        let all = await  City.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

        
    }        
}

let cityBydescription =  async (req,res) => {
    try {
        console.log(req.params);
        
        let descriptionQuery = req.params.x
        let all = await  User.find({description : descriptionQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let cityById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let cityQuery = req.params.id
        let all = await  User.findById(cityQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}


export {allCity,cityBydescription,cityById} 