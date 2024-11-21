import { useContext, useEffect, useState } from "react";
import { userContext } from "./User";
import _ from "lodash";
import { CSSTransition } from "react-transition-group";
import "./App.css";

import Login from "./assets/LoginPage";

export default function Header2() {
  const [experiences, setExperiences] = useState(null);
  const [big, setBig] = useState(true);
  const { currentUser, setReady, ready } = useContext(userContext);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true); // Set showContent to true after delay
    }, 100);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  function submited_preferences(ev) {
    ev.preventDefault();
  }

  function togglePop() {
    setSeen(!seen);
  }
  return (
    <div className="flex lg:justify-between md:justify-around px-10 pt-5 sticky top-0 z-10 bg-white border-b pb-4 ">
      {/* left div */}
      <div>
        <div>
          <a href="/" className="items-center  gap-2 flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8  -rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <span className="lg:text-2xl md:hidden sm:hidden  lg:flex font-bold ">
              airbnb
            </span>
          </a>
        </div>
      </div>
      {/* center div */}
      <div>
        <CSSTransition in={big} timeout={300} classNames="fade">
          <div>
            {!big ? (
              <div>
                <div className="flex justify-center gap-4 text-xl">
                  <button
                    onClick={() => setExperiences(false)}
                    className={`${
                      !experiences
                        ? "font-semibold text-lg transition-all rounded-full p-2 overflow-hidden"
                        : "hover:bg-gray-50 rounded-full text-lg p-2 overflow-hidden"
                    }`}
                  >
                    Stays
                  </button>

                  <button
                    onClick={() => setExperiences(true)}
                    className={`${
                      experiences
                        ? "font-semibold transition-all text-lg rounded-full p-2 overflow-hidden"
                        : "hover:bg-gray-50 rounded-full text-lg p-2 overflow-hidden"
                    }`}
                  >
                    Experiences
                  </button>
                </div>
                <form
                  className="border rounded-full border-gray-300 flex items-center gap-2 p-1 shadow-lg w-full"
                  onSubmit={submited_preferences}
                ></form>
              </div>
            ) : (
              <div className="flex border shadow-md p-2 rounded-full gap-2 w-80">
                <button
                  className="border-r px-2 font-semibold text-sm"
                  onClick={() => setBig(!big)}
                >
                  Anywhere
                </button>
                <button
                  className="border-r px-2 font-semibold text-sm"
                  onClick={() => setBig(true)}
                >
                  Any week
                </button>
                <button
                  className="px-2 font-semibold text-sm"
                  onClick={() => setBig(true)}
                >
                  Add guests
                </button>
                <button
                  onClick={() => setBig(true)}
                  className="px-2 font-semibold text-sm rounded-full bg-primary p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </CSSTransition>
      </div>
      {/* right div */}
      <div className="flex items-start ">
        {ready ? (
          currentUser ? (
            <>
              <div className="flex items-center gap-4">
                <a className="font-semibold text-sm border border-transparent hover:bg-slate-50 p-2 cursor-pointer rounded-full">
                  Airbnb your home
                </a>
                <button className="font-semibold text-sm border border-transparent hover:bg-slate-50 p-2 cursor-pointer rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </button>
                <a
                  href="/profile"
                  className=" border-gray-300 transition-all border bg-gray-50 hover:shadow-md flex gap-2 rounded-full p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <p className="font-semibold text-xl">{currentUser}</p>
                </a>
              </div>
            </>
          ) : (
            <div>
              <button
                onClick={togglePop}
                className="   border shadow-2xl rounded-full p-3 bg-primary text-white"
              >
                Login
              </button>
              {seen ? <Login toggle={togglePop} /> : null}
            </div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
