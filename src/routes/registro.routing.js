import { Router } from "express";
import { getEmpresa,getPerson,getDatos } from "../controllers/regisrtro.js";

export const registro = Router()

registro.post("/getEmpresa", getEmpresa);
registro.post("/getPerson", getPerson);
registro.post("/getDatos", getDatos);
