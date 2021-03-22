import React,{useState} from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IssuesDetail from "./components/IssuesDetail";

function App() {
  const [issues,setIssues]=useState("");
  const passIssuesDetail=(item,index)=>{
    //console.log(item,index)
    setIssues(item);
  }
  return <Router>
    <Switch>
      <Route exact path="/">
        <LandingPage passIssuesDetail={passIssuesDetail}/>
      </Route>
      <Route exact path="/issues-detail">
        <IssuesDetail issues={issues}/>
      </Route>
    </Switch>
  </Router>;
}

export default App;
