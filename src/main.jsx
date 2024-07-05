import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CountCountextProvider from './contexts/CountContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountCountextProvider>
      <App />
    </CountCountextProvider>
  </React.StrictMode>
)
