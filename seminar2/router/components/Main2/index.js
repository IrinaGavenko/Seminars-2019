import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Main2() {
    return (
        <div>
            <h1>Page2</h1>
            <Link to="/">Move to page1</Link>
        </div>
    );
}


export default Main2;