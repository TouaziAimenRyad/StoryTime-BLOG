import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    id:{
        type:Int16Array,
        required:true

    },
    title:String,
    snippet:String,
    message:String,
    selectedFile:String,
    
    createdAt:{
        type:Date,
        default:new Date()
    }
 
});

const BlogMessage=mongoose.model('BlogMessage',blogSchema);
export default BlogMessage;