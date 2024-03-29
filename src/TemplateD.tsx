import React, {useEffect, useState} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactMarkdown from "react-markdown";
import './MegaTemplate.css'
import { Link } from 'react-router-dom'
import { BsCheckLg, BsCircleFill, BsPlusLg, BsDashLg } from 'react-icons/bs'

enum ContentComponent {
    pageProgress = "pageProgress",
    pageHeader = "pageHeader",
    pageBody = "pageBody",
    pageFooter = "pageFooter",
    pageXofX = "pageXofX",
    iconWithText = "iconWithText",
    didYouKnow = "didYouKnow",
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

type TemplateDProps = {
    updatePage: (page: number) => void
}

const TemplateD = ({ updatePage }: TemplateDProps) => {

    const moduleComponents: { [key in ContentComponent]?: string }[] = [
        {pageHeader:""},
        // {pageXofX: ""},
        {eyebrow: "i have 2 eyebrows"},
        {pageBody: ""},
        // {iconWithText: "lightbulbIcon | Expert Tip"},
        {h1: "this is an h1 header"},
        // {h2: "this is an h2 header"},
        {accordionHead: "accordion head 1"},
        {accordionBody: "accordion body 1"},
        {accordionHead: "accordion head 2"},
        {accordionBody: "accordion body 2"},
        // {accordionHead: "accordion head 3"},
        {h1: "this is an h1 header"},
        {h2: "this is an h2 header"},
        {h3: "this is an **h3** header"},
        // {h4: "this is an h4 header"},
        // {eyebrow: "this is an eyebrow"},
        // {p: "this is **default** body font, that wraps to another line"},
        // {p18: "this is the **larger** sized body font"},
        // {p14: "this is the **smaller** sized body font, that wraps to another line"},
        // {divider: ""},
        // {img: "foodsHighInSodium"},
        // {ul: "this is an unordered item"},
        // {ol: "1this is an ordered item"},
        // {ol: "2this is the 2nd item"},
        // {ol: "3this is the 3rd item in the list, and it wraps"},
        // {check: "This is a checked item that wraps, and wraps again, and again"},
        // {didYouKnow: "{title: 'Did You Know?', image: 'lightbulb', subtext: 'supporting text goes here'}"},
        // {pageFooter: ""},
        // {buttonBack: "Back"},
        // {buttonPrimary: "Next"}
    ]

    const moduleComponentsJSON = JSON.stringify(moduleComponents)

    const headerIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageHeader")
    const bodyIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageBody")
    const footerIndex = moduleComponents.map(component => Object.keys(component)).flat().indexOf("pageFooter")

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
                        case ContentComponent.accordionHead: 
                        if (index !== 0 && Object.keys(bodyComponents[index - 1])[0].includes("accordion")) {
                            break
                        }
                        const finalAccordionIndex = bodyComponents.slice(index).findIndex(element => !Object.keys(element)[0].includes("accordion"))
                        const arf = (
                            bodyComponents.slice(index, finalAccordionIndex + index).map((e, i, a) => {
                                if (Object.keys(e)[0] === key) {
                                    const headerText = Object.values(e)[0]
                                    const bodyText = Object.values(a[i + 1])[0]
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
                        // return <h3>hello</h3>
                        case ContentComponent.accordionBody: break
                        // if bodyComponents[index - 1]
                        // return
                        // case ContentComponent.accordianBody: 
                        //     return (
                        //     <div onClick={() => setAccBodyIndex(index)}>
                        //         {accBodyIndex === index &&
                        //             <ReactMarkdown className={`markdown-default ${key}`} children={value}/>
                        //         }
                        //     </div>
                        //     )
                        default: return <ReactMarkdown className={`markdown-default ${key}`} children={value}/>
                    }

                    // return <h1>{key}</h1>

                })}
                <div className="spacer" />
                <div className="footer">
                    {/* <div className="button back" onClick = {() => updatePage(1)}>Back</div> */}
                    <div className="button primary" onClick = {() => updatePage(2)}>Next</div>
                    {/* <div className="button primary"onClick={() => window.location.assign("/complete")}>Close</div> */}
                </div>
            </div>
        </div>
    );
}

 export default TemplateD;
