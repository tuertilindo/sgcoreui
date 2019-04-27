import React from "react"
import ReactDOM from "react-dom"
import Log from "./components/logTable"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'
const rootElement = document.getElementById("root")
ReactDOM.render(
  <Log logs={[{message: "hola"}, {message: "Chau", type: "error"}]} />,
  rootElement
)
