import bodyParser from 'body-parser'  //used to send post requests
import cors from 'cors' //cross origine request 
import express from 'express' 
import mongoose from 'mongoose'
import blogRoutes from './routs/blog.js'

const app= express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/blogs',blogRoutes);
const CONNECTION_URL="mongodb+srv://riad:lord2001@nodetutu.q1rzj.mongodb.net/blogs?retryWrites=true&w=majority"
const PORT =process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>app.listen(PORT)).catch((err)=>console.log(err))