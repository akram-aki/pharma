import { useState } from "react";
import ProfileSettingPage from "./ProfileSettings";
import Accomodations from "./Accomodations";
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
          My Account
        </button>
        <button
          onClick={() => setCurrPage("Bookings")}
          className={`${
            currpage === "Bookings"
              ? "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 font-semibold bg-primary transition-colors text-white "
              : "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 text-black font-semibold transition-colors bg-gray-100 "
          }`}
        >
          My Bookings
        </button>
        <button
          onClick={() => setCurrPage("Accomodations")}
          className={`${
            currpage === "Accomodations"
              ? "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 font-semibold bg-primary transition-colors text-white "
              : "border border-gray-400 hover:shadow-lg rounded-full p-1 w-64 text-black font-semibold transition-colors bg-gray-100 "
          }`}
        >
          My Accomodations
        </button>
      </div>
      {currpage === "Bookings" ? (
        <Bookings />
      ) : currpage === "Accomodations" ? (
        <Accomodations />
      ) : (
        <ProfileSettingPage />
      )}
    </div>
  );
}
