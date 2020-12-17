import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: false
    }
})
export default model('User', userSchema);
