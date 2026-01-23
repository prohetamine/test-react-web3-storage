import{dT as n,dW as f,ef as d,em as w}from"./index-Cu-0-v6d.js";const p=d`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(s,t,r,o){var i=arguments.length,e=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,r,o);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(e=(i<3?a(e):i>3?a(t,r,e):a(t,r))||e);return i>3&&e&&Object.defineProperty(t,r,e),e};let l=class extends n{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};l.styles=p;l=u([w("w3m-transactions-view")],l);export{l as W3mTransactionsView};
