import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx' // adjust path since it's in /components
import './index.css' // if using Tailwind (optional)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
