"use client"
import Buttons from "@/components/Buttons";
import Input from "@/components/Input";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-screen">
      <div className="w-[40%] h-auto mx-auto my-auto max-h-[60%] pt-[2%] pb-[10%]">
        <h2 className="text-black font-bold text-2xl text-center py-5">
          Login
        </h2>
        <div className=" gap-5 space-y-10">
          <Input
            name="Email"
            label="Email"
            type="text"
            id=""
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            name="Password"
            label="Password"
            type="text"
            id=""
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="gap-3 mb-3">
          <div className="w-auto text-end">
            <Buttons
              text="Forget Password?"
              fontSize=""
              bgcolor="bg-none"
              textColor="text-orange-600"
            />
          </div>

          <Buttons
            text="Continue"
            fontSize=""
            textColor="text-white"
            textCenter
            onClick={handleLogin}
          />
          <ToastContainer />
        </div>
        <div className="space-y-3 mt-3">
          <Buttons
            fronticon="/facebook.png"
            text="Continue with Facebook"
            fontSize=""
            bgcolor="bg-none"
          />
          <Buttons
            fronticon="/apple.png"
            text="Continue with Apple"
            fontSize=""
            bgcolor="bg-none"
          />
          <Buttons
            fronticon="/google.png"
            text="Continue with Google"
            fontSize=""
            bgcolor="bg-none"
          />
        </div>
        <div className="w-auto text-end">
          <Buttons
            text="Don't you have account?"
            fontSize=""
            bgcolor="bg-none"
            textColor="text-orange-600"
          />
        </div>
        <Buttons
          text="Sign Up"
          fontSize=""
          textColor="text-white"
          textCenter={true}
        />
      </div>
    </div>
  );
};

export default Dashboard;
