import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Web3 from '/Users/stas/Desktop/react-web3-storage'
import App from './App.jsx'
import './index.css'

const config = {
  metadata: {
    name: 'React Web3 Storage',
    description: 'Example DApp with React Web3 Storage',
    url: 'https://prohetamine.github.io/react-web3-storage/',
    icons: ['https://prohetamine.github.io/react-web3-storage/icon.svg']
  },
  projectId: '1febfd92481d4ea997711d2ac4a363c0',
  host: window.location.host+'/react-web3-storage/',
  defaultNetwork: process.env.NODE_ENV === 'development' ? Web3.config.blockChainsData[0].name : 'bnb'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web3.Provider config={config}>
       <App />
    </Web3.Provider>
  </StrictMode>
)
