const express = require('express');
require('./db/mongoose');
const blogRouter = require('./router/blogs');
const userRouter = require('./router/user');
const path = require('path');
const imagesPath = path.join(__dirname,'../images');
const app = express();

app.use(express.static(imagesPath));
app.use(express.json());
app.use(blogRouter);
app.use(userRouter);

app.listen(process.env.PORT,() => {
    console.log('Server started on port 4000');
})