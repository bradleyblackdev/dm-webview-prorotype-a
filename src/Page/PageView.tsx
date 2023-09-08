import React, {useEffect, useState} from 'react';
import { ContentComponent, PageComponents } from '../types';
import '../styling/MegaTemplate.css'
import ComponentsView from './ComponentsView';

type PageViewProps = {
    pageComponents: PageComponents,
}

const PageView = ({ pageComponents }: PageViewProps) => {

    //CONTENT

    const contentComponents = pageComponents.contentComponents

    const headerIndex = contentComponents.findIndex(component => component[0] === ContentComponent.pageHeader)
    const bodyIndex = contentComponents.findIndex(component => component[0] === ContentComponent.pageBody)
    const footerIndex = contentComponents.findIndex(component => component[0] === ContentComponent.pageFooter)

    const headerComponents = contentComponents.slice(headerIndex, bodyIndex)
    const bodyComponents = contentComponents.slice(bodyIndex, footerIndex)
    const footerComponents = contentComponents.slice(footerIndex)
    const buttonBack = footerComponents.find(e => e[0] === ContentComponent.buttonBack)
    const buttonPrimary = footerComponents.find(e => e[0] === ContentComponent.buttonPrimary)

    //QUESTIONS

    //TO DO

    return (
        <div className="page">
            <div className="page-header">
                <ComponentsView components={headerComponents}/>
            </div>
            <div className="page-body">
                <ComponentsView components={bodyComponents}/>
                <div className="spacer" />
                <div className="footer">
                    {buttonBack !== undefined && <div className="button back" onClick = {() => {}}>{!buttonBack[1].length ? "Back" : buttonBack[1]}</div>}
                    {buttonPrimary !== undefined && <div className="button primary" onClick = {() => {}}>{!buttonPrimary[1].length ? "Next" : buttonPrimary[1]}</div>}
                </div>
            </div>
        </div>
    );
}

 export default PageView;


