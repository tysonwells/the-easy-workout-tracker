import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new mongoose.Schema({
  name: String,
}, {
  timestamps: true
})


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  exercises: [exerciseSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}