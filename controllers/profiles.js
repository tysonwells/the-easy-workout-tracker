import { Profile } from '../models/profile.js'
import { Exercise } from '../models/exercise.js'

function index(req, res) {
  console.log(req.user)
Profile.find({})
.then(profiles => {
  res.render('profiles/index', {
    profiles,
    title: 'Exercise',
    })
})
.catch(err => {
  console.log(err)
  res.redirect(`/`)
})
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        profile,
        title: `${profile.name}'s profile`,
        self,
        isSelf,
        })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function createExercise(req, res) {
  console.log('REQ.BODY', req.body)
  console.log('PROFILE ID',req.user.profile._id)
}

function createWorkout(req, res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    console.log(profile)
    console.log(req.body)
    profile.workouts.push(req.body)
    profile.save().then(function() {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
}

function showWorkout(req, res) {
  console.log('show workout')
  console.log(req.params.profileId)
  console.log(req.params.workoutId)
  Profile.findById(req.params.profileId)
  .then((profile) => {
    const myWorkout = profile.workouts.find(workout => {
      return workout._id.equals(req.params.workoutId)
    })
  Exercise.find({}).then(function(exercises) {
    res.render('profiles/workout',{
      workout:myWorkout,
      title: 'Workout',
      exercises: exercises
    })

  })
  }) 
  

}

export {
  index,
  show,
  createExercise,
  createWorkout,
  showWorkout
}