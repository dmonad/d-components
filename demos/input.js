
import * as component from 'lib0/component.js'
import * as dcomps from '../src/index.js'
import * as dom from 'lib0/dom.js'

dcomps.defineInputText()
dcomps.defineInputSelect()
dcomps.defineIconUser()

dcomps.defineFab()

dcomps.defineIconEraser()
dcomps.defineIconLink()
dcomps.defineIconPalette()
dcomps.defineIconTimes()
dcomps.defineIconTimesCircle()
dcomps.defineIconTrash()
dcomps.defineIconCaretDown()
dcomps.defineIconMicrophone()
dcomps.defineIconMicrophoneSlash()
dcomps.defineIconVideo()
dcomps.defineIconVideoSlash()
dcomps.defineIconSquare()
dcomps.defineIconCheckSquare()
dcomps.defineIconHighlighter()

const renderIcons = () => {
  const icons = []
  for (const key in dcomps) {
    if (key.startsWith('defineIcon')) {
      const C = dcomps[key]()
      icons.push(new C())
    }
  }
  return dom.fragment(icons)
}

const _icons = `
<d-icon-user></d-icon-user>
<d-icon-eraser></d-icon-eraser>
<d-icon-link></d-icon-link>
<d-icon-palette></d-icon-palette>
<d-icon-times></d-icon-times>
<d-icon-times-circle></d-icon-times-circle>
<d-icon-trash></d-icon-trash>
<d-icon-microphone></d-icon-microphone>
<d-icon-microphone-slash></d-icon-microphone-slash>
<d-icon-video></d-icon-video>
<d-icon-video-slash></d-icon-video-slash>
<d-icon-square></d-icon-square>
<d-icon-check-square></d-icon-check-square>
<d-icon-highlighter></d-icon-highlighter>
`

let icons = ''
for (let i = 0; i < 1; i++) {
  icons += _icons
}

component.createComponent('d-input-demo', {
  template: `
<div class="icons">
  ${icons}
</div>
<d-input-text placeholder="Say hi!" label="Show Label" show-label></d-input-text><br>
<d-input-text placeholder="This one grows" grow label="Show Label" show-label></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Don't show label"></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Show Label with Icon" show-label><div slot="icon">•</div></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Show Label with Icon" show-label><div slot="icon">•</div><div slot="input">Some non-input goes here</div></d-input-text><br>
<d-input-text placeholder="Say hi!" label="Don't show label with Icon" show-label><d-icon-user slot="icon"></d-icon-user></d-input-text><br>
<d-fab><d-icon-video></d-icon-video></d-fab>
<br>
<label for="custom-label">Custom Label: </label><d-input-text input-id="custom-label" placeholder="Say Hello!" ><d-icon-user slot="icon"></d-icon-user></d-input-text><br>
<br>
<label>Indirect Label:<d-input-text placeholder="Say hi!" ><d-icon-user slot="icon"></d-icon-user></d-input-text></label><br>
<br>
<label for="custom-label-2">Custom Label + custom input: </label><d-input-text placeholder="Say Hello!" input-id="custom-label-2"><input type="text" slot="input"></input><d-icon-user slot="icon"></d-icon-user></d-input-text><br>
<br>

<label for="custom-label-4">Select Label</label>
<d-input-select label="Don't show label with Icon" input-id="custom-label-4"><d-icon-user slot="icon"></d-icon-user></d-input-select><br>
`,
  style: `
  .icons > * {
    height: 40px;
    width: 40px;
  }
  .icons, [slot="icon"] {
    color: #555;
  }
  d-input-text {
    min-width: 20em;
  }
  `,
  childStates: {
    'd-input-text': state => ({ value: 'Hello World!' }),
    'd-input-select': state => ({ value: '2', options: [{ value: '1', description: 'Option 1' }, { value: '2', description: 'Great option!' }, { value: '3', description: 'Take me plz?!' }] })
  },
  onStateChange: (state, prevState, component) => {
    if (prevState === null) {
      // init
      const iconsDiv = /** @type {HTMLElement} */ (dom.querySelector(component.shadowRoot, '.icons'))
      dom.appendChild(iconsDiv, renderIcons())
    }
  }
})
