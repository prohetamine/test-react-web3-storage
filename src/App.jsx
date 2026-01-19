/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import * as Web3 from 'react-web3-storage'
import { motion } from 'framer-motion'

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const WalletButton = styled(motion.div)`
  position: fixed;
  right: 15px;
  top: 15px;
  min-width: 100px;
  background-color: #EAFF00;
  color: #444;
  padding: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  transform: translate(0px, 0px);
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.25);
`

const Title = styled.div`
  margin: 10px;
  margin-bottom: 5px;
  color: #000;
  font-family: "SUSE Mono", sans-serif;
  font-size: 18px;
`

const Input = styled(motion.input)`
  width: 100%;
  box-sizing: border-box;
  margin: 5px;
  background-color: #fff;
  color: #444;
  padding: 5px 9px;
  border: 3px solid #00000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  transform: translate(0px, 0px);
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.25);
  outline: none;
`

const Button = styled(motion.button)`
  margin: 5px;
  background-color: #fff;
  color: #444;
  padding: 5px 9px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  transform: translate(0px, 0px);
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.25);
  outline: none;
`

const Data = styled(motion.div)`
  margin: 5px;
  width: 400px;
  background-color: #dddddd;
  color: #444;
  padding: 5px 9px;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  outline: none;
  overflow-wrap: break-word; 
  word-break: normal; 
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`

const Overflow = styled(motion.div)`
  min-width: 100px;
  background-color: #9a9a9aff;
  padding: 5px;
  border-radius: 4px;
  transform: translate(0px, 0px);
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`

const Info = styled(motion.div)`
  margin: 5px;
  width: 400px;
  background-color: #787878ff;
  color: #444;
  padding: 5px 9px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  outline: none;
  overflow-wrap: break-word; 
  word-break: normal; 
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`

const InputPrivateText = ({ id, onChange, placeholder }) => {
  const [state, setState, updateState, status] = Web3.usePrivateStorage(id, '')

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state, onChange])

  return (
    <Overflow>
      <Title>Private Text</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          initial={{ border: '3px solid #00000000' }}
          animate={{ 
            border: status.type === 'loaded' 
                      ? ['3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)']
                      : status.type === 'load' 
                        ? ['3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                        : status.type === 'connected' 
                            ? ['3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                            : status.type === 'error' 
                                ? ['3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                                : '3px solid #00000000'
          }}
          transition={{ duration: 1, times: [0, 0.3, 0.6, 1] }}
          disabled={status.type === 'load' || status.type === 'connect' || status.type === 'upload'} 
          type="text" 
          placeholder={placeholder} 
          value={state} 
          onChange={({ target: { value } }) => setState(value)}
        />
        <Button onClick={() => updateState()}>Save</Button>
      </div>
      <Info>{JSON.stringify(status)}</Info>
    </Overflow>
  )
}

const InputPublicText = ({ id, onChange, placeholder }) => {
  const [state, setState, updateState, status] = Web3.useStorage(id, '')

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state, onChange])

  return (
    <Overflow>
      <Title>Public Text</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          initial={{ border: '3px solid #00000000' }}
          animate={{ 
            border: status.type === 'loaded' 
                      ? ['3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)']
                      : status.type === 'load' 
                        ? ['3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                        : status.type === 'connected' 
                            ? ['3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                            : status.type === 'error' 
                                ? ['3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                                : '3px solid #00000000'
          }}
          transition={{ duration: 1, times: [0, 0.3, 0.6, 1] }}
          disabled={status.type === 'load' || status.type === 'connect' || status.type === 'upload'} 
          type="text" 
          placeholder={placeholder} 
          value={state} 
          onChange={({ target: { value } }) => setState(value)}
        />
        <Button onClick={() => updateState()}>Save</Button>
      </div>
      <Info>{JSON.stringify(status)}</Info>
    </Overflow>
  )
}

const PublicText = ({ id, address: _address }) => {
  const [address, setAddress] = useState(_address)
  const [state, status] = Web3.useReadStorage(id, address)

  return (
    <Overflow>
      <Title>Public Text (read)</Title>
      <div style={{ display: 'flex' }}>
        <Input
          type="text" 
          placeholder={'Address... 0x0000'} 
          value={address} 
          onChange={({ target: { value } }) => setAddress(value)}
        />  
      </div>
      <Data
        initial={{ border: '3px solid #00000000' }}
        animate={{ 
          border: status.type === 'loaded' 
                    ? ['3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)']
                    : status.type === 'load' 
                      ? ['3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                      : status.type === 'connected' 
                          ? ['3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                          : status.type === 'error' 
                              ? ['3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                              : '3px solid #00000000'
        }}
        transition={{ duration: 1, times: [0, 0.3, 0.6, 1] }}
      >{state}</Data>
      <Info>{JSON.stringify(status)}</Info>
    </Overflow>
  )
}

const InputTableText = ({ id }) => {
  const [state, setState] = useState('')
  const [items, addItem, updateItem, status] = Web3.useTableStorage(id)

  return (
    <Overflow
      initial={{ border: '3px solid #00000000' }}
      animate={{ 
        border: status.type === 'loaded' 
                  ? ['3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(65, 206, 0, 1)', '3px solid rgba(20, 199, 0, 0)']
                  : status.type === 'load' 
                    ? ['3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 205, 0, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                    : status.type === 'connected' 
                        ? ['3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(0, 124, 232, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                        : status.type === 'error' 
                            ? ['3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)', '3px solid rgba(232, 0, 31, 1)', '3px solid rgba(20, 199, 0, 0)'] 
                            : '3px solid #00000000'
      }}
      transition={{ duration: 1, times: [0, 0.3, 0.6, 1] }}
    >
      <Title>Table Text (id{id})</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          disabled={status.type === 'load' || status.type === 'connect' || status.type === 'upload'} 
          type="text" 
          value={state} 
          onChange={({ target: { value } }) => setState(value)}
        />
        <Button onClick={() => addItem(state)}>Save</Button>
      </div>
      <Info>{JSON.stringify(status)}</Info>
      <div>
        {
          status.type !== 'connect' 
            ? (
              items.filter(item => !item.isDelete).map(item => (
                <Data key={item.index}>
                  text: {item.text} (index: {item.index} addr: {item.address.slice(0, 5)})
                  <Button onClick={() => updateItem(item.index, "new string!")}>edit</Button>
                  <Button onClick={() => updateItem(item.index, "")}>delete</Button>
                </Data>
              ))
            )
            : null
        }
      </div>
    </Overflow>
  )
}

const App = () => {
  const [isConnect, open] = Web3.useApp()

  return (
    <Body>
      <WalletButton onClick={() => open()}>{isConnect ? 'wallet' : 'connect'}</WalletButton>
      <InputPrivateText id='1' placeholder='private text' />
      <InputPublicText id='1' placeholder='public text' />
      <PublicText id='1' address={process.env.NODE_ENV === 'development' ? '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' : '0xbcfA1b80C39F9a378b12b257934BE409Bc93eC60'} />
      <InputTableText id='1' />
      <InputTableText id='2' />
    </Body>
  )
}

export default App