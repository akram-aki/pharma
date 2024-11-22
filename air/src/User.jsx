import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const userContext = createContext({});

export function User({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [ready, setReady] = useState(false);
  const [id, setId] = useState("");
  const [items, setItems] = useState([]);

  //fetches username + fetches mainPage items
  useEffect(() => {
    if (!currentUser) {
      const { token } = Cookies.get();
      axios
        .post("/profile", {
          token,
        })
        .then((response) => {
          setCurrentUser(response.data.name);
          setId(response.data.id);
        });
    }
    if (items.length === 0) {
      axios.get("/fetchPatients").then((response) => {
        setItems(() => {
          const set = new Set();
          const newItems = response.data.filter((item) => {
            if (set.has(item.id)) {
              return false;
            }
            set.add(item.id);
            return true;
          });
          return newItems;
        });
      });
    }
  }, []);

  return (
    <userContext.Provider
      value={{ currentUser, setCurrentUser, ready, setReady, id, items }}
    >
      {children}
    </userContext.Provider>
  );
}
