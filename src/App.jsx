import React from 'react';
import './App.css'
import { Footer } from './components'
/* import Navbar from './components/Navbar'; */
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { NavbarResponsive } from './components';

const FlexContainer = styled.div`
display: flex;
flex-direction: column;
`;

import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Cases from './components/pages/Cases';
import Contact from './components/pages/Contact';
import LIINE from './components/pages/LIINE';



const App = () => (
  <div>
    <Router>
      <FlexContainer>
        <NavbarResponsive />
      </FlexContainer>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/cases">
          <Cases />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/LIINE">
          <LIINE />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
)


export default App;
