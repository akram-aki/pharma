import { Outlet } from "react-router-dom";
import Header from "./Header2";

export default function Layout() {
  return (
    <div className="p-4  min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
