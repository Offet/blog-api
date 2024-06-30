// importing router to create blog routes
import { Router } from "express";
import { deleteblog, getBlogs, postBlogs, updateBlog } from "../controller/controller_blog.js";

//  instantiate router
const blogRouter = Router();

blogRouter.get("/blogs", getBlogs);

blogRouter.post("/blogs", postBlogs);

blogRouter.post("/blogs/:id", updateBlog);

blogRouter.post("/blogs/:id", deleteblog);


export default blogRouter;