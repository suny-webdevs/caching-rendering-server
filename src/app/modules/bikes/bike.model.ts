import { model, Schema } from "mongoose"
import { BikeType } from "./bike.type"

const bikeSchema = new Schema<BikeType>(
  {
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    category: { type: String, required: [true, "Category is required"] },
    price: { type: Number, required: [true, "Price is required"] },
  },
  { timestamps: true }
)

export const Bike = model<BikeType>("Bike", bikeSchema)
