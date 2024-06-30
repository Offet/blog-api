import { Schema, model, Types } from "mongoose";

//  define the schema from the blog. refer to workspace.txt
const blogSchema = new Schema({
    title: {type: String, required: true},
    authorUsername: {type: String, required: true},
    content: {type: String, required: true},
    datePublished: {type: Date, default: Date.now()},
    summary: {type: String},
    image: {type: String}
    /* ignoring the created at and updatedAt because of the timestamp feature*/
},{
    timestamps: true
});

//  export the blog model
export const blogModel = model("Blog", blogSchema);


