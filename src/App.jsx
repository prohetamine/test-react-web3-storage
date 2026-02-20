//import * as Web3 from 'react-web3-storage'
import * as Web3 from '/Users/stas/Desktop/react-web3-storage'
import { Outlet } from 'react-router'

import {
    Body,
    WalletButton,
    Navigation,
} from './components.jsx'

const App = () => {
  const { isConnected, open } = Web3.useApp()

  return (
    <Body>
      <WalletButton onClick={() => open()}>{isConnected ? 'wallet' : 'connect'}</WalletButton>
      <Navigation />
      <Outlet />
    </Body>
  )
}

export default App