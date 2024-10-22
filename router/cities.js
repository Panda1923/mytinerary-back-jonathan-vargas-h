import { Router } from "express";
import {allCity,cityBydescription,cityById}   from "../controllers/Cities/read.js";
import { create } from "../controllers/cities/create.js";

const routerCities = Router()

routerCities.get('/all', allCity)
routerCities.get('/description/:x',cityBydescription)
routerCities.get('/id/:id',cityById)
routerCities.post('/create',create)
routerCities.post('createAll',)

export default routerCities