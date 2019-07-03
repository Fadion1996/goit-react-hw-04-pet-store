import React from "react";
import { HomePage, PetsPage, AboutPage } from "./Components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/pets">Pets</Link></li>
                </ul>
            </div>

            <hr />

            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/topics" component={PetsPage} />
        </Router>
    )
}

export default App;
