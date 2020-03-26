
import * as component from 'lib0/component.js'
import * as dcomps from '../src/index.js'

dcomps.defineInputText()
dcomps.defineIconUser()

dcomps.defineIconEraser()
dcomps.defineIconLink()
dcomps.defineIconPalette()
dcomps.defineIconTimes()
dcomps.defineIconTimesCircle()
dcomps.defineIconTrash()

component.createComponent('d-input-demo', {
  template: `
<div class="icons">
  <d-icon-user></d-icon-user>
  <d-icon-eraser></d-icon-eraser>
  <d-icon-link></d-icon-link>
  <d-icon-palette></d-icon-palette>
  <d-icon-times></d-icon-times>
  <d-icon-times-circle></d-icon-circle>
  <d-icon-trash></d-icon-trash>
</div>
<d-input-text placeholder="Say hi!" label="Show Label" show-label></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Don't show label"></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Show Label with Icon" show-label><div slot="icon">•</div></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Don't show label with Icon" show-label><d-icon-user slot="icon"></d-icon-user></d-input-text><br>
<br>
<label for="custom-label">Custom Label: </label><d-input-text input-id="custom-label" placeholder="test" ><d-icon-user slot="icon"></d-icon-user></d-input-text><br>
<br>
<label>Indirect Label:<d-input-text placeholder="test" ><d-icon-user slot="icon"></d-icon-user></d-input-text></label><br>
`,
  style: `
  d-input-text {
    display: inline-flex;
  }
  .icons > * {
    height: 40px;
    width: 40px;
  }
  `,
  childStates: {
    'd-input-text': state => ({ value: 'Hello World!' })
  }
})
