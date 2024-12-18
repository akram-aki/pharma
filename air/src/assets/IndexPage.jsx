import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../User";

export default function IndexPage() {
  const { items } = useContext(userContext);

  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10 border border-transparent">
      {items.map((item, key) => (
        <Link to={"/index/" + item.id} key={key} className=" rounded-lg grid">
          <img
            src={`http://localhost:8000/images/${item.photo}`}
            alt="img"
            className="h-72 object-cover w-full rounded-lg"
          />
          <span className="font-semibold">
            {(key, item.first_name + " " + item.last_name)}
          </span>
          <span className="opacity-55">{(key, item.illness)} </span>
          <span className="opacity-55 ">{item.adress}</span>
        </Link>
      ))}
    </div>
  );
}
