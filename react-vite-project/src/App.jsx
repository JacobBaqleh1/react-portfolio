import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden min-h-screen">
      <Header />
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
