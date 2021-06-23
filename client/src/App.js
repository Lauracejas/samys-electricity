import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
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


    </Router>
  );
}

export default App;
