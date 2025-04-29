import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
