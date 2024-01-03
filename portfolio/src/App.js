

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Photography from "./components/Photo/Photo";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Photography />
    </div>
  );
}

export default App;
