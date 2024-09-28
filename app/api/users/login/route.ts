import {connect} from "@/dbConfig/dbConfig"
import User from '@/models/userModel'
import { NextResponse,NextRequest } from "next/server"
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helper/mailer"
connect()

export async function POST(request: NextRequest){
    try {
        const reqBody=await request.json()
        const {firstName,lastName,email,password}=reqBody
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User Already exists"}{status:400})
        }
        const salt =await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt)
        const newUser= new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })
        const savedUser= await newUser.save()
        console.log(savedUser)

        await sendEmail({email,emailType: "VERIFY",userId: savedUser._id})
        return NextResponse.json({
            message: "User Registration Successfull",
            success: true,
            savedUser
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}