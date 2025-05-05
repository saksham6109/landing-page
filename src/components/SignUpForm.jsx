import React from "react";
import IPField from "./IPField";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import PopupModal from "./PopUpModal";
import { useState } from "react";

const SignUpForm = ({ onSwitch }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
  
    const showModal = (message) => {
      setModalMessage(message);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };


  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .max(20, ""),
      email: Yup.string()
        .matches(emailRegex, "Invalid Email")
        .required("Required"),
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character"
        )
        .required("Required"),
      confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password do not match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      
      if (existingUsers.some((user) => user.email === values.email)) {
        showModal("User already exists. You can log in.");
        return;
      }

      existingUsers.push(values);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      showModal("Signup successful! Redirecting to login...");
      setTimeout(() => {
        onSwitch();
      }, 2000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="min-w-full max-w-sm mx-auto mt-10 md:mt-0">
    <div className="flex flex-col justify-center items-center space-y-4 pb-5">
      <h1 className="font-semibold text-3xl mt-2">Sign Up</h1>
      <p className="text-gray-700" >Create your account</p>
      <div className="min-w-full p-3 flex flex-col justify-center items-center">
      <div className="w-full">
        <IPField
          type="text"
          placeholder="Username"
          name="name"
          value={formik.values.name}
          onChange={(e) => {
            if (e.target.value.length <= 20) {
              formik.handleChange(e);
            }
          }}
          onBlur={formik.handleBlur}
        />
        <div className="min-h-[16px] text-xs text-red-500">
          {formik.touched.name && formik.errors.name && formik.errors.name}
        </div>
      </div>
      <div className="w-full">
        <IPField
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="min-h-[16px] text-xs text-red-500">
          {formik.touched.email && formik.errors.email && formik.errors.email}
        </div>
      </div>
      <div className="w-full">
        <IPField
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="min-h-[16px] text-xs text-red-500">
          {formik.touched.password && formik.errors.password && formik.errors.password}
        </div>
      </div>
      <div className="w-full">
        <IPField
          type="password"
          placeholder="Confirm Password"
          name="confPassword"
          value={formik.values.confPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="min-h-[16px] text-xs text-red-500">
          {formik.touched.confPassword && formik.errors.confPassword && formik.errors.confPassword}
        </div>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
        <Button text="Sign Up" type="submit" />
        <p>or</p>
        <Button text="Sign In with Google" isGoogle />
      </div>
      <p className="md:my-2 mb-15 mt-5 text-gray-700 text-sm">
        Already have an account?{" "}
        <span className="text-[#9c28b1] cursor-pointer" onClick={onSwitch}>
          Login
        </span>
      </p>
    </div>
    {isModalOpen && <PopupModal message={modalMessage} onClose={closeModal} />}
  </form>
  );
};

export default SignUpForm;





