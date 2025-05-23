import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter.jsx'
import { WealthContextProvider } from './context/WealthContext.jsx'
import { SortProvider } from './context/SortContext.jsx'
import './styles/main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <WealthContextProvider>
      <SortProvider>
        <AppRouter />
      </SortProvider>
    </WealthContextProvider>
  </React.StrictMode>,
)
