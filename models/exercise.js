import mongoose from 'mongoose'

const Schema = mongoose.Schema


const exerciseSchema = new Schema({
  name: String,
  category: String,
  equipment: String,
  detail: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export {
  Exercise
}