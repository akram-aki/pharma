import { useContext, useEffect, useState } from "react";
import { userContext } from "./User";
import "./App.css";

import Login from "./assets/LoginPage";

export default function Header2() {
  const { currentUser, setReady, ready } = useContext(userContext);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true); // Set showContent to true after delay
    }, 100);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  function togglePop() {
    setSeen(!seen);
  }
  return (
    <div className="flex lg:justify-between md:justify-around px-10 pt-5 sticky top-0 z-10 bg-white border-b pb-4 ">
      {/* left div */}
      <div>
        <div>
          <a href="/index" className="items-center  gap-2 flex ">
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
              Pharma
            </span>
          </a>
        </div>
      </div>
      {/*center div */}
      <div className="flex justify-between gap-8 uppercase font-medium">
        <a href="">patients</a>
        <a href="">patients</a>
        <a href="">patients</a>
        <a href="">patients</a>
      </div>
      {/* right div */}
      <div className="flex items-start ">
        {ready ? (
          currentUser ? (
            <>
              <div className="flex items-center gap-4">
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
