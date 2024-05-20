import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

/***************************************************************
  To run the full featured unfinished app uncomment 
  the import and ReactDOM createRoot below.
***************************************************************/

// import { App, Providers } from './app/index'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Providers>
//       <App />
//     </Providers>
//   </React.StrictMode>,
// )

/***************************************************************
  To run the working app that has cross app communication 
  uncomment the import and ReactDOM createRoot below.
***************************************************************/

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
