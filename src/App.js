import React from "react";
import { HomePage, PetsPage, PetPage, AboutPage } from "./Components";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <ul className="header-menu">
                    <li className="menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item"><Link to="/pets">Pets</Link></li>
                    <li className="menu-item"><Link to="/about">About</Link></li>
                </ul>
            </div>

            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/pets" component={PetsPage} />
            <Route path="/pets/:id" component={PetPage} />
            <Route render={() => <Redirect to="/" />} />
        </Router>
    )
}

export default App;
