import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please provide a Username"],
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password:{
        type: String,
        required:[true,"Please provide a password"],
    },
    isVerified:{
        type: Boolean,
        default: true,
    },
    isAdmin:{
        type: Boolean,
        default: true,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})
const User= mongoose.models.User || mongoose.model("User",userSchema);
export default User;