const express = require("express");

const app = express();

app.use((req, res, next)=>{
    console.log('First Middleware');
    next();
});

app.use((req, res, next)=>{
    res.send('Hello from express!');
});

module.exports = app;
app.get('/api/posts',(req, res)=>{
    /*const posts = [
        {
            title: "First Post from server",
            content: "First post content from server"
        },
        {
            title: "Second Post from server",
            content: "Second post content from server"
        },
        {
            title: "Third Post from server",
            content: "Third post content from server"
        }
    ]*/
    //res.send("Hello from improved server!");
    post.find().then(documents => {
        res.status(200).json({
            message: "Posts received successfully",
            posts: documents
        });
    });
   
});


app.post('/api/posts',(req, res)=>{
    //const post = req.body;
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log('*******Post Received', post);
    
    /*post.save();
    res.status(201).json({
        message:"Posts stored successfully"
    });*/

    post.save().then(createdPost => {
        res.status(201).json({
          message: "Post added successfully",
          postId: createdPost._id
        });
      });

});