"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/button";
import Image from "next/image";



export default function signup() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/signin");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

  return (
    <>
        <div className="signUpWrapper">
            <div className="formWrapper">
                <div className="left">
                    <h3 className="title">Hey There!</h3>
                    <p>Sign up to unlock the full potential of RAG-ED.</p>
                    <Link href={"/signin"}>
                        <Button className='border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8'>Sign In</Button>
                    </Link>
                </div>
                <div className="right flex flex-col justify-center items-center">
                    <div className="flex items-center border-gray-300 pb-4">
                        <Image src="/icons/logo_main.svg" width={50} height={50} alt="logo" />
                        <span className="ml-2 text-2xl font-stacker font-bold" >Eco-Dex</span>
                    </div>
                    <h3 className='text-center text-2xl font-poppins font-semibold mb-4'>{loading ? "Processing" : "Register Here"}</h3>
                        <label htmlFor="username">Username</label>
                        <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        placeholder="username"
                        />
                        
                        <label htmlFor="email">Email</label>
                        <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        placeholder="email"
                        />
                        <label htmlFor="password">Password</label>
                        <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="password"
                        />
                        <Button type="submit" onClick={onSignup} className='w-full'>Submit</Button>
                </div>
            </div>
        </div>
    </>
  )
}
