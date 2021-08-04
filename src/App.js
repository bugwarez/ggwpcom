import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import COLORS from "./utils/colors";
import "./css/App.css";

//!Importing Pages
import Champions from './pages/Champions';
import Statistics from './pages/Statistics';
import Rankings from './pages/Rankings';
//!END OF Importing pages

//!Importing Components

//!END OF Importing Components

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Champions">Champions</Link></li>
                        <li><Link to="/Statistics">Statistics</Link></li>
                        <li><Link to="/Rankings">Rankings</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/Champions">
                        <Champions/>
                    </Route>
                    <Route path="/Statistics">
                        <Statistics/>
                    </Route>
                    <Route path="/Rankings">
                        <Rankings/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;