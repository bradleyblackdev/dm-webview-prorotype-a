import React, {useEffect, useState} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactMarkdown from "react-markdown";
import './MegaTemplate.css'
import { Link } from 'react-router-dom'
import { BsCheckLg, BsCircleFill, BsPlusLg, BsDashLg } from 'react-icons/bs'

enum ContentComponent {
    pageProgress = "pageProgress", //maybe here or module level
    pageHeader = "pageHeader",
    pageBody = "pageBody",
    pageFooter = "pageFooter",
    pageXofX = "pageXofX", //is this needed in addition to progress bar?
    iconWithText = "iconWithText", //to do
    // didYouKnow = "didYouKnow", //nice to have
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
    accordionHead = "accordionHead",
    accordionBody = "accordionBody",
    divider = "divider",
    buttonBack = "buttonBack",
    buttonPrimary = "buttonPrimary"
}

type TemplateEProps = {
    updatePage: (page: number) => void
}

type ContentComponents = [ContentComponent,string][]

const TemplateE = ({ updatePage }: TemplateEProps) => {

    const moduleComponentsRaw: ContentComponents = [
        [ContentComponent.pageHeader, ""],
        [ContentComponent.pageBody, ""],
        [ContentComponent.accordionHead, "Accordion head 1"],
        [ContentComponent.accordionBody, "Accordion body 1"],
        [ContentComponent.accordionHead, "Accordion head 2"],
        [ContentComponent.buttonBack, "hello"],
        [ContentComponent.accordionBody, "Accordion body 2"],
        [ContentComponent.divider, ""],
        [ContentComponent.h1, "this is an h1 header"],
        [ContentComponent.h2, "this is an h2 header"],
        [ContentComponent.h3, "this is an **h3** header"],
        [ContentComponent.h4, "this is an h4 header"],
        [ContentComponent.pageFooter, ""],
    ]

    const moduleComponentsJSON = JSON.stringify(moduleComponentsRaw)
    const moduleComponents: ContentComponents = JSON.parse(moduleComponentsJSON)

    const headerIndex = moduleComponents.findIndex(component => component[0] === ContentComponent.pageHeader)
    const bodyIndex = moduleComponents.findIndex(component => component[0] === ContentComponent.pageBody)
    const footerIndex = moduleComponents.findIndex(component => component[0] === ContentComponent.pageFooter)

    // const headerComponents
    const bodyComponents = moduleComponents.slice(bodyIndex, footerIndex)
    const footerComponents = moduleComponents.slice(footerIndex)

    const [accordionSelection, setAccordionSelection] = useState<string | null>(null);

    return (
        <div className="page">
            {headerIndex !== -1 &&
                <div className="page-header">
                    <ReactMarkdown className={`markdown-default p`} children={"Intro text lorem ipsum dolor sit amet, consectetur adipiscing elit.\n&nbsp;\nCurabitur vel ipsum vitae urna semper sodales ac et."}/>
                </div>
            }
            <div className="page-body">
                {bodyComponents.map((component, index) => {
                    const key = component[0]
                    const value: string = component[1]
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
                        case ContentComponent.accordionHead: 
                        // if (index !== 0 && Object.keys(bodyComponents[index - 1])[0].includes("accordion")) {
                        if (index !== 0 && bodyComponents[index - 1][0].includes("accordion")) {
                            break
                        }
                        const finalAccordionIndex = bodyComponents.slice(index).findIndex(element => !element[0].includes("accordion"))
                        const arf = (
                            bodyComponents.slice(index, finalAccordionIndex + index).map((e, i, a) => {
                                if (e[0] === key) {
                                    const headerText = e[1]
                                    const bodyText = a[i + 1][1]
                                    const selected = headerText+bodyText === accordionSelection
                                    return (
                                        <div>
                                            <div className={"accordion-row pressable"} onClick={() => setAccordionSelection(headerText+bodyText)}>
                                                <ReactMarkdown className={`markdown-default ${key}`} children={headerText}/>
                                                {selected ? <BsDashLg className='accordion-minus'/> : <BsPlusLg className='accordion-plus'/>}
                                            </div>
                                            {selected &&
                                            <ReactMarkdown className={`markdown-default ${'accordionBody'}`} children={bodyText}/>}                                            {a.length - 2 !== i && <div className='accordion-divider'/>}
                                        </div>
                                )} else {
                                    return null
                                }
                            })
                        )
                        return <div className={"accordion-rect"}>
                            {arf}
                            </div>
                        case ContentComponent.accordionBody: break
                        default: return <ReactMarkdown className={`markdown-default ${key}`} children={value}/>
                    }
                })}
                <div className="spacer" />
                <div className="footer">
                    <div className="button back" onClick = {() => updatePage(1)}>Back</div>
                    <div className="button primary" onClick = {() => updatePage(2)}>Next</div>
                    {/* <div className="button primary"onClick={() => window.location.assign("/complete")}>Close</div> */}
                </div>
            </div>
        </div>
    );
}

 export default TemplateE;


