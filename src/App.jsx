import Navbar from "./components/Navbar";
import StarCanvas from "./components/StarCanvas";
import Loader from "./components/Loader";

import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Structure from "./pages/Structure";
import Timeline from "./pages/Timeline";
import Prizes from "./pages/Prizes";
import Team from "./pages/Team";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onDone={() => setLoading(false)} />;

  return (
    <>
      <StarCanvas />
      <Navbar />

      <main className="bg-[#02020e] text-white font-inter">
        <Home />
        <About />
        <Structure />
        <Timeline />
        <Prizes />
        <Team />
      </main>
    </>
  );
}