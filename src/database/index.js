const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:8081/frontlink', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.Promise = global.Promise

module.exports = mongoose