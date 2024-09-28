import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: [true,"Please provide a First Name"],
    },
    lastName:{
        type: String,
        required: [true,"Please provide a Last Name"],
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
const User= mongoose.models.users || mongoose.model("users",userSchema);
export default User;