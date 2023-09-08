import React, { useState, useEffect } from 'react';
import { Module } from './types';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import './styling/MegaTemplate.css';
import PageView from './Page/PageView';

type ModuleProps = {
    moduleContents: Module,
}

const ModuleView = ( {moduleContents}: ModuleProps) => {

const [page, setPage] = useState(1)

    return (
        <TransitionGroup  className={`transition-group ${page === 1 ? "fwd" : "back"}`}>
            <CSSTransition
                key={page}
                timeout={{ enter: 0, exit: 400 }}
                classNames={'transition-wrap'}
            >
                <section className={`route-section`}>
                    {moduleContents.pages.map(pageComponents => <PageView pageComponents={pageComponents}/>)}
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default ModuleView;
