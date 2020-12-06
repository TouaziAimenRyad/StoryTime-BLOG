import express from 'express'
import {getBlogs,createBlog ,addBlog} from '../controllers/blog.js'

const router=express.Router();

router.get('/',getBlogs);
router.post('/',createBlog)
router.get('/add-blog',addBlog);
export default router;
