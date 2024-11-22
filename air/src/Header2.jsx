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
            <span className="lg:text-2xl md:hidden sm:hidden text-primary lg:flex font-bold ">
              Pharma
            </span>
          </a>
        </div>
      </div>
      {/*center div */}
      <div className="flex justify-between gap-8 uppercase font-medium border rounded-full shadow-md p-3 ">
        <a
          href="/index"
          className="text-light1 hover:text-heavy1 transition-colors"
        >
          patients
        </a>
        <a
          href="/index"
          className="text-light1 hover:text-heavy1 transition-colors"
        >
          medication list
        </a>
        <a
          href="/index"
          className="text-light1 hover:text-heavy1 transition-colors"
        >
          help
        </a>
      </div>
      {/* right div */}
      <div className="flex items-start ">
        {ready ? (
          currentUser ? (
            <>
              <div className="flex items-center">
                <a
                  href="/profile"
                  className=" border-gray-300 w-20 justify-center transition-all border bg-primary hover:shadow-md flex gap-2 rounded-full p-2"
                >
                  <p className="font-semibold text-xl text-white">
                    {currentUser}
                  </p>
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
