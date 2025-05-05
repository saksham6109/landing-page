import React, { useState } from "react";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

const IPField = ({ type = "text", name, placeholder, value, onChange, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getIcon = (placeholder) => {
    switch (placeholder.trim()) {
      case "Username":
        return <FaUser className="text-gray-500" />;
      case "Email":
        return <FaEnvelope className="text-gray-500" />;
      case "Password":
      case "Confirm Password":
        return <MdOutlinePassword className="text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center w-full p-2 rounded-2xl bg-[#f0e4f2] relative">
      <span className="px-2">{getIcon(placeholder)}</span>
      <input
        type={type === "password" && !showPassword ? "password" : "text"}
        name={name}  
        placeholder={placeholder}
        value={value}
        onChange={onChange}  
        onBlur={onBlur}
        className="w-full p-2 bg-transparent focus:outline-none placeholder-gray-500 placeholder:text-[14px]"
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 text-gray-500 focus:outline-none"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
};

export default IPField;
