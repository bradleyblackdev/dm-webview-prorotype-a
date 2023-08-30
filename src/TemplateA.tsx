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
    
    const [showStuff, setShowStuff] = useState(false)
    
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
        <p>item <b>four</b></p>
        {showStuff &&
            <div>
            <h1>mobile heading 1</h1>
            <h2>mobile heading 2</h2>
            <h3>mobile heading 3</h3>
            <h4>mobile heading 4</h4>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <h1>mobile heading 1</h1>
            <h2>mobile heading 2</h2>
            <h3>mobile heading 3</h3>
            <h4>mobile heading 4</h4>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <h1>mobile heading 1</h1>
            <h2>mobile heading 2</h2>
            <h3>mobile heading 3</h3>
            <h4>mobile heading 4</h4>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <h1>mobile heading 1</h1>
            <h2>mobile heading 2</h2>
            <h3>mobile heading 3</h3>
            <h4>mobile heading 4</h4>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            </div>
        }
        <p>item 44</p>
        <p><ReactMarkdown>item **44**</ReactMarkdown></p>
        {React.createElement("p", {}, <ReactMarkdown>item **44**</ReactMarkdown>)}
        <div className="spacer" />
        <div className="footer">
        <div className="button back">Back</div>
        <div className="button primary" onClick = {() => setShowStuff(true)}>Next</div>
        </div>
        </div>
        </div>
        );
    }
    
    export default TemplateA;
    
    
    
    
    
    
    interface Module {
        pages: Page[], //ordered so index can be used as a page number reference
    }
    
    interface Page {
        params: PageParams
        contents: String //html could be used, and parsed into
    }
    
    interface PageParams {
        shouldPresent?: String // "self.pages[x].contents.data.contains("500ml")"
        answerable?: Boolean
        data: String
        
        //nice to have
        // progress: Number
    }
    
    
    const Components = {
        
    }
    
    const DemoA: Module = {
        pages: [
            {params: {
                answerable: false,
                data: ""
            },
            contents: "HTML content"
        }
    ]
}