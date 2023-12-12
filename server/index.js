const express = require('express');
const db = require('./database/index.js')
const cors = require('cors');
// const userRoute = require('./routes/users.js')
// const catRoute = require('./routes/categories.js')
// const postRoute = require('./routes/posts.js')

const port = process.env.port || 3000
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + "/../client/dist"));

// middleware for routes //
// app.use("/api/users",userRoute)
// app.use("/api/categories",catRoute)
// app.use("/api/posts",postRoute)





app.listen(port,()=>{console.log(`This server is listening on port : ${port}`)})