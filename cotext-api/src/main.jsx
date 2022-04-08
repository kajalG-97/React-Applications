import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { RegistrationContextProvider } from './components/RegistrationContext';

ReactDOM.render(
  <React.StrictMode>
    <RegistrationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegistrationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
