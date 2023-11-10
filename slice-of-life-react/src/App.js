import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2> Learn more about me!</h2>;
}

function Contact() {
  return <h2>Contact me here</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path ="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
