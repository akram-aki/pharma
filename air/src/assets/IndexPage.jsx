import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../User";

export default function IndexPage() {
  const { items } = useContext(userContext);

  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10 border border-transparent">
      {items.map((item, key) => (
        <Link
          to={"/index/" + item.postid}
          key={key}
          className=" rounded-lg grid"
        >
          <img
            key={key}
            src={"http://localhost:8000/images/" + item.addedphotos[0]}
            alt="img"
            className="h-72 object-cover w-full rounded-lg "
          />
          <span className="font-semibold">{(key, item.title)}</span>
          <span className="opacity-55 ">{key}1,618 kilometers away</span>
          <span className="opacity-55">{(key, item.adress)} </span>
          <p className=" font-semibold">{(key, item.extrainfo + "$ night")}</p>
        </Link>
      ))}
    </div>
  );
}
