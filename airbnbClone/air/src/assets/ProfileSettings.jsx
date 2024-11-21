import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { userContext } from "../User";
import axios from "axios";

export default function ProfileSettingPage() {
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { setCurrentUser, id } = useContext(userContext);

  function logout() {
    Cookies.remove("token");
    setCurrentUser("");
  }
  async function changeUserInfo(e) {
    e.preventDefault();
    const response = await axios
      .post("/updateUser", {
        newUserName,
        newPassword,
        id,
      })
      .catch((e) => alert("fail"));
    if (response) {
      alert("success!");
      Cookies.set("token", response.data, { expires: 1 });
      window.location.reload();
    }
  }
  function delUser() {
    axios
      .post("/deleteUser", {
        id,
      })
      .then((response) => {
        if (response.data === "success") Cookies.remove("token");
        setCurrentUser("");
        alert("account removed");
      })
      .catch((e) => alert("failed"));
  }

  return (
    <div className="grid grid-cols-1  justify-items-center gap-4 mt-10">
      <form
        onSubmit={changeUserInfo}
        className="flex flex-col gap-4 items-center"
      >
        <label className="gap-2 flex items-center ">
          New Username
          <input
            type="text"
            value={newUserName}
            placeholder="your new username"
            className="border border-gray-500 rounded-xl p-1 text-center"
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </label>
        <label className="gap-2 flex items-center ">
          New password
          <input
            type="text"
            value={newPassword}
            placeholder="your new username"
            className="border border-gray-500 rounded-xl p-1 text-center"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="border border-gray-500 rounded-full p-1 w-56 bg-primary text-white hover:shadow-lg justify "
        >
          Save
        </button>
      </form>

      <button
        onClick={() => logout()}
        className="border border-gray-500 rounded-full p-1 w-56 bg-primary text-white hover:shadow-lg justify "
      >
        Logout
      </button>
      <button
        onClick={() => delUser()}
        className="border border-gray-500 rounded-full p-1 w-56 bg-primary text-white hover:shadow-lg justify "
      >
        Delete my account
      </button>
    </div>
  );
}
