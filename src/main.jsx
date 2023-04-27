import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CVProvider from './context/CVContext.jsx'
import DisplayTypeProvider from './context/DisplayTypeContext.jsx'
import './assets/normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CVProvider>
      <DisplayTypeProvider>
        <App />
      </DisplayTypeProvider>
    </CVProvider>
  </React.StrictMode>,
)
