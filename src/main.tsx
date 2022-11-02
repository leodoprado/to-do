import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import GlobalStyles from './config/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
