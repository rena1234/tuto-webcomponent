import styleTextGreen from './green.scss'
import styleTextCoral from './coral.scss'

const styleGreen = document.createElement('style');
styleGreen.type = 'text/css';
styleGreen.appendChild(document.createTextNode(styleTextGreen));

const styleCoral= document.createElement('style');
styleCoral.type = 'text/css';
styleCoral.appendChild(document.createTextNode(styleTextCoral));

const templateDouble = document.createElement('template');
templateDouble.innerHTML = `
  <h2><slot name="firsttext"/></h2>
  <h2><slot name="secondtext"/></h2>
`;

const template = document.createElement('template');
template.innerHTML = `
  <h2><slot name="firsttext"/></h2>
`;

class CustomText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
		if(this.getAttribute('doubletext') === 'true'){
			this.shadowRoot
				.appendChild(templateDouble.content.cloneNode(true));
			this.shadowRoot.appendChild(styleCoral);
		} else{
			this.shadowRoot
				.appendChild(template.content.cloneNode(true));
			this.shadowRoot.appendChild(styleGreen);
		}
  }
}

window.customElements.define('custom-text', CustomText)
