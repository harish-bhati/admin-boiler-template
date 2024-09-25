import React from "react";
import { WelcomeBanner } from "../assets/images";

const Form = () => {
  return (
    <div className="text-[30px] font-latoB text-latoB first-letter p-4 bg-blue-bg">
      <h1 className="mb-3">Form Validation</h1>
      <div className="grid grid-cols-2 w-full gap-4">
        <div className="border rounded-2xl bg-white-light w-full">
          <h2 className="text-[14px] text-grey-dark p-4 border-b">On Submit</h2>
          <form className="px-4 py-4">
            <div className="flex flex-col gap-2 mb-3">
              <label
                className="text-[13px] font-Regular text-black-lighter "
                htmlFor=""
              >
                {" "}
                Email Address
              </label>
              <input
                className="text-[13px] font-Regular text-black-lighter border p-4 rounded-xl"
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
                className="text-[13px] font-Regular text-black-lighter border p-4 rounded-xl"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            <button
              className="bg-blue-primary text-blue-white hover:bg-blue-link px-3 py-2 text-[12px] rounded-xl self-end"
              type="submit"
            >
              {" "}
              Verify and Submit
            </button>
          </form>
        </div>
        <div className="border rounded-2xl bg-white-light w-full">
          <h2 className="text-[14px] text-grey-dark p-4 border-b">On Leave</h2>
          <form className="px-4 py-4">
            <div className="flex flex-col gap-2 mb-3">
              <label
                className="text-[13px] font-Regular text-black-lighter "
                htmlFor=""
              >
                {" "}
                Email Address
              </label>
              <input
                className="text-[13px] font-Regular text-black-lighter border p-4 rounded-xl"
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
                className="text-[13px] font-Regular text-black-lighter border p-4 rounded-xl"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            <button
              className="bg-blue-primary text-blue-white hover:bg-blue-link px-3 py-2 text-[12px] rounded-xl self-end"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
        <div className="border rounded-2xl bg-white-light w-full">
          <h2 className="text-[14px] text-grey-dark p-4 border-b">Radio</h2>
          <form className="px-4 py-4">
            <div className="flex gap-2 ">
              <div className="flex gap-2 mb-3">
                <input type="radio" name="Primary" />
                <span className="text-[14px] font-Regular text-black-lighter">
                  Primary
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <input type="radio" name="Primary" />
                <span className="text-[14px] font-Regular text-black-lighter">
                  Secondary
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <input type="radio" name="Primary" />
                <span className="text-[14px] font-Regular text-black-lighter">
                  Error
                </span>
              </div>
            </div>
            <button
              className="bg-blue-primary text-blue-white hover:bg-blue-link px-3 py-2 text-[12px] rounded-xl self-end"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
        <div className="border rounded-2xl bg-white-light w-full">
          <h2 className="text-[14px] text-grey-dark p-4 border-b">Checkbox</h2>
          <form className="px-4 py-4">
            <div className="flex gap-2 ">
              <div className="flex gap-2 mb-3">
                <input type="Checkbox" name="Primary" />
                <span className="text-[14px] font-Regular text-black-lighter">
                  Primary
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <input type="Checkbox" name="Primary" />
                <span className="text-[14px] font-Regular text-black-lighter">
                  Secondary
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <input type="Checkbox" name="Primary" />
                <span className="text-[14px] font-Regular text-black-lighter">
                  Error
                </span>
              </div>
            </div>
            <button
              className="bg-blue-primary text-blue-white hover:bg-blue-link px-3 py-2 text-[12px] rounded-xl self-end"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
        <div className="border rounded-2xl bg-white-light w-full">
          <h2 className="text-[14px] text-grey-dark p-4 border-b">Select</h2>
          <div className="p-4">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              data-dropdown-trigger="hover"
              className="text-[14px] bg-blue-primary text-blue-white hover:bg-blue-link p-3 border w-full hover:text-blue-white focus:outline-none font-medium rounded-lg  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown button{" "}
              <svg
                className="w-2.5 h-2.5 ms-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
