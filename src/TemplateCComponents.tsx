import React, {useEffect, useState} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactMarkdown from "react-markdown";
import './MegaTemplate.css'
import { Link } from 'react-router-dom'

enum ModuleComponent {
    pageHeader = "pageHeader",
    pageBody = "pageBody",
    pageFooter = "pageFooter",
    pageXofX = "pageXofX",
    iconWithText = "iconWithText",
    img = "img",
    video = "video",
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    p = "p",
    p18 = "p18",
    p14 = "p14",
    divider = "divider",
    buttonBack = "buttonBack",
    buttonNext = "buttonNext"
}

const TemplateC = () => {

    const moduleComponents: { [key in ModuleComponent]?: string }[] = [
        {pageHeader:""},
        // {pageXofX: ""},
        {pageBody: ""},
        // {iconWithText: "lightbulbIcon | Expert Tip"},
        {h1: "this is an h1 header"},
        {h2: "this is an h2 header"},
        {h3: "this is an h3 header"},
        {h4: "this is an h4 header"},
        {h5: "this is an eyebrow"},
        {p: "this is default body font"},
        {p18: "this is the larger sized body font"},
        {p14: "this is the smaller sized body font"},
        {divider: ""},
        // {img: "foodsHighInSodium"},
        {video: "https://inhlrtrackdev.ochsner.org/Causeway/Videos/BP_Reading.mp4"},
        {pageFooter: ""},
        {buttonBack: "Back"},
        {buttonNext: "Next"}
    ]

    const headerIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageHeader")
    const bodyIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageBody")
    const footerIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageFooter")


    return (
        <div className="page">
            {headerIndex !== -1 &&
                <div className="page-header">
                    <p>Intro text lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ipsum vitae urna semper sodales ac et.</p>
                </div>
            }
            <div className="page-body">
                {moduleComponents.slice(bodyIndex, footerIndex).map(component => {
                    let key: ModuleComponent = ModuleComponent[Object.keys(component)[0] as keyof typeof ModuleComponent]
                    // let key = Object.keys(component)[0]
                    let value = Object.values(component)[0]
                    switch(key) {
                        case ModuleComponent.iconWithText: return <h4>icon with text</h4>
                        case ModuleComponent.img: return <img src={`${value}`}/>
                        case ModuleComponent.p18: return React.createElement("p", {className: key}, value)
                        case ModuleComponent.p14: return React.createElement("p", {className: key}, value)
                        case ModuleComponent.video: return (
                            <video controls>
                                <source src={value} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> 
                        )
                        case ModuleComponent.divider: return <div className='divider' />
                        default: return React.createElement(key, {}, value)
                    }

                    // return <h1>{key}</h1>
                })}
            </div>
        </div>
    );
}

 export default TemplateC;

interface Module {
    pages: Page[], //ordered so index can be used as a page number reference
    pageData: [PageID:String]
    conditionalPageLogic: any
}

interface Page {
    params: PageParams
    contents: String //html could be used, and parsed into
    questionContent?: String
}

interface PageParams {
    pageType: String // Intro, Page, Result
    questionID: String
    data: String

    //nice to have
    // progress: Number
}

// const DemoA: Module = {
//     pages: [
//         {params: {
//             pageType: "",
//             questionID: "",
//             data: ""
//         },
//         contents: "HTML content"
//     }
// ]
// }