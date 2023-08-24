import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'


// Root file
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  </React.StrictMode>,
)
