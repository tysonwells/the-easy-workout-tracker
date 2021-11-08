import { Profile } from '../models/profile.js'

function index(req, res) {
Profile.find({})
.the(profiles => {
  res.render('profiles/index', {
    profiles,
    title: 'Exercise'
  })
})
.catch(err => {
  console.log(err)
  res.redirect(`/profiles/${req.user.profile._id}`)
})
}

function newExercise(req, res) {
  res.render('profiles/new')
}

export {
  index,
  newExercise as new,
}