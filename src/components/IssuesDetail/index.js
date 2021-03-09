import React from 'react';
import "./style.css";
import {Link} from "react-router-dom"

const IssuesDetail = ({issues}) => {
    //console.log(issues)
    return (
        <div>
        <Link to="/"><button>Back</button></Link>
        <div className="issue">
        <p>{issues.user.login} commented on {issues.created_at.substr(0, 10)}</p>
            <h3>{issues.body}</h3>
        </div>
        </div>
    );
};

export default IssuesDetail;