import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log("Received request body:", reqBody); // Log the request body

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            console.log("User already exists"); // Log user existence
            return NextResponse.json({ error: "User Already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email: email.trim().toLowerCase(), // Normalize email
            password: hashedPassword,
            isVerified: true,
            isAdmin: false,
        });

        const savedUser = await newUser.save();
        console.log("User saved to DB:", savedUser); // Log saved user details

        // Create a unique collection for the user
        const userWasteCollection = mongoose.connection.collection(`${username}_waste_records`);
        // The collection is created when you attempt to access it
        // This line ensures that the collection exists without inserting any documents
        await userWasteCollection.createIndex({ _id: 1 });

        // Respond with success message
        return NextResponse.json({
            message: "User Registration Successful",
            success: true,
            savedUser,
        });
    } catch (error: any) {
        console.error("Error in signup process:", error); // Log the error
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
