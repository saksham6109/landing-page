import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IPField from "./IPField";
import Button from "./Button";
import PopupModal from "./PopUpModal";
import { useState } from "react";

const LoginForm = ({ onSwitch, onLoginSuccess }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.name === values.username && u.password === values.password
      );

      if (user) {
        localStorage.setItem("username", user.name); 
        onLoginSuccess();
      } else {
        showModal("Invalid username or password");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit} 
      className="w-full flex flex-col justify-center items-center space-y-6 mt-20 md:mt-0 "
    >
      <div className="flex flex-col justify-center items-center md:mb-20 mb-10">
        <h1 className="text-3xl font-bold mt-2">Welcome Back</h1>
        <p className="text-xs ">Enter your credentials to login</p>
      </div>
      <div className="min-w-full flex flex-col justify-center items-center p-3 ">
        <div className="w-full">
          <IPField
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="min-h-[16px] text-xs text-red-500">
            {formik.touched.username &&
              formik.errors.username &&
              formik.errors.username}
          </div>
        </div>
        <div className="w-full">
          <IPField
            placeholder="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="min-h-[16px] text-xs text-red-500">
            {formik.touched.password &&
              formik.errors.password &&
              formik.errors.password}
          </div>
        </div>
        <Button text="Login" type="submit" />
      </div>
      <p className="my-8 text-[#9c28b1]">Forgot password?</p>
      <p className="md:my-8 my-9 mb-19 text-sm text-gray-700">
        Don't have an account? {" "}
        <span className="text-[#9c28b1] cursor-pointer" onClick={onSwitch}>
          Sign Up
        </span>
      </p>
      {isModalOpen && <PopupModal message={modalMessage} onClose={closeModal} />}
    </form>
    
  );
};

export default LoginForm;






