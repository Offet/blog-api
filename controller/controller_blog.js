//  import the model created from the recipe schema
import { blogModel } from "../model/model_blog.js";

export const getBlogs = async (req, res, next) => {
    try {
        //  get all models
        const allBlogs = await blogModel.find();
        //  return models
        res.json(allBlogs);
    } catch (error) {
        next(error);
    }
};


//  getting post endpoints
export const postBlogs = async (req, res, next) => {
    try {
        //  get all models
        const addedBlogs = await blogModel.create(req.body);
        //  return models
        res.status(200).send(addedBlogs);
    } catch (error) {
        next(error);
    }
};

// updating the blog
export const updateBlog = async (req, res, next) => {
    try {

        const titleChange = req.body.title; /* making updates to the blog title*/
        console.log("Changing title to ", titleChange)
        //  updating the blog
        const updatedBlogs = await blogModel.findByIdAndUpdate(req.params.id, {title: titleChange});
        //  return updated blog
        res.json(updatedBlogs);
    } catch (error) {
        next(error);
    }
};


//  deleting a particular blog
export const deleteblog = async (req, res, next) => {
    try {
        //  this seeks to delete the title from the db
        const deleteTitle = req.body.title;
        console.log("deleting ", deleteTitle);
        //  main code
        deletedBlog = await blogModel.findByIdAndDelete(req.params.id, {title: deleteTitle});
        res.json(deletedBlog);
    } catch (error) {
        next(error);
    }
};