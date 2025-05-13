import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import AppRouter from './router/AppRouter.jsx'
import './styles/main.scss'
import { WealthContextProvider } from './context/WealthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WealthContextProvider>
      <AppRouter />
    </WealthContextProvider>
  </React.StrictMode>,
)
