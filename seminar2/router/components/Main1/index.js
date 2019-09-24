import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Main1() {
    return (
        <div>
            <h1>Page1</h1>
            <Link to="/main2">Move to page2</Link>
        </div>
    );
}


export default Main1;