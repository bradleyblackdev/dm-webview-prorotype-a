import React, {useEffect, useState} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactMarkdown from "react-markdown";
import './MegaTemplate.css'
import { Link } from 'react-router-dom'
import { BsCheckLg, BsCircleFill } from 'react-icons/bs'

enum ContentComponent {
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
    eyebrow = "eyebrow",
    p = "p",
    p18 = "p18",
    p14 = "p14",
    ol = "ol",
    ul = "ul",
    check = "check",
    accHead = "accHead",
    accBody = "accBody",
    divider = "divider",
    buttonBack = "buttonBack",
    buttonNext = "buttonNext"
}

type TemplateCProps = {
    updatePage: (page: number) => void
}

const TemplateC = ({ updatePage }: TemplateCProps) => {

    const moduleComponents: { [key in ContentComponent]?: string }[] = [
        {pageHeader:""},
        // {pageXofX: ""},
        {pageBody: ""},
        // {iconWithText: "lightbulbIcon | Expert Tip"},

        // {h1: "this is an h1 header"},
        // {h2: "this is an h2 header"},
        // {h3: "this is an **h3** header"},
        // {h4: "this is an h4 header"},
        // {eyebrow: "this is an eyebrow"},
        // {p: "this is **default** body font, that wraps to another line"},
        // {p18: "this is the **larger** sized body font"},
        // {p14: "this is the **smaller** sized body font"},
        // {divider: ""},
        // {img: "foodsHighInSodium"},
        // {video: "https://inhlrtrackdev.ochsner.org/Causeway/Videos/BP_Reading.mp4"},
        {ul: "this is an unordered item"},
        {ol: "1this is an ordered item"},
        {ol: "2this is the 2nd item"},
        {ol: "3this is the 3rd item in the list, and it wraps"},
        {check: "This is a checked item that wraps, and wraps again, and again"},
        {pageFooter: ""},
        {buttonBack: "Back"},
        {buttonNext: "Next"}
    ]

    const headerIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageHeader")
    const bodyIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageBody")
    const footerIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageFooter")

    const [accBodyIndex, setAccBodyIndex] = useState<number | null>(null);





    return (
        <div className="page">
            {headerIndex !== -1 &&
                <div className="page-header">
                    <ReactMarkdown className={`markdown-default p`} children={"Intro text lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ipsum vitae urna semper sodales ac et."}/>
                </div>
            }
            <div className="page-body">
                {moduleComponents.slice(bodyIndex, footerIndex).map((component, index) => {
                    const key: ContentComponent = ContentComponent[Object.keys(component)[0] as keyof typeof ContentComponent]
                    // let key = Object.keys(component)[0]
                    const value = Object.values(component)[0]
                    switch(key) {
                        case ContentComponent.iconWithText: return <h4>icon with text</h4>
                        case ContentComponent.img: return <img src={`${value}`}/>
                        case ContentComponent.video: return (
                            <video controls>
                                <source src={value} type="video/mp4" />
                            </video>
                        )
                        case ContentComponent.divider: return <div className='divider' />
                        case ContentComponent.check: return (
                            <div className="list" >
                                <BsCheckLg className="checkmark" />
                                <ReactMarkdown className={`markdown-default list-item`} children={value}/>
                            </div>
                        )
                        case ContentComponent.ul: return (
                            <div className="list" >
                                <BsCircleFill size={6} className="bullet" />
                                <ReactMarkdown className={`markdown-default list-item`} children={value}/>
                            </div>
                        )
                        case ContentComponent.ol: return (
                            <div className="list" >
                                <div className='ol-circle'>
                                    <div className='ol-number'>{value[0]}</div>
                                </div>
                                <ReactMarkdown className={`markdown-default list-item`} children={value.slice(1)}/>
                            </div>
                        )
                        case ContentComponent.accBody: 
                            return (
                            <div onClick={() => setAccBodyIndex(index)}>
                                {accBodyIndex === index &&
                                    <ReactMarkdown className={`markdown-default ${key}`} children={value}/>
                                }
                            </div>
                            )
                        default: return <ReactMarkdown className={`markdown-default ${key}`} children={value}/>
                    }

                    // return <h1>{key}</h1>

                })}
                <div className="spacer" />
                <div className="footer">
                    <div className="button back" onClick = {() => updatePage(1)}>Back</div>
                    <div className="button primary"onClick={() => window.location.assign("/complete")}>Close</div>
                </div>
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