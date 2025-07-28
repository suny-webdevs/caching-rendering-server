import express, { Application, Request, Response } from "express"
import cors from "cors"
import { Bike } from "./app/modules/bikes/bike.model"

const app: Application = express()

app.use(express.json())
app.use(cors({ origin: ["http://localhost:3000"] }))

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Welcome to caching and rendering server",
  })
})

// APIs
app.post("/api/bikes", async (req: Request, res: Response) => {
  try {
    const data = await Bike.create(req.body)
    res.json({ success: true, message: "Bike created successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Something went wrong", error })
  }
})

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

export default app
