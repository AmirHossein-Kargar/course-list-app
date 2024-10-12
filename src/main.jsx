import React from "react"
import ReactDom from "react-dom/client"
import App from "./App.jsx"

const root = document.querySelector('.root')

ReactDom.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)