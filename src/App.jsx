/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import * as Web3 from 'react-web3-storage'

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const InputPrivateText = ({ id, onChange, placeholder }) => {
  const [state, setState, updateState, status] = Web3.usePrivateStorage(id, '')

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state, onChange])

  return (
    <div style={{ display: 'flex' }}>
      <input disabled={status.type === 'load' ||status.type === 'connect' || status.type === 'upload'} type="text" placeholder={placeholder} value={state} onChange={({ target: { value } }) => setState(value)} />
      <button onClick={() => updateState()}>Save</button>
      <div>{JSON.stringify(status)}</div>
    </div>
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
    <div style={{ display: 'flex' }}>
      <input disabled={status.type === 'load' ||status.type === 'connect' || status.type === 'upload'} type="text" placeholder={placeholder} value={state} onChange={({ target: { value } }) => setState(value)} />
      <button onClick={() => updateState()}>Save</button>
      <div>{JSON.stringify(status)}</div>
    </div>
  )
}

const PublicText = ({ id, address }) => {
  const [state, status] = Web3.useReadStorage(id, address)

  return (
    <div style={{ display: 'flex' }}>{state}, {JSON.stringify(status)}</div>
  )
}

const InputTableText = ({ id }) => {
  const [state, setState] = useState('')
  const [items, addItem, updateItem, status] = Web3.useTableStorage(id)

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <input placeholder={`table id: ${id}`} type="text" value={state} onChange={({ target: { value } }) => setState(value)} />
        <button onClick={() => addItem(state)}>Add</button>
      </div>
      <div>{JSON.stringify(status)}</div>
      <br />
      <div>
        {
          status.type !== 'connect' 
            ? (
              items.filter(item => !item.isDelete).map(item => (
                <div key={item.index}>
                  {item.index} {item.text}
                  <button onClick={() => updateItem(item.index, "new string!")}>edit</button>
                  <button onClick={() => updateItem(item.index, "")}>delete</button>
                </div>
              ))
            )
            : null
        }
      </div>
    </div>
  )
}

const App = () => {
  const [isConnect, open] = Web3.useApp()

  return (
    <Body>
      <button onClick={() => open()}>{isConnect ? 'wallet' : 'connect'}</button>
      <InputPrivateText id='1' placeholder='private text' />
      <InputPublicText id='1' placeholder='public text' />
      <PublicText id='1' address='0xbcfA1b80C39F9a378b12b257934BE409Bc93eC60' />
      <InputTableText id='1' />
      <InputTableText id='2' />
    </Body>
  )
}

export default App