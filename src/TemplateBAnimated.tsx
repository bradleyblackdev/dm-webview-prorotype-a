import React, {useEffect, useState} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import './MegaTemplate.css'

const TemplateB = () => {

    const [page, setPage] = useState(1)
    const [forward, setForward] = useState(true)

    return (
        <TransitionGroup  className={`transition-group ${page === 1 ? "fwd" : "back"}`}>
            <CSSTransition
                key={page}
                timeout={{ enter: 0, exit: 400 }}
                classNames={'transition-wrap'}
            >
                <section className={`route-section`}>
                    {page === 1 &&
                    <div className="page">
                        <div className="page-header">
                            <h1>page 1</h1>
                        </div>
                        <div className="page-body">
                            <p>page 1 body</p>
                            <div className="spacer" />
                            <div className="footer">
                                <div className="button back">Back</div>
                                <div className="button primary" onClick = {() => setPage(2)}>Next</div>
                            </div>
                        </div>
                    </div>
                    }
                    {page === 2 &&
                    <div className="page">
                        <div className="page-header">
                            <h1>page 2</h1>
                        </div>
                        <div className="page-body">
                            <p>page 2 body</p>
                            <div className="spacer" />
                            <div className="footer">
                                {/* <div className="button back" onClick = {() => setPage(1)}>Back</div> */}
                                <div className="button primary"onClick={() => window.location.assign("/complete")}>Close</div>
                                
                            </div>
                        </div>
                    </div>
                    }
                </section>
            </CSSTransition>
        </TransitionGroup>
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