import React, { useState, useEffect } from 'react';
import './MegaTemplate.css';
import Quiz from './Quix';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import TemplateB from './TemplateBAnimated';
import TemplateC from './TemplateCComponents';
import ReactMarkdown from "react-markdown";



const App = () => {

const [rawAnswer, setRawAnswer] = useState(`["","apple","3","","twice a week","complete"]`)
const [page, setPage] = useState(1)


const setAnswer = (answer: String) => {
  if (answer === "complete") {
    window.location.assign("/complete")
  }
}

const pressNext = () => {

}

const answer = () => {

  return "wow"
}

const elements2: { [key:string]: string }[] = [
  {"h1":"hello newman"},
  {"h2":"please select your favorite fruit"},
  {"button":"Apple"},
  {"button":"Banana"},
  {"video":"https://file-examples.com/storage/fe3b4f721f64dfeffa49f02/2017/04/file_example_MP4_480_1_5MG.mp4"}
]

const elements3Raw = `
<div>
  <h1>hello world</h1>
  <h2>please select your favorite meal</h2>
  <button>Salad</button>
  <button>Pizza</button>
  <video>https://file-examples.com/storage/fe3b4f721f64dfeffa49f02/2017/04/file_example_MP4_480_1_5MG.mp4</video>
</div>
`
let parser = new DOMParser()
let parsedHtml = parser.parseFromString(elements3Raw, "text/html")
const elements3 = Array.from(parsedHtml.querySelectorAll("div")[0].children)

useEffect(() => {
  console.log(elements3)
}, [])

return (
  <Router>
    <Routes>
      {/* {["/", "hello"].map(path => {
        return <Route path={path} element={<TemplateB />}/>

      })
}
      <Route path="complete" element={<Complete />} /> */}
          <Route path="" element={<TemplateB />} />
    </Routes>
  </Router>
);

function Home() {
return <h2>Homes</h2>;
}

function Complete() {
return (<Link to="/">reset</Link>)
}

function Users() {
return <h2>Users</h2>;
}

}

export default App;
