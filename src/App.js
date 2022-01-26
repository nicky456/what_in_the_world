import "./World.css";
import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else if (isDarkMode === false) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };

  return (
    <Router>
      <div className="App">
        <nav className={isDarkMode ? "nav" : "light nav"}>
          <Link to="/">
            <h1>What in the World!?</h1>
          </Link>
          <label className="switch">
            <input type="checkbox" onClick={handleThemeChange} />
            <span className={isDarkMode ? "slider" : "light slider"}></span>
          </label>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home isDarkMode={isDarkMode} />
            </Route>
            {/* <Route exact path="/:cca3">
              <CountryDetails isDarkMode={isDarkMode} />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
