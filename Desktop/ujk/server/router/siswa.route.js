import express from "express"
import { createSiswa, deleteSiswa, getSiswa, getSiswaById, updateSiswa } from "../controller/siswa.controller.js"


const siswaRoute = express.Router()


siswaRoute.get("/",getSiswa)
siswaRoute.get("/:id",getSiswaById)
siswaRoute.post("/",createSiswa)
siswaRoute.put("/:id",updateSiswa)
siswaRoute.delete("/:id",deleteSiswa)

export default siswaRoute