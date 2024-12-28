import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Create />
        </Portfolio>
        <Route exact path="/contact">
          <BlogDetails />
        </Contact>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  )
}
const AboutMe = () => <div>About Me</div>;
const Portfolio = () => <div>Portfolio</div>;
const Contact = () => <div>Contact</div>;
const Resume = () => <div>Resume</div>;

export default App
