import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router'
import { useStasPay } from 'stas-pay'

//import * as Web3 from 'react-web3-storage'
import * as Web3 from '/Users/stas/Desktop/react-web3-storage'

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
  color: #202020;
  padding: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
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
  background-color: #5b5b5b;
  color: #d0d0d0;
  padding: 5px 9px;
  border: 3px solid #00000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  outline: none;
`

const Button = styled(motion.div)`
  margin: 5px;
  box-sizing: border-box;
  background-color: #b3b3b3;
  color: #2b2b2b;
  padding: 5px 9px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  outline: none;
`

const SButton = styled(motion.span)`
  margin: 3px;
  box-sizing: border-box;
  background-color: #bfbebe;
  padding: 2px 4px;
  border-radius: 4px;
  color: #444;
  border: none;
  font-size: 16px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  outline: none;
`

const Data = styled(motion.div)`
  margin: 5px;
  width: calc(100% - 10px);
  background-color: #5b5b5b;
  color: #d0d0d0;
  padding: 15px;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
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

const Overflow = styled.div`
  max-width: 900px;
  min-width: 100px;
  background-color: rgb(131, 131, 131);
  padding: 5px;
  border-radius: 4px;
  transform: translate(0px, 0px);
  margin-bottom: 20px;
`

const Info = styled(motion.div)`
  margin: 5px;
  width: calc(100% - 10px);
  box-sizing: border-box;
  background-color: rgb(63, 63, 63);
  color: #838383;
  padding: 15px;
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

const Navigation = () => (
  <Overflow>
    <div style={{ display: 'flex' }}>
      <Link to='/'>
        <Button>useNote</Button>
      </Link>
      <Link to='/use-read-note'>
        <Button>useReadNote</Button>
      </Link>
      <Link to='/use-list'>
        <Button >useList</Button>
      </Link>
      <Link to='/use-counter'>
        <Button>useCounter</Button>
      </Link>
    </div>
  </Overflow>
)

const UseNote = ({ id, onChange, placeholder, data, commission: _commission }) => {
  const note = Web3.useNote(id, data)
      , cert = Web3.useCertificateCommissionID(id)
      , confirm = useStasPay()

  useEffect(() => {
    if (onChange) {
      onChange(note.value)
    }
  }, [note.value, onChange])

  const handleClick = async () => {
    const _cert = await cert.recheck()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0 && data.stas === true) {
      const commission = await cert.getCommission()
      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateState(_commission)
      }
    }

    const commission = await note.getCommission()
    const isConfirm = await confirm(commission)
    if (isConfirm) {
      const isUpdate = await note.updateValue()
      if (!isUpdate) {
        alert('Error')
      }
    }
  }

  return (
    <Overflow
      style={{ 
        border: note.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : note.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : note.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    > 
      <Title>useNote("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          type="text" 
          placeholder={placeholder} 
          value={note.value} 
          onChange={({ target: { value } }) => note.setValue(value)}
        />
        <Button onClick={handleClick}>Save</Button>
      </div>
      <Info>{JSON.stringify(note.status)}</Info>
    </Overflow>
  )
}

const UseList = ({ id, placeholder, data, commission: _commission }) => {
  const [state, setState] = useState('')
  const list = Web3.useList(id, data)
      , cert = Web3.useCertificateCommissionID(id)
      , confirm = useStasPay()

  const handleClick = async () => {
    const _cert = await cert.recheck()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0 && data.stas === true) {
      const commission = await cert.getCommission()

      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateState(_commission)
      }
    }

    const commission = await list.getCommission()
    const isConfirm = await confirm(commission)
    if (isConfirm) {
      const isUpdate = await list.addValue(state)
      if (!isUpdate) {
        alert('Error')
      }
    }
  }

  return (
    <Overflow
      style={{ 
        border: list.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : list.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : list.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >

      <Title>UseList("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          type="text"
          placeholder={placeholder}
          value={state} 
          onChange={({ target: { value } }) => setState(value)}
        />
        <Button onClick={handleClick}>Save</Button>
      </div>
      <Info>{JSON.stringify(list.status)}</Info>
      <div>
        {
          list.value.map((item, key) => (
            <Data key={key}>
              <span>
                {item.text}
                <span style={{ marginLeft: '5px', color: '#999' }}>(index: {item.index} addr: {item.address.slice(0, 7)} chainId: {item.chainId})</span> 
                <SButton onClick={() => list.updateValue(item.index, state)}>edit</SButton>
                <SButton onClick={() => list.updateValue(item.index, "")}>delete</SButton>
                {item.hasEdit ? '(Edit)' : '(NO Edit)'}
              </span>
            </Data>
          ))
        }
      </div>
    </Overflow>
  )
}

const UseReadNote = ({ id, onChange, data, placeholder }) => {
  const note = Web3.useReadNote(id, data)

  useEffect(() => {
    if (onChange) {
      onChange(note.value)
    }
  }, [note.value, onChange])

  return (
    <Overflow
      style={{ 
        border: note.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : note.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : note.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useReadNote("{id}", {JSON.stringify(data)})</Title>
      <Data style={{ color: note.value ? '#fff' : '#909090' }}>{note.value || placeholder}</Data>
      <Info>{JSON.stringify(note.status)}</Info>
    </Overflow>
  )
}

const UseCounter = ({ id, data, placeholder, commission: _commission }) => {
  const counter = Web3.useCounter(id, data)
      , cert = Web3.useCertificateCommissionID(id)
      , confirm = useStasPay()

  const handleClick = async () => {
    const _cert = await cert.recheck()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0 && data.stas === true) {
      const commission = await cert.getCommission()
      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateState(_commission)
      }
    }

    const commission = await counter.getCommission()
    const isConfirm = await confirm(commission)
    if (isConfirm) {
      const isUpdate = await counter.updateState()
      if (!isUpdate) {
        alert('Error')
      }
    }
  }
  
  return (
    <Overflow
      style={{ 
        border: counter.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : counter.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : counter.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useCounter("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleClick}>{placeholder}: {counter.value.count} {counter.value.voted ? '(voted)' : ''}</Button>
      </div>
      <Info>{JSON.stringify(counter.status)}</Info>
    </Overflow>
  )
}

export {
    Body,
    WalletButton,
    Navigation,
    UseNote,
    UseList,
    UseReadNote,
    UseCounter
}