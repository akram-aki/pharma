import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../User";
import axios from "axios";

export default function AddPatients() {
  const { action } = useParams();
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [adress, setAdress] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [SSW, setSSW] = useState("");
  const [illness, setIllness] = useState("");
  const { id, patients } = useContext(userContext);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4  ">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, Description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(Description)}
      </>
    );
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    data.append("id", id);

    axios
      .post("/uploadPhoto", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        setPhotoLink(response.data);
      })
      .catch(() => alert("didnt work"));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !id ||
      !first_name ||
      !last_name ||
      !adress ||
      !illness ||
      !photoLink ||
      !SSW
    )
      alert("all fields must be filled up");
    else {
      axios
        .post("/addPatient", {
          id,
          first_name,
          last_name,
          adress,
          illness,
          photoLink,
          SSW,
        })
        .then((res) => alert(res.data))
        .catch(() => alert("didnt work"));
    }
  }

  return (
    <div className="mt-4">
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full w-50"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
          {/* <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10 border border-transparent">
            {patients.map((item, key) => (
              <Link
                to={"/index/" + item.postid}
                key={key}
                className=" rounded-lg grid text-left"
              >
                <img
                  key={key}
                  src={"http://localhost:8000/images/" + item.addedphotos[0]}
                  alt="img"
                  className="h-72 object-cover w-full rounded-lg "
                />
                <span className="font-semibold">{(key, item.first_name)}</span>
                <span className="opacity-55 ">{key}1,618 kilometers away</span>
                <span className="opacity-55">{(key, item.last_name)} </span>
                <p className=" font-semibold">{(key, item.extrainfo)}</p>
              </Link>
            ))}
          </div> */}
        </div>
      )}
      {action === "new" && (
        <div>
          <div className="absolute right-10 border border-transparent rounded-full hover:bg-gray-100 ">
            <Link to={"/account/places"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            {preInput("first name", "first name of the patient ")}
            <input
              type="text"
              value={first_name}
              onChange={(ev) => setfirst_name(ev.target.value)}
              placeholder="first name, for example : mohammed"
            />
            {preInput("Last name", "Last name of the patient")}

            <input
              type="text"
              placeholder="last name example : khlif"
              value={last_name}
              onChange={(ev) => setlast_name(ev.target.value)}
            />
            {preInput("Adress", "home adress of the current patient")}

            <input
              type="text"
              placeholder="adress example : les 800-boumerdes"
              value={adress}
              onChange={(ev) => setAdress(ev.target.value)}
            />
            {preInput("Illness", "Illness of the patient")}

            <input
              type="text"
              placeholder="illness example : common cold"
              value={illness}
              onChange={(ev) => setIllness(ev.target.value)}
            />

            {preInput("Photos", "photo of patient")}

            <div className="grid gap-3 grid-cols-3 items-center lg:grid-cols-6 md:grid-cols-4">
              <div className="relative mt-2">
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  onChange={uploadPhoto}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="fileInput"
                  className="  flex  gap-2 items-center  justify-center  w-full h-32 cursor-pointer border border-gray-300 p-2 rounded-lg  hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  Upload
                </label>
              </div>

              {photoLink ? (
                <img src={"http://localhost:8000/images/" + photoLink} alt="" />
              ) : (
                <div>loading...</div>
              )}
            </div>

            {preInput(
              "social security number",
              "social security number of the patient"
            )}

            <input
              type="text"
              placeholder="SSW  example : 1234 1234 1234 "
              value={SSW}
              onChange={(ev) => setSSW(ev.target.value)}
            />
            <button
              type="submit"
              className="border bg-primary p-2 rounded-xl items-center text-white mt-4 mb-4"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
