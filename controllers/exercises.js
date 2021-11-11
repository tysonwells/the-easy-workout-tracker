import e from 'express'
import { Exercise } from '../models/exercise.js'

function newExercise(req, res) {
  res.render("exercises/new", {
    title: "New Exercise"
  })
}

function index(req, res){
  console.log('It works!')
  Exercise.find({})
  .then(exercises => {
    res.render('exercises/index', {
      title: 'Excercises', 
      exercises
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Exercise.create(req.body)
  .then(exercise => {
    res.redirect('/exercises')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises')
  })
}

function show(req, res) {
  Exercise.findById(req.params.id)
  .populate('owner')
  .then(exercise => {
    res.render('exercises/show', {
      exercise,
      title: 'show'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises')
  })
}

function deleteExercise(req, res) {
  console.log("deleting Exercise: ", req.params.id)
  Exercise.findByIdAndDelete(req.params.id, function(err, exercise) {
    console.log(exercise)
    res.redirect("/exercises")
  })
}

function edit(req, res) {
  console.log('Edit works')
  Exercise.findById(req.params.id)
  .then(exercise => {
    res.render('exercises/edit', {
      exercise,
      title: "Edit Exercise"
    })
  })
  
}

function update(req, res) {
  console.log('updated')
  Exercise.findById(req.params.id)
  .then(exercise => {
  exercise.updateOne(req.body)
  .then(() => {
    res.redirect(`/exercises/${exercise._id}`)
  })
  })
}

export {
newExercise as new,
index,
show,
create,
deleteExercise as delete,
edit,
update,
}