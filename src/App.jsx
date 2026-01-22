/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react'
import * as Web3 from 'react-web3-storage'
//import * as Web3 from '/Users/stas/Desktop/react-web3-storage'
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
    Vote,
    VoteSplit,
    VoteOnce,
    CertificateCommissionID,
    Navigation
} from './components.jsx'

const App = () => {
  const { isConnected, open } = Web3.useApp()
  const [section, setSection] = useState(1)

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
                  <CertificateCommissionID />
                  <ComissionInputPrivateText id='input-1' placeholder='commission private text' />
                  <ComissionInputPublicText id='input-1' placeholder='commission public text' />
                  <ComissionPublicText id='input-1' address={process.env.NODE_ENV === 'development' ? '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' : '0xbcfA1b80C39F9a378b12b257934BE409Bc93eC60'} />
                  <ComissionInputTableText id='input-1' placeholder='commission table text' />
                </div>
              )
              : section === 2
                  ? (
                    <div>
                      
                    </div>
                  )
                  : (
                    <div>
                        
                    </div>
                  )
      }
      
      
      {/*
        <Vote id='1' />
        <VoteSplit id="1" />
        <VoteOnce id='3' />
        <VoteOnce id='4' />
      */}
    </Body>
  )
}

export default App