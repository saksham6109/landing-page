import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <div className="flex flex-col md:flex-row bg-white w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl shadow-gray-900/90 ">
        {/* Left Section */}
        <div className="md:w-1/2 bg-[#9c28b1] md:flex md:flex-col md:items-center md:justify-between md:pt-12 md:gap-6 md:p-5  text-white hidden">
          <div className="md:block font-bold text-xl  md:text-3xl md:mb-4">
            Welcome to My Page
          </div>
          <p className="hidden md:block text-center md:text-base">
            We specialize in creating excellent web and mobile applications that
            drive growth and innovation. From ideation to execution, our expert
            team delivers reflexive, high-performance solutions designed to meet
            your unique business necessities.
          </p>
          <div className="hidden md:block"></div>
           
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 md:p-10 flex flex-col justify-center  ">
          {isLogin ? (
            <LoginForm onSwitch={() => setIsLogin(false)} onLoginSuccess={() => navigate("/dashboard")} />
          ) : (
            <SignUpForm onSwitch={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
