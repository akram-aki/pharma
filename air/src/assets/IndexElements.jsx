import { useParams } from "react-router-dom";
import { userContext } from "../User";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexElements() {
  const { action } = useParams();
  const { items } = useContext(userContext);
  const item = items[action - 1];
  const [showimages, setShowImages] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const currDate = `${year}-${month}-${day}`;
  const dateAfter = `${year}-${month}-${parseInt(day) + 7}`;

  //

  function loadMoreImages(e) {
    setShowImages(true);
  }
  if (showimages === true) {
    return (
      <div className="relative mt-4 overflow-hidden">
        <button
          className="absolute right-1 z-10 bg-white rounded-full object-cover border border-black "
          onClick={() => setShowImages(false)}
        >
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
        </button>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 overflow-hidden">
          {item.addedphotos.map((img, key) => (
            <img
              src={"http://localhost:8000/images/" + img}
              key={key}
              alt="img"
              className="aspect-square object-cover rounded-2xl "
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      {item ? (
        <div className="flex flex-col lg:mx-72  sm:mx-2">
          <div className="flex justify-between">
            <div className="flex">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-semibold text-black  ml-2 text-left mb-2">
                {item.adress}
              </h1>
            </div>
            <div className="flex justify-center items-center gap-10">
              <Link
                to={"/"}
                className="flex gap-1 underline font-semibold text-sm items-center text-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
                share
              </Link>
              <Link
                to={"/"}
                className="flex gap-1 mr-10 underline font-semibold text-sm items-center text-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                save
              </Link>
            </div>
          </div>

          {/* pictures div */}
          <div className="grid gap-2 grid-cols-[2fr_1fr] relative">
            <div className="rounded-l-xl  overflow-hidden">
              <img
                src={"http://localhost:8000/images/" + item.addedphotos[0]}
                alt="img"
                className="aspect-square object-cover"
              />
            </div>
            <div className="grid ">
              <div className=" overflow-hidden rounded-tr-xl ">
                <img
                  src={"http://localhost:8000/images/" + item.addedphotos[1]}
                  alt="img"
                  className="aspect-square object-cover"
                />
              </div>
              <div className=" overflow-hidden rounded-br-xl ">
                <img
                  src={"http://localhost:8000/images/" + item.addedphotos[2]}
                  alt="img"
                  className="aspect-square object-cover relative top-2 "
                />
              </div>
            </div>
            <button
              onClick={() => setShowImages(true)}
              className="shadow-md absolute bottom-2 flex items-center right-2 border bg-white rounded-lg p-1 text-sm font-semibold"
            >
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
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
              Load more images
            </button>
          </div>

          <div className="grid relative">
            <h1 className="text-2xl font-semibold text-black mt-6 text-left mb-2">
              {item.title}
            </h1>
            <span className="text-gray-600 border-b pb-5 border-gray-300 w-[700px]">
              {item.maxguests + " guests . 2 bedrooms . 3 beds . 1 bath"}
            </span>
            <span className="mt-3 text-gray-600 border-b pb-5 border-gray-300 w-[700px]">
              {"hosted by " + item.id}
            </span>
            <form className="grid-cols-1 md:block lg:absolute md:absolute   border lg:w-[390px] md:w-64 min-[320px]:w-96  bg-white shadow-lg rounded-xl lg:right-0 md:right-0 top-4 grid p-5   ">
              <div className="mb-3">
                <span className="text-2xl font-semibold">
                  {item.extrainfo + "$"}
                </span>
                <span> night</span>
              </div>
              <div className="grid grid-cols-2">
                <div className="border rounded-tl-lg py-2 ">
                  <label className="grid font-semibold grid-cols-1  cursor-pointer overflow-hidden ml-3 text-sm">
                    CHECK-IN
                    <input
                      type="Check-in"
                      placeholder={currDate}
                      className="border-gray-300   focus:outline-none  w-28"
                    />
                  </label>
                </div>
                <div className="border rounded-tr-lg py-2">
                  <label className="grid font-semibold grid-cols-1  cursor-pointer overflow-hidden ml-3 text-sm">
                    CHECK-OUT
                    <input
                      type="Where"
                      placeholder={dateAfter}
                      className="border-gray-300  focus:outline-none  w-28"
                    />
                  </label>
                </div>
              </div>
              <div className="border rounded-b-lg py-3">
                <label className="grid   font-semibold grid-cols-1  cursor-pointer overflow-hidden ml-3 text-sm">
                  GUESTS
                  <input
                    type="Where"
                    placeholder="1 guest"
                    className="border-gray-300   focus:outline-none  w-30"
                  />
                </label>
              </div>
              <div className="grid">
                <button className="border p-2 w-full bg-primary text-white  rounded-xl mt-2">
                  Reserve
                </button>
                <span className="text-sm mt-2 text-center">
                  You won't be charged yet!
                </span>
              </div>
              <div className="relative mt-3 ">
                <button className="underline">price*how many days</button>
                <span className="absolute right-0">$$</span>
              </div>
              <div className="relative mt-3 ">
                <button className="underline">Cleaning fee</button>
                <span className="absolute right-0">$$</span>
              </div>
              <div className="relative mt-3 border-b pb-5">
                <button className="underline">Airbnb serive fee</button>
                <span className="absolute right-0">$$</span>
              </div>
              <div className="relative mt-3 ">
                <button className="font-bold">Total before fees</button>
                <span className="absolute right-0">$$</span>
              </div>
            </form>
            <div className=" lg:w-[675px] md:w-96 min-[320px]:w-[300px] mt-3 border-b pb-3">
              <p>
                {item.description.split(" ").slice(0, 40).join(" ")}
                {item.description.split(" ").length > 40 ? "..." : ""}
              </p>
              <button
                className="font-bold underline"
                onClick={() => setShowDescription(true)}
              >
                show more
              </button>
            </div>
            <div className="mt-3 border-b pb-3 min-[320px]: w-[300px]">
              <h1 className="text-2xl font-semibold ">Where you'll sleep</h1>
              <div className="flex gap-3">
                <div className="aspect-square grid border rounded-xl w-52">
                  <img src="" alt="img" />
                  <span className="text-center ">bedroom x </span>
                  <span className="text-center"> x single beds</span>
                </div>
                <div className="aspect-square grid border rounded-xl w-52">
                  <img src="" alt="img" />
                  <span className="text-center ">bedroom x </span>
                  <span className="text-center"> x single beds</span>
                </div>
              </div>
            </div>
            <h3 className="my-3 text-2xl font-semibold">
              What this place offers
            </h3>
            <div className="grid lg:grid-cols-3 lg:w-full md:w-full md:grid-cols-3 gap-4 min-[320px]:w-[300px] min-[320px]:grid-cols-2">
              {item.perks.map((perk, key) => (
                <div className="flex relative w-20">
                  <IconsRender name={perk}></IconsRender>
                  <p className="absolute left-10">{perk}</p>
                </div>
              ))}
            </div>
            {showDescription && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
                <div className=" fixed  left-1/2 overflow-scroll top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] z-20 border rounded-xl p-4 shadow-md bg-white">
                  <button
                    onClick={() => {
                      setShowDescription(false);
                    }}
                    className="absolute right-10 z-50 cursor-pointer"
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="mx-4 h-96  relative  ">
                    <h1 className="text-2xl font-bold mb-3">
                      About this place
                    </h1>
                    <p className="text-justify mx-10 ">{item.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
