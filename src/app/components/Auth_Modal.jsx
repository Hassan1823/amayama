import React from "react";

const Auth_Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-40 inset-0 bg-black bg-opacity-25 backdrop-blur-sm lg:flex hidden justify-center items-center"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[50%] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="bg-white p-2 rounded">
            {children }
        </div>
      </div>
    </div>
  );
};

export default Auth_Modal;
