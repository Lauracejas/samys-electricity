import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage"

function App() {
  return (
    <Router className="App">
     <Navbar />
     
      
    </Router>
  );
}

export default App;
