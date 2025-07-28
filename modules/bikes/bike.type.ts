import { Types } from "mongoose"

export type BikeType = {
  _id?: Types.ObjectId
  title: string
  description: string
  category: string
  price: number
  createdAt?: Date
  updatedAt?: Date
}
