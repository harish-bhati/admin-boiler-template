import React from "react";
import { Logo1, WelcomeBanner } from "../assets/images";

const Login2 = () => {
  return (
    <section className="h-dvh flex">
      <div className="relative basis-1/2">
        <div className="bg-Login bg-no-repeat bg-cover bg-center h-lvh"></div>
        <div className="bg-[#3366ffe8] h-lvh absolute top-0 left-0 w-full px-24 py-10">
          <img className="w-[89px] h-[34px]" src={Logo1} alt="calender" />
          <div className="flex flex-col content-center  items-start justify-center h-[calc(100vh-74px)] font-latoB">
            <h1 className="text-[50px] text-blue-white font-latoB">Welcome Back!</h1>
            <p className="font-latoR text-blue-white">
              We are glad to see you again! Get access to your Orders, Wishlist
              and Recommendations.
            </p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 m-auto py-5 mx-24 border border-blue-border shadow rounded-lg p-5">
        <h1 className="font-latoB text-[24px] text-blue-label mb-3">Log In</h1>
        <form className="">
          <div className="flex flex-col gap-2 mb-3">
            <label
              className="text-[13px] font-Regular text-black-lighter "
              htmlFor=""
            >
              {" "}
              Email Address
            </label>
            <input
              className="input"
              type="text"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label
              className="text-[13px] font-Regular text-black-lighter "
              htmlFor=""
            >
              {" "}
              Password
            </label>
            <input
              className="input"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex justify-between text-[13px] mb-5">
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" />
              <span>Remember Me</span>
            </div>
            <a className="text-blue-link" href="">
              Forgot Password ?
            </a>
          </div>
          <button className="primary w-full " type="submit">
            {" "}
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login2;
