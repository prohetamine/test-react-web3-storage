import { Body, UseCounter } from './components.jsx'

const _UseCounter = () => {
  return (
    <Body>
      <div>
        <UseCounter 
          id='uc-[empty]' 
          data={{ }}
          placeholder='empty NO CLICK ME'
        />
        <UseCounter 
          id='uc-[empty-allow-click]' 
          data={{ }}
          placeholder='Click here'
        />
        <UseCounter 
          id='uc-[value]' 
          data={{ value: { count: 99999, voted: false } }}
          placeholder={`Value... vote`}
        />
        <UseCounter 
          id='uc-[load]' 
          data={{ load: false }}
          placeholder='Load... vote me only'
        />
        <UseCounter 
          id='uc-[load]' 
          data={{ load: true }}
          placeholder='Load... read vote me only'
        />
        <UseCounter 
          id='uc-[load]'
          data={{ watch: false }}
          placeholder='Load... read vote me only'
        />
        <UseCounter 
          id='uc-[load]'
          data={{ watch: true, interval: 5000 }}
          placeholder='Load... read vote me only'
        />
        <UseCounter 
          id='uc-[once]' 
          data={{ once: true }} 
          placeholder='Once vote here!'
        />
        <UseCounter 
          id='uc-[self]' 
          data={{ self: true }} 
          placeholder='Self - vote for you!'
        />
        <UseCounter 
          id='uc-[stas]' 
          data={{ stas: true }} 
          commission={2} 
          placeholder='Vote? Pay 3 STAS coin'
        />
        <UseCounter 
          id='uc-[stas]' 
          data={{ stas: true, copyId: 1 }} 
          commission={2} 
          placeholder='Vote? Pay 3 STAS coin (COPY)'
        />
        <UseCounter 
          id='uc-[switching]' 
          data={{ switching: true }}
          placeholder='Switching vote (like)...'
        />
        <UseCounter 
          id='uc-[single]' 
          data={{ single: true }}
          placeholder='Vote only you!'
        />
        <UseCounter 
          id='uc-[cache]' 
          data={{ cache: 9999999999 }}
          placeholder='Vote and ... cache'
        />
        <UseCounter 
          id='uc-[cache]' 
          data={{ }}
          placeholder='Read vote ... cache'
        />
      </div>
    </Body>
  )
}

export default _UseCounter