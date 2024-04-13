import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnsCalcProvider } from './components/AnsCalcContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnsCalcProvider>
      <App />
    </AnsCalcProvider> 
  </React.StrictMode>,
)
