import * as mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/sdc', {
    useNewUrlParser: true,
    useCreateIndex: true
})

require("./models/Article")
