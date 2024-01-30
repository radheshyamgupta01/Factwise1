import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Modal = () => {
  const navigate = useNavigate();
  const cancleHandler = () => {
    navigate("/");
  };
  return ReactDOM.createPortal(
    <div>
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-lg p-5 mt-20 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div>
          <div className="text-center p-5 flex-auto justify-center items-center">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-gray py-4">
                Are you sure you want to delete ?
              </h2>

              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "gray", fontSize: "24px" }}
                onClick={() => cancleHandler()}
              />
            </div>
          </div>

          <div className="p-3 mt-2 text-end space-x-4 md:block">
            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded hover:shadow-lg hover:bg-gray-100">
              Cancel
            </button>
            <button className="mb-2 md:mb-0 bg-red-600 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-red-800">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
