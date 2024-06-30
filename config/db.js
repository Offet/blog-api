import mongoose from "mongoose";

//  importing dotenv/config
import "dotenv/config";

// assigning a variable to retrieve the value of my url
const mongoUri = process.env.Mongo_url

// exporting the env url to make it accessible to any file that wants to import it
export const dbConnection = async () => {
    try {
        await mongoose.connect(mongoUri).then(() => {
            console.log("Database is connected!");
        })
    } catch (error) {
        console.error("MongoDB connection error: ", error); /* this is to help identify any errors*/
        process.exit(1);
    }
};


//  exporting the the connection created
// export default dbConnection;
