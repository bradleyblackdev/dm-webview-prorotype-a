import React, {useEffect, useState} from 'react';
import { ContentComponent, ContentComponents } from '../types';
import ReactMarkdown from "react-markdown";
import '../styling/MegaTemplate.css';
import { BsCheckLg, BsCircleFill, BsPlusLg, BsDashLg } from 'react-icons/bs'

type ContentComponentsProps = {
    components: ContentComponents,
}

const ComponentsView = ({ components }: ContentComponentsProps) => {

    const [accordionSelection, setAccordionSelection] = useState<string | null>(null);

    return (
        <div>
            {components.map((component, index) => {
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
                    if (index !== 0 && components[index - 1][0].includes("accordion")) {
                        return null
                    }
                    const finalAccordionIndex = components.slice(index).findIndex(element => !element[0].includes("accordion"))
                    return <div className={"accordion-rect"}>
                            {components.slice(index, finalAccordionIndex + index).map((e, i, a) => {
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
                        })}
                    </div>
                    case ContentComponent.accordionBody: break
                    default: return <ReactMarkdown className={`markdown-default ${key}`} children={value}/>
                }
                return null
            })}
        </div>
    );
}

 export default ComponentsView;


