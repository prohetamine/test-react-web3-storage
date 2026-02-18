/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
    Body,
    UseReadStorage,
} from './components.jsx'

const _UseReadStorage = () => {
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

  return (
    <Body>
      <div>
        <UseReadStorage 
          id='us-[empty]' 
          data={{ }}
          placeholder='empty NO WRITE ME'
        />
        <UseReadStorage 
          id='us-[empty-allow-write]' 
          data={{ }}
          placeholder='Write here'
        />
        <UseReadStorage 
          id='us-[value]' 
          data={{ value: 'Custom value' }}
          placeholder={`Value...`}
        />
        <UseReadStorage 
          id='us-[address]' 
          data={{ address }}
          placeholder={`Address... ${address}`}
        />
        <UseReadStorage 
          id='us-[load]'
          data={{ watch: false }}
          placeholder='Load... read me only'
        />
        <UseReadStorage 
          id='us-[load]'
          data={{ watch: true, interval: 5000 }}
          placeholder='Load... read me only'
        />
        <UseReadStorage 
          id='us-[once]' 
          data={{ once: true }} 
          placeholder='Once write here!'
        />
        <UseReadStorage 
          id='us-[self]' 
          data={{ self: true }} 
          placeholder='Self - text for you!'
        />
        <UseReadStorage 
          id='us-[stas]' 
          data={{ stas: true }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin'
        />
        <UseReadStorage 
          id='us-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={9} 
          placeholder='Write? Pay 10 STAS coin (COPY)'
        />
        <UseReadStorage 
          id='us-[random-hash]' 
          data={{ randomHash: true }}
          placeholder='Write and generate random hash...'
        />
        <UseReadStorage 
          id='us-[random-hash-for-address]' 
          data={{ randomHash: true, address }}
          placeholder='Write and generate random hash...'
        />
        <UseReadStorage 
          id='us-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Write and ... cache'
        />
        <UseReadStorage 
          id='us-[cache]' 
          data={{ }}
          placeholder='Read ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseReadStorage