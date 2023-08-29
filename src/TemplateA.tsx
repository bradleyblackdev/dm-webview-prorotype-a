import React, { useState, useEffect } from 'react';
import './MegaTemplate.css';
import Quiz from './Quix';
import ReactMarkdown from "react-markdown";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";

const TemplateA = () => {

    return (
        <div className="page">
            <div className="page-header">
                <h1>wow</h1>
            </div>
            <div className="page-body">
                <h1>mobile heading 1</h1>
                <h2>mobile heading 2</h2>
                <h3>mobile heading 3</h3>
                <h4>mobile heading 4</h4>

                <p>item 1</p>
                <p>item 2</p>
                <p>item 3</p>
                <p><ReactMarkdown>item **44**</ReactMarkdown></p>
                <div className="spacer" />
                <div className="footer">
                    <button className="back">Back</button>
                    <button className="primary">Next</button>
                </div>
                <div className="footer">
                    <div className="button back">Back</div>
                    <div className="button primary">Next</div>
                </div>
            </div>
        </div>
        );


    }

    export default TemplateA;
