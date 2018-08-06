const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dbheroes', {useNewUrlParser: true})
    .then( () => console.log('MongoDB ready'))
    .catch( (err) => console.log(err) )
