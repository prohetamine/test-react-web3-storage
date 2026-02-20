import { Body, UseNote } from './components.jsx'

const _UseNote = () => {
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

  return (
    <Body>
      <div>
        <UseNote 
          id={null} 
          data={{ primaryId: 'PNS' }}
          placeholder='PRIMARY WRITE ME!'
        />
        <UseNote 
          id='un-[empty]' 
          data={{ }}
          placeholder='empty NO WRITE ME'
        />
        <UseNote 
          id='un-[empty-allow-write]' 
          data={{ }}
          placeholder='Write here'
        />
        <UseNote 
          id='un-[value]' 
          data={{ value: 'Custom value' }}
          placeholder={`Value...`}
        />
        <UseNote 
          id='un-[address]' 
          data={{ address }}
          placeholder={`Address... ${address}`}
        />
        <UseNote 
          id='un-[load]' 
          data={{ load: false }}
          placeholder='Load... write me only'
        />
        <UseNote 
          id='un-[load]'
          data={{ load: true }}
          placeholder='Load... read me only'
        />
        <UseNote 
          id='un-[once]' 
          data={{ once: true }} 
          placeholder='Once write here!'
        />
        <UseNote 
          id='un-[self]' 
          data={{ self: true }} 
          placeholder='Self - text for you!'
        />
        <UseNote 
          id='un-[self-read]' 
          data={{ self: true, selfRead: true }} 
          placeholder='Self - write text you and read people!'
        />
        <UseNote 
          id='un-[self-read]' 
          data={{ self: true, selfRead: true, address }} 
          placeholder='Self - write text you and read people!'
        />
        <UseNote 
          id='un-[single]' 
          data={{ single: true }} 
          placeholder='Single write here only you!'
        />
        <UseNote 
          id='un-[stas]' 
          data={{ stas: true }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin'
        />
        <UseNote 
          id='un-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin (COPY)'
        />
        <UseNote 
          id='un-[random-hash]' 
          data={{ randomHash: true }}
          placeholder='Write and generate random hash...'
        />
        <UseNote 
          id='un-[random-hash-for-address]' 
          data={{ randomHash: true, address }}
          placeholder='Write and generate random hash...'
        />
        <UseNote 
          id='un-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Write and ... cache'
        />
        <UseNote 
          id='un-[cache]' 
          data={{ }}
          placeholder='Read ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseNote