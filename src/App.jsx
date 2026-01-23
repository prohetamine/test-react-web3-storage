/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react'
import * as Web3 from 'react-web3-storage'
import * as Web3Vote from 'react-web3-vote'
//import * as Web3 from '/Users/stas/Desktop/react-web3-storage'
//import * as Web3Vote from '/Users/stas/Desktop/react-web3-vote'

import {
    Body,
    WalletButton,
    ComissionInputPrivateText,
    InputPrivateText,
    ComissionInputPublicText,
    InputPublicText,
    ComissionPublicText,
    PublicText,
    ComissionInputTableText,
    InputTableText,
    Counter,
    ComissionCounter,
    Vote,
    ComissionVote,
    Like,
    ComissionLike,
    CertificateCommissionID,
    Navigation
} from './components.jsx'

const App = () => {
  const { isConnected, open } = Web3.useApp()
  const [section, setSection] = useState(0)

  const Web3Provider = section === 1 
                          ? Web3.stas.useCertificateCommissionID 
                          : Web3Vote.stas.useCertificateCommissionID

  return (
    <Body>
      <WalletButton onClick={() => open()}>{isConnected ? 'wallet' : 'connect'}</WalletButton>
      <Navigation onChange={section => setSection(section)}/>
      {
        section === 0
          ? (
            <div>
              <InputPrivateText id='input-1' placeholder='private text' />
              <InputPublicText id='input-1' placeholder='public text' />
              <PublicText id='input-1' address={process.env.NODE_ENV === 'development' ? '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' : '0xbcfA1b80C39F9a378b12b257934BE409Bc93eC60'} />
              <InputTableText id='input-1' placeholder='table text' />
            </div>
          )
          : section === 1
              ? (
                <div>
                  <CertificateCommissionID provider={Web3Provider} />
                  <ComissionInputPrivateText id='input-1' placeholder='commission private text' />
                  <ComissionInputPublicText id='input-1' placeholder='commission public text' />
                  <ComissionPublicText id='input-1' address={process.env.NODE_ENV === 'development' ? '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' : '0xbcfA1b80C39F9a378b12b257934BE409Bc93eC60'} />
                  <ComissionInputTableText id='input-1' placeholder='commission table text' />
                </div>
              )
              : section === 2
                  ? (
                    <div>
                      <Counter id='input-1' />
                      <Vote id='input-1' />
                      <Like id='input-1' />
                    </div>
                  )
                  : (
                    <div>
                      <CertificateCommissionID provider={Web3Provider} />
                      <ComissionCounter id='input-1' />
                      <ComissionVote id='input-1' />
                      <ComissionLike id='input-1' />
                    </div>
                  )
      }
    </Body>
  )
}

export default App