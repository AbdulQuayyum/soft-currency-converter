import React from 'react'
import ReactDOM from 'react-dom/client'

import { Background } from './Theme/Index'
import { CurrencyProvider } from './Contexts/CurrencyContext'
import { ThemeProvider } from './Contexts/ThemeContext'
import App from './App.jsx'
import "./Styles/Index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background>
      <ThemeProvider>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </ThemeProvider>
    </Background>
  </React.StrictMode>,
)
