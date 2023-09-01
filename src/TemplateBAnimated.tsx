import React, {useEffect, useState} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactMarkdown from "react-markdown";
import './MegaTemplate.css'

const TemplateB = () => {

    const [page, setPage] = useState(1)
    const [forward, setForward] = useState(true)

    const body = "Congratulations on getting started with the Digital Medicine Program!\n\nPlease take this 5-minute questionnaire to help us design a program specifically for you.\n\nWe’ll ask you about long-term health conditions (such as high blood pressure and diabetes). We’ll refer to these as ‘health conditions’ to make it easier."

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
                            <h2>Tell us more about your health</h2>
                                <li className='ol'>item 1</li>
                                <li className='ol'>item 2</li>
                                <li className='ol'>item 3</li>
                                <li className='ul'>item 1</li>
                                <li className='ul'>item 2</li>
                                <li className='ul'>item 3</li>
                                <div className='list'>
                                    <div className='ol-bullet'>1</div>
                                    <div>item 1</div>
                                </div>
                                <li className='check'>item 2</li>
                                <li className='check'>item 3</li>
                            <div className='divider' />
                            <p><ReactMarkdown className={"markdown-default"} children={body}/></p>
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
                            <a href={"https://www.ochsner.org/?home=no-thanks"}>outside link</a>
                            <p>https://www.ochsner.org/?home=no-thanks</p>

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