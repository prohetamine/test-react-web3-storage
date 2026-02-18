/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
    Body,
    UseTableStorage,
} from './components.jsx'

const _UseTableStorage = () => {
  return (
    <Body>
      <div>
        <UseTableStorage 
          id='uts-[empty]'
          data={{ }}
          placeholder='empty NO WRITE ME'
        />
        <UseTableStorage 
          id='uts-[empty-allow-write]' 
          data={{ }}
          placeholder='Write here'
        />
        <UseTableStorage 
          id='uts-[load]' 
          data={{ load: false }}
          placeholder='Load... write me only'
        />
        <UseTableStorage 
          id='uts-[load]' 
          data={{ load: true }}
          placeholder='Load... read me only'
        />
        <UseTableStorage 
          id='uts-[load]'
          data={{ watch: false }}
          placeholder='Load... read me only'
        />
        <UseTableStorage 
          id='uts-[load]'
          data={{ watch: true, interval: 5000 }}
          placeholder='Load... read me only'
        />
        <UseTableStorage 
          id='uts-[once]' 
          data={{ once: true }} 
          placeholder='Once write here!'
        />
        <UseTableStorage 
          id='uts-[self]' 
          data={{ self: true }} 
          placeholder='Self - text for you!'
        />
        <UseTableStorage 
          id='uts-[stas]' 
          data={{ stas: true }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin'
        />
        <UseTableStorage 
          id='uts-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin (COPY)'
        />
        <UseTableStorage 
          id='uts-[random-hash]' 
          data={{ randomHash: true }}
          placeholder='Write and generate random hash...'
        />
        <UseTableStorage 
          id='uts-[single]' 
          data={{ single: true }}
          placeholder='Write only you!'
        />
        <UseTableStorage 
          id='uts-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Write and ... cache'
        />
        <UseTableStorage 
          id='uts-[cache]' 
          data={{ }}
          placeholder='Read ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseTableStorage