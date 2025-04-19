import { Outlet } from "react-router-dom";
import Nav from "../../react-vite-project/src/components/Navbar";
import Footer from "../../react-vite-project/src/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mx-auto w-full max-w-[900px]">
        <Nav />
      </div>
      <main className="mx-auto w-full  flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
