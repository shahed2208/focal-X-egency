import logo from './logo.svg';
import './App.css';
import React ,{useState , useMemo} from "react";
import {BrowserRouter as Router, Route, link} from "react-router-dom";
import{ Index } from "./pages";
import{ about } from "./pages/about";

import { Route, Router } from 'react-router-dom';
import { UserContext } from './usecontact';

function AppRouter() {
  const[value,setvalue] = useState('hello');
  const providerValue = useMemo(()=> ({value, setvalue}), [value, setvalue])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <link to ="/">home</link>
            </li>
            <li>
            <link to ="/">about</link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{value, setvalue}}>
        <Route path="/" exact comonent ={Index} />
        <Route path="/about" exact comonent ={about} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
