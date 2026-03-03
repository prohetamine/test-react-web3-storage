import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StasPayProvider } from 'stas-pay'
import { BrowserRouter, Routes, Route } from 'react-router'
//import * as Web3 from 'react-web3-storage'
import * as Web3 from '/Users/stas/Desktop/redstone'
import App from './App.jsx'
import UseNote from './UseNote.jsx'
import UseReadNote from './UseReadNote.jsx'
import UseReadListItem from './UseReadListItem.jsx'
import UseList from './UseList.jsx'
import UseCounter from './UseCounter.jsx'
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
        <BrowserRouter basename="/test-react-web3-storage">
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<UseNote />} />
              <Route path='/use-read-note' element={<UseReadNote />} />
              <Route path='/use-list' element={<UseList />} />
              <Route path='/use-read-list-item' element={<UseReadListItem />} />
              <Route path='/use-counter' element={<UseCounter />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StasPayProvider>
    </Web3.Provider>
  </StrictMode>
)