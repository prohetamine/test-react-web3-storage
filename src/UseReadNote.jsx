import { Body, UseReadNote } from './components.jsx'

const _UseReadNote = () => {
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

  return (
    <Body>
      <div>
        <UseReadNote 
          id={null} 
          data={{ primaryId: 'PNS', address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' }}
          placeholder='PRIMARY WRITE ME!'
        />
        <UseReadNote 
          id='un-[empty]' 
          data={{ }}
          placeholder='empty NO WRITE ME'
        />
        <UseReadNote 
          id='un-[empty-allow-write]' 
          data={{ }}
          placeholder='Write here'
        />
        <UseReadNote 
          id='un-[value]' 
          data={{ value: 'Custom value' }}
          placeholder={`Value...`}
        />
        <UseReadNote 
          id='un-[address]' 
          data={{ address }}
          placeholder={`Address... ${address}`}
        />
        <UseReadNote 
          id='un-[load]'
          data={{ watch: false }}
          placeholder='Load... read me only'
        />
        <UseReadNote 
          id='un-[load]'
          data={{ watch: true, interval: 5000 }}
          placeholder='Load... read me only'
        />
        <UseReadNote 
          id='un-[once]' 
          data={{ once: true }} 
          placeholder='Once write here!'
        />
        <UseReadNote 
          id='un-[self]' 
          data={{ self: true }} 
          placeholder='Self - text for you!'
        />
        <UseReadNote 
          id='un-[self-read]' 
          data={{ self: true, selfRead: true }} 
          placeholder='Self read - write text you and read people!'
        />
        <UseReadNote 
          id='un-[self-read]' 
          data={{ self: true, selfRead: true, address }} 
          placeholder='Self read - write text you and read people!'
        />
        <UseReadNote 
          id='un-[single]' 
          data={{ single: true }} 
          placeholder='Single read'
        />
        <UseReadNote 
          id='un-[stas]' 
          data={{ stas: true }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin'
        />
        <UseReadNote 
          id='un-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin (COPY)'
        />
        <UseReadNote 
          id='un-[random-hash]' 
          data={{ randomHash: true }}
          placeholder='Write and generate random hash...'
        />
        <UseReadNote 
          id='un-[random-hash-for-address]' 
          data={{ randomHash: true, address }}
          placeholder='Write and generate random hash...'
        />
        <UseReadNote 
          id='un-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Write and ... cache'
        />
        <UseReadNote 
          id='un-[cache]' 
          data={{ }}
          placeholder='Read ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseReadNote