import "./App.css";
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero'
import Card from "./components/Card";
function App() {
  return <div className="body">
    <Nav/>
    <Hero/>
    <Card/>
  </div>;
}

export default App;