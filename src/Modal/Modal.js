import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import Ctx from "../Component/Contex/Ctx";

const Modal = ({ onDelete }) => {
  const [message, setMessage] = useState(false);
  const { modalState, modalHandlerOpener } = useContext(Ctx);

  const cancelHandler = () => {
    modalHandlerOpener({ isOpen: false });
  };

  const deleteHandler = () => {
    const { idToDelete } = modalState;
    onDelete(idToDelete);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      modalHandlerOpener({ isOpen: false });
    }, 2000);
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      {!message && (
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      )}

      {message ? (
        <div class="flex  items-center justify-center bg-white w-1/2">
          <div class="rounded-lg bg-gray-50 px-16 py-14">
            <div class="flex justify-center">
              <div class="rounded-full bg-green-200 p-6">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-8 w-8 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="my-4 text-center text-3xl font-semibold text-gray-700">
              Congratuation!!! Message successfully deleted
            </h3>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg p-5 relative rounded-xl shadow-lg bg-white font-serif">
          <div className="text-center p-5 flex-auto justify-center items-center">
            <div className="flex justify-between items-center gap-4">
              <h2 className="text-xl text-gray py-4">
                Are you sure you want to delete?
              </h2>

              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "gray", fontSize: "24px" }}
                onClick={cancelHandler}
              />
            </div>
          </div>

          <div className="p-3 mt-2  text-center md:text-right ml-4 mr-4">
            <button
              className="mb-2 md:mb-0 ml-4 mr-4 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded hover:shadow-lg hover:bg-gray-100"
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button
              onClick={deleteHandler}
              className="mb-2 md:mb-0 bg-red-600 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
