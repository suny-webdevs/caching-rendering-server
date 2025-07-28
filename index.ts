import express, { Application, Request, Response } from "express"
import cors from "cors"
import config from "./config"
import mongoose from "mongoose"
import { Bike } from "./modules/bikes/bike.model"
import { Server } from "http"

const app: Application = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Welcome to caching and rendering server",
  })
})

// APIs
app.get("/api/bikes", async (req: Request, res: Response) => {
  try {
    const data = await Bike.find()
    res.json({ success: true, message: "Bikes are fetched successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Something went wrong", error })
  }
})

app.get("/api/bikes/:id", async (req: Request, res: Response) => {
  try {
    const data = await Bike.findById(req.params.id)
    res.json({ success: true, message: "Bike fetched successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Something went wrong", error })
  }
})

// Server
let server: Server

async function main() {
  try {
    await mongoose.connect(config.mongodb_uri as string)

    server = app.listen(config.port, () => {
      console.log(`Server is live on http://localhost:${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
