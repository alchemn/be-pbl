import 'dotenv/config'
import express from  'express'
import cors from 'cors'
import siswaRoute from './router/siswa.route.js'

const port = process.env.PORT


const app = express()


app.use(cors())
app.use(express.json())


app.use("/api/v1",(req,res) => (res.status(201).json({running: "Sukses"})))

app.use("/siswa", siswaRoute)

app.listen(port,() => {
    console.log(`Server running on ${port}`)
})

