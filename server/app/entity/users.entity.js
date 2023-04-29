import mongoose from 'mongoose';

export default mongoose.model('users', new mongoose.Schema({
     email: String,
     password: String
}, {
     timestamps: true
}));