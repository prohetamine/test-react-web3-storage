import { Body, UseList } from './components.jsx'

const _UseList = () => {
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

  return (
    <Body>
      <div>
        <UseList 
          id={null} 
          data={{ primaryId: 'id-without-hash', copyId: 'hello', addressValue: true }}
          placeholder='PNS'
        />
        <UseList 
          id='uts-[empty]'
          data={{ }}
          placeholder='empty NO WRITE ME'
        />
        <UseList 
          id='uts-[empty-allow-write]' 
          data={{ }}
          placeholder='Write here'
        />
        <UseList 
          id='uts-[load]' 
          data={{ load: false }}
          placeholder='Load... write me only'
        />
        <UseList 
          id='uts-[load]' 
          data={{ load: true }}
          placeholder='Load... read me only'
        />
        <UseList 
          id='uts-[load]'
          data={{ watch: false }}
          placeholder='Load... read me only'
        />
        <UseList 
          id='uts-[load]'
          data={{ watch: true, interval: 5000 }}
          placeholder='Load... read me only'
        />
        <UseList 
          id='uts-[once]' 
          data={{ once: true }} 
          placeholder='Once write here!'
        />
        <UseList 
          id='uts-[self]' 
          data={{ self: true }} 
          placeholder='Self - text for you!'
        />
        <UseList 
          id='uts-[self-read]' 
          data={{ self: true, selfRead: true }} 
          placeholder='Self - write text and read people!'
        />
        <UseList 
          id='uts-[self-read]' 
          data={{ self: true, selfRead: true, address }} 
          placeholder='Self - write text you and read people!'
        />
        <UseList 
          id='uts-[stas]' 
          data={{ stas: true }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin'
        />
        <UseList 
          id='uts-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin (COPY)'
        />
        <UseList 
          id='uts-[random-hash]' 
          data={{ randomHash: true }}
          placeholder='Write and generate random hash...'
        />
        <UseList 
          id='uts-[single]' 
          data={{ single: true }}
          placeholder='Write only you!'
        />
        <UseList 
          id='uts-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Write and ... cache'
        />
        <UseList 
          id='uts-[cache]' 
          data={{ }}
          placeholder='Read ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseList