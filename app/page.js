import Navbar from "@/components/NavBar";
import Home from "@/sections/home";
import About from "@/sections/About";
import Projects from "@/sections/Project";
import Contact from "@/sections/Contact";
export default function Page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
