import Navbar from "@/components/NavBar";
import Home from "@/sections/home";
import About from "@/sections/About";
import Projects from "@/sections/Project";
export default function Page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}
