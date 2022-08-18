import Navigation from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery"
import Homepage from './components/Homepage/Homepage';
import Posts from './components/Posts/Posts';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
