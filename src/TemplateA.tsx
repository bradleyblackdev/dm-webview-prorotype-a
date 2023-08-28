import React, { useState, useEffect } from 'react';
import './MegaTemplate.css';
import Quiz from './Quix';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";


const TemplateA = () => {


    return (
        <div className="page">
            <div className="head">
                <h1>wow</h1>
            </div>
            <div className="arf">
                <p>item 1</p>
                <p>item 2</p>
                <p>item 3</p>
                <p>item 4</p>
                {/* <p>item 5</p>
                <p>item 6</p>
                <p>item 7</p>
                <p>item 8</p>
                <p>item 9</p>
                <p>item 0</p>
                <p>item 2</p>
                <p>item 3</p>
                <p>item 1</p>
                <p>item 2</p>
                <p>item 3</p> */}
                <div className="spacer" />
                <p>footer!</p>

            </div>
        </div>
        );


    }

    export default TemplateA;
