"use client";
import React, { useState } from "react";
// import FcGoogle from 'react-icons'

const Login = ({ onClose }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  return (
    <>
      <div className="flex w-[100%]">
        {/* left side */}
        <div className="flex flex-col gap-4 w-[50%] h-auto bg-[#FBF5EA] p-2">
          {/* email and passwords */}
          <input
            type="text"
            placeholder="E-Mail"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="w-[70%] h-10 pl-5 pr-4 text-gray-700 bg-gray-100 focus:outline-none focus:bg-white focus:text-gray-900 outline-none rounded border-slate-400 border-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            className="w-[70%] h-10 pl-5 pr-4 text-gray-700 bg-gray-100 focus:outline-none focus:bg-white focus:text-gray-900 outline-none rounded border-slate-400 border-2"
          />

          {/* login Checkbox */}
          <div className="w-[70%] h-auto">
            <input
              type="checkbox"
              id="agree"
              value={loginCheck}
              onClick={() => setLoginCheck(!loginCheck)}
            />
            <label htmlFor="agree" className="ml-2 text-xs">
              I allow to store my account information by Amayama Trading co.,
              Ltd and to use cookies for the authentication. Given information
              will only be used for the authentication purposes and to contact
              you regarding your inquiries.
            </label>
          </div>

          {/* login Button */}
          <button
            className="border-black border-2 text-black text-base font-bold w-[30%] p-2 bg-[#EFEFEF] rounded"
            onClick={() => onClose()}
          >
            Log In
          </button>
        </div>

        {/* right Side */}
        <div className="w-[50%]">
          <h4>
            Login in with:
            <button>
              Icon
              {/* {FcGoogle}  */}
            </button>
          </h4>

        </div>
      </div>
    </>
  );
};

export default Login;
