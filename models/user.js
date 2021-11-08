import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
  exercisename: String,
  group: String,
}, {
  timestamps: true,
})


const userSchema = new mongoose.Schema(
  {
    email: String,
    googleId: String,
    profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export {
  User
}
