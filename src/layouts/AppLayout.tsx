import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div id="app-layout">
    <header className="dashboard-header">
      <h1>Website Layout Template</h1>
    </header>

    <aside className="dashboard-sidebar">
      <Navbar />
    </aside>

    <main className="dashboard-main">
      <Outlet />
    </main>

    <footer className="dashboard-footer">
      Footer
    </footer>

  </div>
  )
}
