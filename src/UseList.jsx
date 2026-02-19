import { Body, UseList } from './components.jsx'

const _UseList = () => {
  return (
    <Body>
      <div>
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