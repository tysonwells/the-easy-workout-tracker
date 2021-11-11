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
  .populate('workouts.exercises')
  .then((profile) => {
    console.log(profile)
    const myWorkout = profile.workouts.find(workout => {
      return workout._id.equals(req.params.workoutId)
    })
  Exercise.find({}).then(function(exercises) {
    console.log('My Workout', myWorkout)
    res.render('profiles/workout',{
      workout:myWorkout,
      title: 'Workout',
      exercises: exercises
    })
  })
  }) 
}

function addExercise(req, res) {
  Profile.findById(req.params.profileId)
  .then((profile) => {
    const myWorkout = profile.workouts.find(workout => {
      return workout._id.equals(req.params.workoutId)
    })
    console.log(myWorkout)
    console.log('req.body',req.body)
    myWorkout.exercises.push(req.body.exerciseId)
  profile.save()
  .then(function() {
    res.redirect(`/profiles/${profile._id}/workouts/${myWorkout._id}`)
  })
  })
}

export {
  index,
  show,
  createExercise,
  createWorkout,
  showWorkout,
  addExercise,
}