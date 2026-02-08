/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react'
import { useStasPay } from 'stas-pay'
//import * as Web3 from 'react-web3-storage'
//import * as Web3Vote from 'react-web3-vote'
import * as Web3 from '/Users/stas/Desktop/react-web3-storage'
import * as Web3Vote from '/Users/stas/Desktop/react-web3-vote'

import {
    Body,
    WalletButton,
    Navigation,
    UseStorage,
    UseTableStorage,
    UseReadStorage
    /*ComissionInputPrivateText,
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
    Navigation*/
} from './components.jsx'

const App = () => {
  const { isConnected, open } = Web3.useApp()
  const [section, setSection] = useState(1)

  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

  return (
    <Body>
      <WalletButton onClick={() => open()}>{isConnected ? 'wallet' : 'connect'}</WalletButton>
      <Navigation onChange={section => setSection(section)} />
      {
        section === 0
          ? (
            <div>
              <UseStorage 
                id='us-0' 
                data={{ stas: true, self: true, once: true }} 
                commission={0} 
                placeholder='Once self pay STAS'
              />
              <UseStorage 
                id='us-1' 
                data={{ stas: true, self: true, once: false }} 
                commission={1} 
                placeholder='Self pay STAS'
              />
              <UseStorage 
                id='us-2' 
                data={{ stas: true, self: false, once: true, address }} 
                commission={2} 
                placeholder='Once public pay STAS'
              />
              <UseStorage 
                id='us-3' 
                data={{ stas: true, self: false, once: false, address }} 
                commission={3} 
                placeholder='Public pay STAS'
              />
              <UseStorage 
                id='us-4' 
                data={{ stas: false, self: true, once: true }} 
                placeholder='Self once'
              />
              <UseStorage 
                id='us-5' 
                data={{ stas: false, self: true, once: false }} 
                placeholder='Self'
              />
              <UseStorage 
                id='us-6' 
                data={{ stas: false, self: false, once: true, address }} 
                placeholder='Public once'
              />
              <UseStorage 
                id='us-7' 
                data={{ stas: false, self: false, once: false, load: false, address }} 
                placeholder='Public'
              />
              <UseStorage 
                id='us-7' 
                data={{ stas: false, self: false, once: false, cache: 999999, address }} 
                placeholder='Public'
              />
              <UseStorage 
                id='us-7' 
                data={{ stas: false, self: false, once: false, value: 'Wait ... cache', address }} 
                placeholder='Public'
              />
            </div>
          )
          : section === 1 
              ? (
                <div>
                  <UseTableStorage 
                    id='uts-0'
                    data={{ stas: true, self: true, once: true }}
                    commission={4} 
                  />
                  <UseTableStorage 
                    id='uts-1'
                    data={{ stas: true, self: true, once: false }} 
                    commission={5} 
                  />
                  <UseTableStorage 
                    id='uts-2'
                    data={{ stas: true, self: false, once: true, address }}
                    commission={6} 
                  />
                  <UseTableStorage 
                    id='uts-3'
                    data={{ stas: true, self: false, once: false, address }}
                    commission={7} 
                  />
                  <UseTableStorage 
                    id='uts-4'
                    data={{ stas: false, self: true, once: true }}
                  />
                  <UseTableStorage 
                    id='uts-5'
                    data={{ stas: false, self: true, once: false }} 
                  />
                  <UseTableStorage 
                    id='uts-6'
                    data={{ stas: false, self: false, once: true, address }}
                  />
                  <UseTableStorage 
                    id='uts-7'
                    data={{ stas: false, self: false, once: false, address }}
                  />
                </div>
              ) 
              : (
                <div>
                  <UseReadStorage 
                    id='us-0' 
                    data={{ stas: true, self: true, once: true }} 
                  />
                  <UseReadStorage 
                    id='us-1' 
                    data={{ stas: true, self: true, once: false }} 
                  />
                  <UseReadStorage 
                    id='us-2' 
                    data={{ stas: true, self: false, once: true, address }} 
                  />
                  <UseReadStorage 
                    id='us-3' 
                    data={{ stas: true, self: false, once: false, address }} 
                  />
                  <UseReadStorage 
                    id='us-4' 
                    data={{ stas: false, self: true, once: true }} 
                  />
                  <UseReadStorage 
                    id='us-5' 
                    data={{ stas: false, self: true, once: false }} 
                  />
                  <UseReadStorage 
                    id='us-6' 
                    data={{ stas: false, self: false, once: true, address }} 
                  />
                  <UseReadStorage 
                    id='us-7' 
                    data={{ stas: false, self: false, once: false, cache: 999999, address }} 
                  />
                  <UseReadStorage 
                    id='us-7' 
                    data={{ stas: false, self: false, once: false, value: 'Wait ... cache', address }} 
                  />
                </div>
              )
      }

      {/*<Navigation onChange={section => setSection(section)}/>
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
      }*/}
    </Body>
  )
}

export default App