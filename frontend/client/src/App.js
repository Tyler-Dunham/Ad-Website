import './App.css';
import Homepage from "./Components/Homepage.jsx"
import Testimonies from "./Components/Testimonies"
import Pricing from "./Components/Pricing.jsx"
import About from "./Components/About.jsx"
import Companies from "./Components/Companies.jsx"
import Basic from "./Components/Basic.jsx"
import Success from "./Components/Success.jsx"
import Premium from "./Components/Premium.jsx"
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/packages/basic" element={<Basic />} />
        <Route path="/packages/success" element={<Success />} />
        <Route path="/packages/premium" element={<Premium />} />
      </Routes>
    </div>
  );
}

export default App;
