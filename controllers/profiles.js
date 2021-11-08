import { Profile } from '../models/profile.js'

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

// function createExercise(req, res) {
//   console.log(req.body)
  
  // Profile.findById(req.user.profile._id)
  // .then(profile => {
  //   profile.exercise.push(req.body)
  //   profile.save()
  //   .then(() => {
  //     res.redirect(`/profiles/${req.user.profile._id}`)
  //   })
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect(`/profiles/${req.user.profile._id}`)
  // })
// }

export {
  index,
  show,
  createExercise,
}