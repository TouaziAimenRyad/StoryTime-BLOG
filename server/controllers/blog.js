// this is used to make the .get methods call back function to make it easier to work with routers
import BlogMessage from '../models/blog.js'
import mongoose from 'mongoose'

export const getBlogs=/*async*/ (req,res)=>{ //this is not accessed by going to localhost/ but by going to localhost/posts/ see in the index where we called it 
    //res.send('this works')
    
    BlogMessage.find().then((result)=>{ // this is the short way if u use the short way you dont need async
        res.status(200).json(result)
        

    }).catch((err)=>{
        console.log(err)
    }) 
    /*try{
       const blog =await BlogMessage.find();
       res.status(200).json(blog);
    }catch(err){
        res.status(404).json({message:err.message});

    }*/
}




export const createBlog= /*async*/ (req,res)=>{
    //res.send('post creation');
    const blog = new BlogMessage(req.body); //the short version
    blog.save().then((result)=>{
        res.status(201).json(result)

    }).catch((err)=>{
        console.log(err)

    })

    /*blog=req.body;
    const newBlog= BlogMessage(blog);
    try{
        await newBlog.save();
        res.status(201).json(newBlog);
    }catch(err){
        res.status(409).json({message:err.message});

    }*/

}

export const addBlog = (req,res)=>{
    const blog= new BlogMessage({
      title:'new blog',
      snippet:'about blog',
      message:'more about blog'
  
    })
        //to save to the data base
    blog.save().then((result)=>{
      //res.send(result)
        res.status(201).json(result)
      
    }).catch((err)=>{
      console.log(err)
  
    })  

  }
