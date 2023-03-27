import mongoose from 'mongoose'
import * as dotenv from "dotenv";


dotenv.config();
// Local database connection
/*
mongoose.connect('mongodb://localhost:27017/convin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
     console.log("DB Connected")
}); 
*/
// `mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.nalllch.mongodb.net/?retryWrites=true&w=majority`
// Mongodb connection

mongoose.connect( `mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.nalllch.mongodb.net/convindata?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log("DB Connected")
}); 