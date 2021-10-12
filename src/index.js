import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


function createObject() {

  console.log('outermost this', this);
  return {
    arrowFunction: () => {
      console.log("arrowFunction this", this);
    },
    functionKeywordFunction: function () {
      console.log('functionKeyword this', this);
    }
  }
}

const obj = createObject();
console.log('obj', obj)
obj.arrowFunction();
obj.functionKeywordFunction();


const createObject2 = () => {

  console.log('outermost 2 this', this);
  return {
    arrowFunction2: () => {
      console.log("arrowFunction 2 this", this);
    },
    functionKeywordFunction2: function () {
      console.log('functionKeyword 2 this', this);
    }
  }
}


const obj2 = createObject2();
console.log('obj2', obj2)
obj2.arrowFunction2();
obj2.functionKeywordFunction2();


