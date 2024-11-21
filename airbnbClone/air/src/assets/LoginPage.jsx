import { useContext, useState } from "react";
import "../index.css";
import axios from "axios";
import { userContext } from "../User";
import Cookies from "js-cookie";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(true);

  async function handleLogin(e) {
    e.preventDefault();

    const response = await axios
      .post("/login", {
        email,
        password,
      })
      .catch((error) => {
        alert("wrong credentials");
      });
    const token = response.data;
    Cookies.set("token", token, { expires: 1 });
    window.location.reload();
  }

  function handleRegister(e) {
    e.preventDefault();
    try {
      axios
        .post("/Register", {
          email,
          username,
          password,
        })
        .then((response) => alert(response.data.msg));
    } catch (e) {
      alert("failed to Register");
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto z-20 border rounded-xl p-4 shadow-md bg-white">
        <button onClick={props.toggle} className="ml-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        {login ? (
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center gap-5"
          >
            <label className="flex flex-col items-center">
              email
              <input
                type="password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-1 rounded-xl w-auto shadow-md"
              />
            </label>
            <label className="flex flex-col items-center">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border p-1 rounded-xl w-auto shadow-md"
              />
            </label>

            <button
              type="submit"
              className="border shadow-md rounded-full bg-primary p-2 text-white  transition-all"
            >
              Login
            </button>
            <div className="flex gap-2">
              <span className="text-gray-600">no acc yet?</span>
              <button onClick={() => setLogin(!login)}>Register</button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center gap-5"
          >
            <label className="flex flex-col items-center">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-full w-auto shadow-md"
              />
            </label>
            <label className="flex flex-col items-center">
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-full w-auto shadow-md"
              />
            </label>
            <label className="flex flex-col items-center">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border rounded-full w-auto shadow-md"
              />
            </label>

            <button
              type="submit"
              className="border shadow-md rounded-full bg-primary p-2 text-white transition-all"
            >
              Register
            </button>
            <div className="flex gap-2">
              <span className="text-gray-600">already have an account?</span>
              <button onClick={() => setLogin(!login)}>Login</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
