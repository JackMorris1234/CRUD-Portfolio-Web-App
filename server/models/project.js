const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const url = process.env.DATABASE_URL

console.log('connecting to', url)
console.log('url is', url)
mongoose.connect(url, { family: 4 })

  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

function validator(val){
  console.log('within validator')
  const parts=val.split('-')
  console.log('parts[0] ', parts[0], ' length ',parts[0].length)
  console.log('parts[1] ' , parts[1], ' length ',parts[1].length)
  if(parts.length!==2){
    return false
  }else if(parts[0].length<2||parts[0].length>3){
    return false
  }
  return !/\D/.test(parts[0]) && !/\D/.test(parts[1])
}


const projectSchema = new mongoose.Schema({
  Title:String,
  body:String,
  Goal:String,
  Outcomes:String,
  card_blurb:String,
  github:String,
  id:String
})

projectSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Project', projectSchema)