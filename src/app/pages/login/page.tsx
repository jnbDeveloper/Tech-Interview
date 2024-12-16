"use client"
import Link from "next/link";
import React, { useState } from 'react'

const Login = () => {
    const [formData , setFormData] = useState<any>({})
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-xl md: rounded-2x1 p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-blac">
        <h2 className="font-bold text-center">Login Form</h2>

        <p className="font-thin text-center">Please fill all necessary infomation</p>

        <form action="" className="my-5">
            <label  htmlFor="email">E-Mail : </label>
            <input  id="email"
                    placeholder="abcd123@email.com"
                    type="email"
                    name="email"
                    className="mt-3 mb-3 w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2"
            />
            <label htmlFor="password">Enter Your Password : </label>
            <input  id="password"
                    type="password"
                    placeholder="*****************"
                    name="password"
                    className="mt-3 mb-3 w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
                className="bg-red-500 text-white block w-full rounded-md h-10 font-medium mb-3 font-medium">
                Log-In &rarr;
            </ button>

            <p className="mt-3">Don't Have An Account ? <Link href="/register">Sign Up</Link></p>
        </form>
        <hr className="h-0.5 bg-black w-auto mb-5" />
        <section>
            <div>
                <form action="" className="">
                    <button className="bg-gray-300 text-black block w-full rounded-md h-10 font-medium mb-3">
                        Continue with Git Hub
                    </button>
                    <button className="bg-gray-300 text-black block w-full rounded-md h-10 font-medium mb-3">
                        Continue with Google
                    </button>
                    <button className="bg-gray-300 text-black block w-full rounded-md h-10 font-medium mb-3">
                        Continue with Apple
                    </button>
                </form>
            </div>
            <div>
            <button
                className="bg-red-500 text-white block w-full rounded-md h-10 font-medium mb-3 font-medium">
                Sign Up &rarr;
            </ button>
            </div>
        </section>
    </div>
  )
}

export default Login