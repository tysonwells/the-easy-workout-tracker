import mongoose from 'mongoose'


const exerciseSchema = new mongoose.Schema({
  name: String,
  category: String,
  equipment: String,
  detail: String,
}, {
  timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export {
  Exercise
}