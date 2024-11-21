import { useState } from "react";
import ProfileSettingPage from "./ProfileSettings";
import AddPatients from "./AddPatients";
import Bookings from "./Bookings";

export default function ProfilePage() {
  const [currpage, setCurrPage] = useState("Settings");
  return (
    <div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => setCurrPage("Settings")}
          className={`${
            currpage === "Settings"
              ? "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 font-semibold bg-primary transition-colors text-white "
              : "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 text-black font-semibold transition-colors bg-gray-100 "
          }`}
        >
          ACCOUNT
        </button>

        <button
          onClick={() => setCurrPage("PATIENTS")}
          className={`${
            currpage === "PATIENTS"
              ? "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 font-semibold bg-primary transition-colors text-white "
              : "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 text-black font-semibold transition-colors bg-gray-100 "
          }`}
        >
          PATIENTS
        </button>
      </div>
      {currpage === "PATIENTS" ? <AddPatients /> : <ProfileSettingPage />}
    </div>
  );
}
