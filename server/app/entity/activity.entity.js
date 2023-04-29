import mongoose from "mongoose";

export default mongoose.model('activities', new mongoose.Schema({
     name: String,
     date: Date,
     start_time: String,
     end_time: String,
}, {
     timestamps: true
}))