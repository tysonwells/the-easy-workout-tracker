import mongoose from 'mongoose'

const Schema = mongoose.Schema


const exerciseSchema = new Schema({
  name: String,
  category: String,
  equipment: String,
  detail: String,
  set: Number,
  weight: Number,
  notes: String,
  date: {type: Date, default: Date.now},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export {
  Exercise
}