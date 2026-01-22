import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import * as Web3 from 'react-web3-storage'
//import * as Web3 from '/Users/stas/Desktop/react-web3-storage'

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
  box-sizing: border-box;
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

const SButton = styled(motion.span)`
  margin: 3px;
  box-sizing: border-box;
  background-color: #fff;
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
  width: 450px;
  background-color: #dddddd;
  color: #444;
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
  width: 450px;
  box-sizing: border-box;
  background-color: #787878ff;
  color: #444;
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

const ComissionInputPrivateText = ({ id, onChange, placeholder }) => {
  const [state, setState, updateState, status] = Web3.stas.usePrivateStorage(id, '')

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state, onChange])

  return (
    <Overflow>
      <Title>stas.usePrivateStorage</Title>
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

const InputPrivateText = ({ id, onChange, placeholder }) => {
  const [state, setState, updateState, status] = Web3.usePrivateStorage(id, '')

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state, onChange])

  return (
    <Overflow>
      <Title>usePrivateStorage</Title>
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

const ComissionInputPublicText = ({ id, onChange, placeholder }) => {
  const [state, setState, updateState, status] = Web3.stas.useStorage(id, '')

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state, onChange])

  return (
    <Overflow>
      <Title>stas.useStorage</Title>
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
      <Title>useStorage</Title>
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

const ComissionPublicText = ({ id, address: _address }) => {
  const [address, setAddress] = useState(_address)
  const [state, status] = Web3.stas.useReadStorage(id, address)

  return (
    <Overflow>
      <Title>stas.useReadStorage</Title>
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

const PublicText = ({ id, address: _address }) => {
  const [address, setAddress] = useState(_address)
  const [state, status] = Web3.useReadStorage(id, address)

  return (
    <Overflow>
      <Title>useReadStorage</Title>
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

const ComissionInputTableText = ({ id, placeholder }) => {
  const [state, setState] = useState('')
  const [items, addItem, updateItem, status] = Web3.stas.useTableStorage(id)

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
      <Title>stas.useTableStorage</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          disabled={status.type === 'load' || status.type === 'connect' || status.type === 'upload'} 
          type="text" 
          placeholder={placeholder}
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
              items.filter(item => !item.isDelete).map((item, key) => (
                <Data key={key}>
                  <span>
                    {item.text}
                    <span style={{ marginLeft: '5px', color: '#999' }}>(index: {item.index} addr: {item.address.slice(0, 7)})</span> 
                    {
                      item.hasEdit 
                        ? (
                          <>
                            <SButton onClick={() => updateItem(item.index, state)}>edit</SButton>
                            <SButton onClick={() => updateItem(item.index, "")}>delete</SButton>
                          </>
                          )
                        : null
                    }
                  </span>
                </Data>
              ))
            )
            : null
        }
      </div>
    </Overflow>
  )
}


const InputTableText = ({ id, placeholder }) => {
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
      <Title>useTableStorage</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          disabled={status.type === 'load' || status.type === 'connect' || status.type === 'upload'} 
          type="text" 
          placeholder={placeholder}
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
              items.filter(item => !item.isDelete).map((item, key) => (
                <Data key={key}>
                  <span>
                    {item.text}
                    <span style={{ marginLeft: '5px', color: '#999' }}>(index: {item.index} addr: {item.address.slice(0, 7)})</span> 
                    {
                      item.hasEdit 
                        ? (
                          <>
                            <SButton onClick={() => updateItem(item.index, state)}>edit</SButton>
                            <SButton onClick={() => updateItem(item.index, "")}>delete</SButton>
                          </>
                          )
                        : null
                    }
                  </span>
                </Data>
              ))
            )
            : null
        }
      </div>
    </Overflow>
  )
}

const Vote = ({ id }) => {
  const [votes, setVote, status] = Web3Vote.useVote(id)

  return (
    <Overflow>
      <Title>useVote</Title>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => setVote()}>Click: {votes}</Button>
      </div>
      <Info>{JSON.stringify(status)}</Info>
    </Overflow>
  )
}

const VoteSplit = ({ id }) => {
  const [votes, setVote, status] = Web3Vote.useSplitVote(id, "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955")

  return (
    <Overflow>
      <Title>useSplitVote</Title>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => setVote()}>Click if you love mom, clicks: {votes}</Button>
      </div>
      <Info>{JSON.stringify(status)}</Info>
    </Overflow>
  )
}

const VoteOnce = ({ id }) => {
  const [likeVotes, setLikeVote, likeStatus] = Web3Vote.useVoteOnce(`like-${id}`)
      , [dislikeVotes, setDislikeVote, dislikestatus] = Web3Vote.useVoteOnce(`dislike-${id}`)

  return (
    <Overflow>
      <Title>useVoteOnce</Title>
      <div style={{ display: 'flex' }}>
        {
          likeVotes.hasVote && dislikeVotes.hasVote
            ? (
              <>
                <Button onClick={() => setLikeVote()}>{likeVotes.count} 👍</Button>
                <Button onClick={() => setDislikeVote()}>{dislikeVotes.count} 👎</Button>
              </>
            )
            : null
        }
        {
          !likeVotes.hasVote 
            ? (
              <Button onClick={() => setLikeVote()}>{likeVotes.count} 👍</Button>
            )
            : null
        }
        {
          !dislikeVotes.hasVote
            ? (
              <Button onClick={() => setDislikeVote()}>{dislikeVotes.count} 👎</Button>
            )
            : null
        }
      </div>
      <Info>{JSON.stringify(likeStatus)}</Info>
      <Info>{JSON.stringify(dislikestatus)}</Info>
    </Overflow>
  )
}

const CertificateCommissionID = () => {
  const [id, setId] = useState('')
  const [commission, setCommission] = useState(0)
  const [certificateCommission, setCertificateCommission, status] = Web3.stas.useCertificateCommissionID(id)

  return (
    <Overflow>
      <Title>stas.useCertificateCommissionID</Title>
      <div style={{ display: 'flex' }}>
        <Input
          type="text" 
          placeholder={'id'} 
          value={id} 
          onChange={({ target: { value } }) => setId(value)}
        />  
      </div>
      <div style={{ display: 'flex' }}>
        <Input
          type="text" 
          placeholder={''} 
          value={commission} 
          onChange={({ target: { value } }) => setCommission(value)}
        />  
        <Button onClick={() => setCertificateCommission(commission)}>Cert</Button>
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
      >Commission: {certificateCommission} STAS for id: {id || 'Empty'}</Data>
      <Info>{status.type === 'error' ? status.msg.reason : JSON.stringify(status)}</Info>
    </Overflow>
  )
}


const Navigation = ({ onChange }) => {
  return (
    <Overflow>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => onChange(0)}>Storage</Button>
        <Button onClick={() => onChange(1)}>Comission storage</Button>
        {/*<Button onClick={() => onChange(2)}>Vote</Button>
        <Button onClick={() => onChange(3)}>Comission storage</Button>*/}
      </div>
    </Overflow>
  )
}

export {
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
}