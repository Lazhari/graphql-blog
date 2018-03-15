import mongoose from 'mongoose';

var attendeeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    summary: {
        type: String,
    },
});

export default mongoose.model('User', attendeeSchema);
