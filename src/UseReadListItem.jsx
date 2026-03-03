import { Body, UseReadListItem } from './components.jsx'

const _UseReadListItem = () => {
  return (
    <Body>
      <div>
        <UseReadListItem 
          id='uts-[empty-allow-write]' 
          data={{ chainId: 14188, index: 1 }}
          placeholder='empty NO WRITE ME'
        />
      </div>
    </Body>
  )
}

export default _UseReadListItem