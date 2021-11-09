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




export {
index,
show,
create,
}