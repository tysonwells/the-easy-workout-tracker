import { Exercise } from '../models/exercise.js'

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
  console.log('Working!')
}

function newExercise(req,res) {
  res.render('exercises/new', {
    title: 'New Exercies'
  })  
}


export {
index,
show,
newExercise as new,
create,
}