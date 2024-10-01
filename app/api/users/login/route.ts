import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs';

// Ensure the database is connected
await connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Normalize email and password
        const trimmedEmail = email.trim().toLowerCase(); 
        const trimmedPassword = password.trim();

        console.log("Request body:", reqBody); // Log request body

        // Find the user by email
        const user = await User.findOne({ email: trimmedEmail }).exec(); // Added .exec() for better error handling
        console.log("User found:", user); // Log found user

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        // Check password
        const isMatch = await bcryptjs.compare(trimmedPassword, user.password);
        console.log("Password match:", isMatch); // Log password match result

        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
        }

        // Respond with success
        return NextResponse.json({
            message: "Login successful",
            success: true,
            user
        });
    } catch (error: any) {
        console.error("Login error:", error); // Log the error
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
