import { Outlet } from "react-router-dom";
import Nav from "../../react-vite-project/src/components/Navbar";
import Footer from "../../react-vite-project/src/components/Footer";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex flex-col sm:flex-row w-full overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Nav />
        <Outlet />

      </div>
    </div>
  );
}
