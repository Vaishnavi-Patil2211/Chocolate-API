const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get back all posts
router.get('/chocolates', async (req,res) => {
    try{

        const posts = await Post.find();
        res.json(posts);
    }catch(err){
       res.json({message:err}); 
    }
    
});

//submits a post
router.post('/chocolates', async (req,res) => {
   const post = new Post({
    title: req.body.title,
    description: req.body.description
   });
   try{
    const savedPost = await post.save();
   res.json(savedPost);
   }catch(err){
    res.json({message: err});
   }
});

//specific post
router.get('/chocolates', async (req,res) => {

    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});

    }
});

//delete post

router.delete('/chocolate/:Id', async (req,res) =>{
    try{
   const removedPost = await Post.remove({_Id: req.params.postId});
   res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});


//update a post

router.patch('/chocolate/:Id', async (req,res) => {
    try{
    const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {title:req.body.title}});
    res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }

})
module.exports = router;