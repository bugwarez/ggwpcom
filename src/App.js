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
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton, FormControl, Image, InputGroup, Dropdown, Form} from "react-bootstrap";

//!END OF Importing Components

function App() {
    const min = 1;
    const max = 11;
    const rand = min + Math.floor(Math.random() * (max + 1));
    console.log(rand);
    return (
        <div className="wrapper">
            <BrowserRouter>
                <nav className={"stroke"}>
                    <ul>
                        <li><Image style={{marginLeft: 20, marginRight: 20}} className={"img_sm"}
                                   src="https://www.riotgames.com/darkroom/original/81fe92b7ca168b3d98e3a117e0c6a58d:4c270e6fba1dba8aa9ee4af539604355/riot-fist-container-black-rbg.png"/>
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Champions">Champions</Link></li>
                        <li><Link to="/Statistics">Statistics</Link></li>
                        <li><Link to="/Rankings">Rankings</Link></li>
                    </ul>
                </nav>
                {/*<input placeholder={"Username"} type={"text"} className={"searchUser"}/>*/}
                <InputGroup className="mb-3 w-50 searchUser">
                    <Form>
                        <Form.Select className={"summoner_server_select"} aria-label="Default select example">
                            <option disabled={"true"}>Server</option>
                            <option value="tr1">TR</option>
                            <option value="euw1">EUW</option>
                            <option value="na1">NA</option>
                            <option value="eune1">EUNE</option>
                        </Form.Select>
                    </Form>
                    <FormControl placeholder={"Summoner Name"} aria-label="Text input with dropdown button"/>
                </InputGroup>
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