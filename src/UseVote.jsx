/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
    Body,
    UseVote,
} from './components.jsx'

const _UseVote = () => {
  return (
    <Body>
      <div>
        <UseVote 
          id='uv-[empty]' 
          data={{ }}
          placeholder='empty NO CLICK ME'
        />
        <UseVote 
          id='uv-[empty-allow-click]' 
          data={{ }}
          placeholder='Click here'
        />
        <UseVote 
          id='uv-[value]' 
          data={{ value: { count: 99999, voted: false } }}
          placeholder={`Value... vote`}
        />
        <UseVote 
          id='uv-[load]' 
          data={{ load: false }}
          placeholder='Load... vote me only'
        />
        <UseVote 
          id='uv-[load]' 
          data={{ load: true }}
          placeholder='Load... read vote me only'
        />
        <UseVote 
          id='uv-[load]'
          data={{ watch: false }}
          placeholder='Load... read vote me only'
        />
        <UseVote 
          id='uv-[load]'
          data={{ watch: true, interval: 5000 }}
          placeholder='Load... read vote me only'
        />
        <UseVote 
          id='uv-[once]' 
          data={{ once: true }} 
          placeholder='Once vote here!'
        />
        <UseVote 
          id='uv-[self]' 
          data={{ self: true }} 
          placeholder='Self - vote for you!'
        />
        <UseVote 
          id='uv-[stas]' 
          data={{ stas: true }} 
          commission={2} 
          placeholder='Vote? Pay 3 STAS coin'
        />
        <UseVote 
          id='uv-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={2} 
          placeholder='Vote? Pay 3 STAS coin (COPY)'
        />
        <UseVote 
          id='uv-[switching]' 
          data={{ switching: true }}
          placeholder='Switching vote (like)...'
        />
        <UseVote 
          id='uv-[single]' 
          data={{ single: true }}
          placeholder='Vote only you!'
        />
        <UseVote 
          id='uv-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Vote and ... cache'
        />
        <UseVote 
          id='uv-[cache]' 
          data={{ }}
          placeholder='Read vote ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseVote