import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Login");
  };

  const storage = {
    name: "",
    email: "",
    password: "",
    strongpassword: "",
  };
  const [user, setUser] = useState(storage);

  const schema = yup.object().shape({
    name: yup.string().min(4).max(15).required("Name Field Is Empty"),
    email: yup.string().email().required("Email Field Is Empty"),
    password: yup
      .string()
      .min(8, "Enter Mininmum 8 Letters")
      .max(15)
      .matches(/[a-z]/, "Password Must Contain At Least One Lowercase Letter")
      .matches(/[A-Z]/, "Password Must Contain At Least One Uppercase Letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Password Field Is Empty"),
    strongpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Must Same")
      .required("Enter The Re-Password"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    try {
      axios
        .post("http://localhost:9000/signin", data)
        .then((response) => {
          alert(response.data.message);
          console.log(response.data.message);
          navigate("/Login");
          // reset();
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="pt-10 pb-10 bg-slate-950">
      <div className="border w-3/12 mx-auto rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl pt-2 font-bold text-white">Sign up</h1>
        </div>

        <div className="text-center mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              className="pl-2 mx-auto w-11/12 mt-4 border py-2 rounded-lg"
              placeholder="Enter Your Name"
              {...register("name")}
            />
            <p className="text-left ml-5 text-red-600 h-7">
              {errors.name?.message}
            </p>

            <input
              type="email"
              name="email"
              className="pl-2 mx-auto w-11/12 mt-1 border py-2 rounded-lg"
              placeholder="Enter Your Email"
              {...register("email")}
            />
            <p className="text-left ml-5 text-red-600 h-7">
              {errors.email?.message}
            </p>

            <input
              type="password"
              name="password"
              className="pl-2 mx-auto w-11/12 mt-1 border py-2 rounded-lg"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            <p className="text-left ml-5 text-red-600 h-7">
              {errors.password?.message}
            </p>

            <input
              type="password"
              name="strongpassword"
              className="pl-2 mx-auto w-11/12 mt-1 border py-2 rounded-lg"
              placeholder="Enter Re-Password"
              {...register("strongpassword")}
            />
            <p className="text-left ml-5 text-red-600 h-7">
              {errors.strongpassword?.message}
            </p>
            <input
              type="submit"
              className="pl-2 mx-auto w-11/12 mt-1 border py-2 rounded-lg bg-lime-600 text-gray-50"
            />
          </form>
        </div>
        <div className="text-center pt-2 pb-2 border mt-2">
          <button
            className="px-3 py-2 bg-blue-700 text-white rounded-2xl w-8/12"
            onClick={handleNavigate}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
