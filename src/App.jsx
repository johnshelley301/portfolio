import { ThemeProvider } from "./hooks/useTheme.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";

const App = () => (
  <ThemeProvider>
    <Header />
    <Home />
    <About />
    <Expertise />
    <Services />
    <Portfolio />
    <Pricing />
    <Contact />
  </ThemeProvider>
);

export default App;
