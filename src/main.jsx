import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StasPayProvider } from 'stas-pay'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
//import * as Web3 from 'react-web3-storage'
import * as Web3 from '/Users/stas/Desktop/react-web3-storage'
import App from './App.jsx'
import UseStorage from './UseStorage.jsx'
import UseReadStorage from './UseReadStorage.jsx'
import UseTableStorage from './UseTableStorage.jsx'
import UseVote from './UseVote.jsx'
import './index.css'

const config = {
  metadata: {
    name: 'React Web3 Storage',
    description: 'Example DApp with React Web3 Storage',
    url: 'https://prohetamine.github.io/react-web3-storage/',
    icons: ['https://prohetamine.github.io/react-web3-storage/icon.svg']
  },
  projectId: '1febfd92481d4ea997711d2ac4a363c0',
  host: window.location.host+'/react-web3-storage/'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web3.Provider config={config}>
      <StasPayProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<UseStorage />} />
              <Route path='/use-read-storage' element={<UseReadStorage />} />
              <Route path='/use-table-storage' element={<UseTableStorage />} />
              <Route path='/use-vote' element={<UseVote />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StasPayProvider>
    </Web3.Provider>
  </StrictMode>
)