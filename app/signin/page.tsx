"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { Button } from "@/components/button";

export default function signin() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <>
            <div className="signUpWrapper">
                <div className="formWrapper">
                    <div className="left mb-6">
                        <h3 className="title">Welcome Back!</h3>
                        <p className='text-sm text-center mb-4'>Access your profile to stay connected with Eco-Dex.</p>
                        <Link href={"/signup"}>
                            <Button className='border-zinc-500 mt-4 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8'>Sign Up</Button>
                        </Link>
                    </div>
                    <div className="right flex flex-col justify-center items-center text">
                        <div className="flex items-center border-gray-300 pb-4">
                            <Image src="/icons/logo_main.svg" width={50} height={50} alt="logo" />
                            <span className="ml-2 text-2xl font-stacker font-bold">Eco-Dex</span>
                        </div>
                        <h3 className='text-center text-2xl font-poppins font-semibold mb-4'>{loading ? "Processing" : "Signin"}</h3>

                        {/* Adjusted email label */}
                        <label htmlFor="email" className="mb-1 ml-1">Email</label>
                        <input
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="username"
                        />

                        {/* Adjusted password label */}
                        <label htmlFor="password" className="mb-1 ml-1">Password</label>
                        <input
                            className="space-y-0 mb-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="password"
                        />

                        <Button type="submit" onClick={onLogin} className='w-full'>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
