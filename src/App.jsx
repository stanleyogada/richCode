import { BrowserRouter, Link } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className={`bg-hero-pattern`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <footer>
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-white-100 text-sm">
              &copy; {new Date().getFullYear()} Stanley Ogada (RichCode)
            </p>
            <p className="text-white-100 text-sm">
              Built with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              using React by{" "}
              <Link
                href="https://www.linkedin.com/in/stanley-ogada"
                className="text-blue-500 underline"
              >
                Stanley Ogada (RichCode)
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
