import { Outlet } from "react-router-dom";
import Nav from "../../react-vite-project/src/components/Navbar";
import Footer from "../../react-vite-project/src/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="mx-3 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
