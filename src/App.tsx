import React, { useState, useEffect } from 'react';
import { ContentComponent, ContentComponents, Module } from './types';
import './styling/MegaTemplate.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ModuleView from './ModuleView';



const App = () => {

  const contentComponentsRaw: ContentComponents = [
    [ContentComponent.pageHeader, ""],
    [ContentComponent.eyebrow, "Eyebrow text"],
    [ContentComponent.pageBody, ""],
    [ContentComponent.p, "Intro text lorem ipsum dolor sit amet, consectetur adipiscing elit.\n&nbsp;\nCurabitur vel ipsum vitae urna semper sodales ac et."],
    [ContentComponent.accordionHead, "Accordion head 1"],
    [ContentComponent.accordionBody, "Accordion body 1"],
    [ContentComponent.accordionHead, "Accordion head 2"],
    [ContentComponent.accordionBody, "Accordion body 2"],
    [ContentComponent.h1, "this is an h1 header"],
    [ContentComponent.h2, "this is an h2 header"],
    [ContentComponent.h3, "this is an **h3** header"],
    [ContentComponent.divider, ""],
    [ContentComponent.h4, "this is an h4 header"],
    [ContentComponent.pageFooter, ""],
    [ContentComponent.buttonBack, ""],
    [ContentComponent.buttonPrimary, ""]
  ]

  const testContents: Module = {
    pages: [{contentComponents: contentComponentsRaw, questionComponents: []}]
  }

  return (
    <Router>
      <Routes>
        <Route path="" element={<ModuleView moduleContents={testContents}/>} />
      </Routes>
    </Router>
  );

}

export default App;
