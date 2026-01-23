import{dT as b,eo as f,e0 as E,dX as x,dW as l,d_ as O,ea as $,eh as R,ei as T,ej as S,ek as c,ef as k,eg as d,ep as I,em as v}from"./index-DYqKnSl7.js";const C=R`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
    font-family: ${({fontFamily:t})=>t.regular};
    font-size: ${({textSize:t})=>t.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:t})=>t.theme.textPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      border-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:t})=>t[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
  }
`;var y=function(t,e,i,n){var o=arguments.length,s=o<3?e:n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let h=class extends b{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};h.styles=[T,S,C];y([c({type:Boolean})],h.prototype,"disabled",void 0);y([c({type:String})],h.prototype,"value",void 0);h=y([v("wui-input-numeric")],h);const L=k`
  :host {
    position: relative;
    display: block;
  }
`;var m=function(t,e,i,n){var o=arguments.length,s=o<3?e:n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let p=class extends b{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(e=>e!==""),this.handleKeyDown=(t,e)=>{const i=t.target,n=this.getInputElement(i),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!n)return;o.includes(t.key)&&t.preventDefault();const s=n.selectionStart;switch(t.key){case"ArrowLeft":s&&n.setSelectionRange(s+1,s+1),this.focusInputField("prev",e);break;case"ArrowRight":this.focusInputField("next",e);break;case"Shift":this.focusInputField("next",e);break;case"Delete":n.value===""?this.focusInputField("prev",e):this.updateInput(n,e,"");break;case"Backspace":n.value===""?this.focusInputField("prev",e):this.updateInput(n,e,"");break}},this.focusInputField=(t,e)=>{if(t==="next"){const i=e+1;if(!this.shouldInputBeEnabled(i))return;const n=this.numerics[i<this.length?i:e],o=n?this.getInputElement(n):void 0;o&&(o.disabled=!1,o.focus())}if(t==="prev"){const i=e-1,n=this.numerics[i>-1?i:e],o=n?this.getInputElement(n):void 0;o&&o.focus()}}}firstUpdated(){var t,e;this.otp&&(this.values=this.otp.split(""));const i=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");i&&(this.numerics=Array.from(i)),(e=this.numerics[0])==null||e.focus()}render(){return l`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>l`
            <wui-input-numeric
              @input=${i=>this.handleInput(i,e)}
              @click=${i=>this.selectInput(i)}
              @keydown=${i=>this.handleKeyDown(i,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){const n=this.numerics[e],o=t||(n?this.getInputElement(n):void 0);o&&(o.value=i,this.values=this.values.map((s,r)=>r===e?i:s))}selectInput(t){const e=t.target;if(e){const i=this.getInputElement(e);i?.select()}}handleInput(t,e){const i=t.target,n=this.getInputElement(i);if(n){const o=n.value;t.inputType==="insertFromPaste"?this.handlePaste(n,o,e):I.isNumber(o)&&t.data?(this.updateInput(n,e,t.data),this.focusInputField("next",e)):this.updateInput(n,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const n=e[0];if(n&&I.isNumber(n)){this.updateInput(t,i,n);const o=e.substring(1);if(i+1<this.length&&o.length){const s=this.numerics[i+1],r=s?this.getInputElement(s):void 0;r&&this.handlePaste(r,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){var e;return(e=t.shadowRoot)!=null&&e.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};p.styles=[T,L];m([c({type:Number})],p.prototype,"length",void 0);m([c({type:String})],p.prototype,"otp",void 0);m([d()],p.prototype,"values",void 0);p=m([v("wui-otp")],p);const P=k`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var g=function(t,e,i,n){var o=arguments.length,s=o<3?e:n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},w;let u=w=class extends b{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var t;super(),this.loading=!1,this.timeoutTimeLeft=f.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(t=E.state.data)==null?void 0:t.email,this.authConnector=x.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=!!this.timeoutTimeLeft,e=this.getFooterLabels(t);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=f.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=f.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){var e;try{this.loading||(this.otp=t.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await((e=this.onOtpSubmit)==null?void 0:e.call(this,this.otp))))}catch(i){this.error=O.parseError(i),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!x.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),$.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){$.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:`Try again ${t?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${t?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===w.OTP_LENGTH}};u.OTP_LENGTH=6;u.styles=P;g([d()],u.prototype,"loading",void 0);g([d()],u.prototype,"timeoutTimeLeft",void 0);g([d()],u.prototype,"error",void 0);u=w=g([v("w3m-email-otp-widget")],u);export{u};
