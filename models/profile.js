import mongoose from 'mongoose'


const workoutSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ['Back Workout', 'Leg Workout', 'Arm Workout']
  },


  day: {
    type: Date,
    default: new Date()
  },
exercises: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]
}, {
  timestamps: true
})




const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  workouts: [workoutSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}