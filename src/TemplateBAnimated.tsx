import React, { useState, useEffect } from 'react';
import './MegaTemplate.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Quiz from './Quix';
import ReactMarkdown from "react-markdown";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";

const TemplateB = () => {


    const [page, setPage] = useState(1)


    return (
        <div className="page">
            <div className="page-header">
                <h1>page 1</h1>
            </div>
            <div className="page-body">
                <p>page 1 body</p>
                <div className="spacer" />
                <div className="footer">
                    <div className="button back">Back</div>
                    <div className="button primary" onClick = {() => {}}>Next</div>
                </div>
            </div>
        </div>
        );
    }

    export default TemplateB;






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