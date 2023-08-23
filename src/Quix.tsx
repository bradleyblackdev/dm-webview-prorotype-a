import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";

const Quiz = () => {

const [answer, setAnswer] = useState("")


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
    <div className="App">
      <body className="App-body">
        {elements3.map((element, i) => {
          // let key = Object.keys(element)[0]
          // let value = Object.values(element)[0]
          let key = element.localName
          let value = element.innerHTML
          if (key === "button") {
            const selected = answer === value
            return <p style={{color: selected ? "pink" : "white", fontWeight: selected ? 800 : 500}} onClick={() => {
              setAnswer(value)
              window.history.forward()
            }}>{value}</p>
          } if (key === "video") {
            return <video width="320" height="240" controls autoPlay>
                <source src={value} type="video/mp4" />
                Your browser does not support the video tag.
            </video> 

          } else {
            return React.createElement(key, {}, value)
          }
        })}
        <Link to="/complete">
            <h3 onClick={() => window.history.back()}>Complete</h3>
        </Link>
      </body>
    </div>
  );
}

export default Quiz;

export enum Fruit {
  Apple = "apple",
  Banana = "banana",
  Coconut = "coconut"
}