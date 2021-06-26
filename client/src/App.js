import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Door from "./Pages/EachServ/Door";
import Electrical from "./Pages/EachServ/Electrical";
import Roofing from "./Pages/EachServ/Roofing";
import Bathroom from "./Pages/EachServ/Bathroom";
import Footer from "./Components/Footer/Footer";
// import { GlobalStyles } from './Components/Global/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './Components/Theme/Theme';


function App() {
  return (
    <Router className="App">
      <ThemeProvider theme={theme} />
      {/* <GlobalStyles /> */}
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Route path="/Door" component={Door} />
      <Route path="/Electrical" component={Electrical} />
      <Route path="/Roofing" component={Roofing} />
      <Route path="/Bathroom" component={Bathroom} />

      <Footer />
    </Router>
  );
}

export default App;
