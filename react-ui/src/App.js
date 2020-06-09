import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBook from "./components/SavedBook/SavedBook";
import SearchForm from "./components/SearchForm/SearchForm";
import NoMatch from "./components/NoMatch/NoMatch";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/saved" component={SavedBook} />
          <Route exact path="/saved/:id" component={SavedBook} />
          <Route component={NoMatch} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;