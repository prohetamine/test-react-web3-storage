import{dT as k,e3 as c,ea as p,eK as h,ep as x,dY as m,el as $,dW as l,e8 as C,e9 as N,e0 as R,d_ as I,eh as b,ei as A,ej as S,ek as v,eg as g,em as y}from"./index-3pVASmuD.js";const T=b`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var f=function(e,o,t,s){var a=arguments.length,i=a<3?o:s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,o,t,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(i=(a<3?r(i):a>3?r(o,t,i):r(o,t))||i);return a>3&&i&&Object.defineProperty(o,t,i),i};let u=class extends k{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e?.map(o=>l` <wui-flex class="network-icon"> <wui-image src=${o}></wui-image> </wui-flex>`)}
    </wui-flex>`}};u.styles=[A,S,T];f([v({type:Array})],u.prototype,"networkImages",void 0);f([v()],u.prototype,"text",void 0);u=f([y("wui-compatible-network")],u);const q=b`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var w=function(e,o,t,s){var a=arguments.length,i=a<3?o:s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,o,t,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(i=(a<3?r(i):a>3?r(o,t,i):r(o,t))||i);return a>3&&i&&Object.defineProperty(o,t,i),i};let d=class extends k{constructor(){var e,o;super(),this.unsubscribe=[],this.address=(e=c.getAccountData())==null?void 0:e.address,this.profileName=(o=c.getAccountData())==null?void 0:o.profileName,this.network=c.state.activeCaipNetwork,this.unsubscribe.push(c.subscribeChainProp("accountState",t=>{t?(this.address=t.address,this.profileName=t.profileName):p.showError("Account not found")}),c.subscribeKey("activeCaipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=h.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${x.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${m.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${$(m.state.themeVariables["--apkt-qr-color"]??m.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e;const o=c.getAllRequestedCaipNetworks(),t=c.checkIfSmartAccountEnabled(),s=c.state.activeCaipNetwork,a=o.filter(r=>r?.chainNamespace===s?.chainNamespace);if(C(s?.chainNamespace)===N.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return s?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[h.getNetworkImage(s)??""]}
      ></wui-compatible-network>`:null;const i=((e=a?.filter(r=>{var n;return(n=r?.assets)==null?void 0:n.imageId}))==null?void 0:e.slice(0,5)).map(h.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${i}
    ></wui-compatible-network>`}onReceiveClick(){R.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(I.copyToClopboard(this.address),p.showSuccess("Address copied"))}catch{p.showError("Failed to copy")}}};d.styles=q;w([g()],d.prototype,"address",void 0);w([g()],d.prototype,"profileName",void 0);w([g()],d.prototype,"network",void 0);d=w([y("w3m-wallet-receive-view")],d);export{d as W3mWalletReceiveView};
