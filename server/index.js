//imoport all dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

 const app = express();

 app.use('/posts',postRoutes)
app.use(bodyParser.json({limit: "30mb",extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended : true}));
app.use(cors());



const port = process.env.PORT || 5000;
mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology :true})
.then(() => app.listen(port,() => console.log(`Server running on port : ${port}`)))
.catch((error) => console.log(error.message))

