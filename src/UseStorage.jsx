/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
    Body,
    UseStorage,
} from './components.jsx'

const _UseStorage = () => {
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

  return (
    <Body>
      <div>
        <UseStorage 
          id='us-[empty]' 
          data={{ }}
          placeholder='empty NO WRITE ME'
        />
        <UseStorage 
          id='us-[empty-allow-write]' 
          data={{ }}
          placeholder='Write here'
        />
        <UseStorage 
          id='us-[value]' 
          data={{ value: 'Custom value' }}
          placeholder={`Value...`}
        />
        <UseStorage 
          id='us-[address]' 
          data={{ address }}
          placeholder={`Address... ${address}`}
        />
        <UseStorage 
          id='us-[load]' 
          data={{ load: false }}
          placeholder='Load... write me only'
        />
        <UseStorage 
          id='us-[load]'
          data={{ load: true }}
          placeholder='Load... read me only'
        />
        <UseStorage 
          id='us-[once]' 
          data={{ once: true }} 
          placeholder='Once write here!'
        />
        <UseStorage 
          id='us-[self]' 
          data={{ self: true }} 
          placeholder='Self - text for you!'
        />
        <UseStorage 
          id='us-[stas]' 
          data={{ stas: true }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin'
        />
        <UseStorage 
          id='us-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin (COPY)'
        />
        <UseStorage 
          id='us-[random-hash]' 
          data={{ randomHash: true }}
          placeholder='Write and generate random hash...'
        />
        <UseStorage 
          id='us-[random-hash-for-address]' 
          data={{ randomHash: true, address }}
          placeholder='Write and generate random hash...'
        />
        <UseStorage 
          id='us-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Write and ... cache'
        />
        <UseStorage 
          id='us-[cache]' 
          data={{ }}
          placeholder='Read ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseStorage