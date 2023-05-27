"use client";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import Auth_Modal from "./Auth_Modal";
import Login from "../(auth)/login/page";
import Signup from "../(auth)/signup/page";
import ForgotPassword from "../(auth)/forgotpass/page";
// import styles from '../styles/Main_page.css'
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // handling popup
  const handlePopup = (e) => {
    if (e.target.id === "forgotpassword") {
      setShowLogin(false);
      setShowForgotPassword(true);
      setShowSignup(false);
    }
    if (e.target.id === "login") {
      setShowLogin(true);
      setShowForgotPassword(false);
      setShowSignup(false);
    }
    if (e.target.id === "signup") {
      setShowLogin(false);
      setShowForgotPassword(false);
      setShowSignup(true);
    }
  };
  return (
    <>
      <Fragment>
        <div
          className="w-full h-12 border drop-shadow lg:flex items-center gap-4 hidden"
          dir="rtl"
        >
          {/* carts section */}
          <button className="flex items-center gap-1 mr-24">
            {/* <span className="text-slate-600">cart is empty</span> */}
            <Image
              src="/cart-2-svgrepo-com.svg"
              alt="cart"
              width={25}
              height={30}
              className="object-contain"
            />
          </button>
          {/* login and signup */}
          <div className="w-[12%] h-full flex flex-row-reverse justify-evenly items-center ">
            <button
              className="text-blue-500 font-medium flex items-center gap-1 "
              onClick={() => {
                setShowLogin(true)
                setShowSignup(false)
                setShowModal(true)
              }}
              >
              Login
              <Image
                src="/login-svg.svg"
                alt="login"
                width={20}
                height={50}
                className="object-contain"
                />
            </button>
            <span className="text-slate-600">or</span>
            <button className="text-blue-500 font-medium "
            onClick={() => {
              setShowSignup(true)
              setShowLogin(false)
              setShowModal(true)
            }}
            >Signup</button>
          </div>
        </div>

        {/* Auth Modal */}
        <Auth_Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="w-full h-auto bg-[#FBF5EA]">
            <div className="h-10 w-full flex justify-evenly items-center text-blue-600 mb-8">
              <button
                className="h-full w-1/3 border-slate-300 border-[1px]"
                id="login"
                onClick={handlePopup}
              >
                Log In
              </button>
              <button
                className="h-full w-1/3 border-slate-300 border-[1px]"
                id="signup"
                onClick={handlePopup}
              >
                Sign Up
              </button>
              <button
                className="h-full w-1/3 border-slate-300 border-[1px]"
                id="forgotpassword"
                onClick={handlePopup}
              >
                Restore Password
              </button>
            </div>
            {showLogin ? (
              <>
                <Login onClose={() => setShowModal(false)} />
              </>
            ) : showSignup ? (
              <>
                <Signup onClose={() => setShowModal(false)}/>
              </>
            ) : showForgotPassword ? (
              <>
                <ForgotPassword onClose={() => setShowModal(false)}/>
              </>
            ) : (
              <></>
            )}
          </div>
        </Auth_Modal>
      </Fragment>
    </>
  );
};

export default Header;
