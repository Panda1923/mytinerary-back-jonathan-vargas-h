import { Router } from "express";
import usersRouter from './cities.js'

const routerIndex = Router()

routerIndex.use('/cities', usersRouter)

export default routerIndex