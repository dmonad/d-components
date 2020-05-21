import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'
import * as pair from 'lib0/pair.js'
import * as object from 'lib0/object.js'
import * as func from 'lib0/function.js'
import * as math from 'lib0/math.js'
import { dfocus, dinput } from './events.js'
import { defineIconCaretDown } from './d-icons.js'

const inputTemplate = '<slot name="icon"></slot><slot name="input"></slot><slot name="icon-after"></slot>'
const inputStyle = `
:host {
  display: inline-flex;
  flex-wrap: nowrap;
  --border-color: var(--theme-highlight, #d12915);
  --border-color-focus: var(--theme-highlight-complementary, #52ddee);
  border-bottom: .1rem solid var(--border-color);
}
:host([focused]) {
  border-color: var(--border-color-focus);
}

:host(:not([show-label])) label {
  display: none;
}
slot[name="icon"] {
  display: inline-block;
}
::slotted([slot="icon"]), ::slotted([slot="icon-after"]) {
  margin-right: .3em;
  margin-left: .3em;
  height: .7em;
}
::slotted([slot="input"]) {
  flex: 1 auto;
  min-width: 0px;
  background-color: inherit;
  outline: none;
  border: none;
  padding: 0;
  font: inherit;
  text-overflow: ellipsis;
  color: inherit;
}
`
const inputListeners = {
  focusin: (event, component) => {
    component.updateState({ focused: true })
  },
  focusout: (event, component) => {
    component.updateState({ focused: false })
  },
  input: (event, component) => {
    component.updateState({ value: /** @type {any} */ (event.target).value })
    dom.emitCustomEvent(component, dinput, { bubbles: true, detail: component.state })
  }
}

const inputState = {
  label: '',
  inputId: /** @type {string?} */ (null),
  focused: false
}

const inputOnStateChange = (input, { label, inputId, focused }, prevState, component) => {
  if (inputId && inputId !== input.id) {
    input.id = inputId
  }
  if (prevState && focused !== prevState.focused) {
    dom.emitCustomEvent(component, dfocus, { bubbles: true, detail: component.state })
  }
  if (!prevState || label !== prevState.label) {
    if (!label) {
      input.title = ''
      input.removeAttribute('aria-label')
    } else {
      input.title = label
      input.setAttribute('aria-label', label)
    }
  }
  if (focused && (!prevState || !prevState.focused)) {
    input.focus()
  }
}

export const defineInputText = component.createComponentDefiner(() => component.createComponent('d-input-text', {
  template: inputTemplate,
  style: inputStyle,
  listeners: inputListeners,
  state: object.assign({ placeholder: '', value: '', grow: false }, inputState),
  attrs: {
    placeholder: 'string',
    label: 'string',
    inputId: 'string',
    focused: 'bool',
    grow: 'bool'
  },
  onStateChange: (state, prevState, component) => {
    const { value, placeholder, grow } = state
    let input = /** @type {HTMLInputElement} */ (dom.querySelector(component, '[slot="input"]'))
    if (!input) {
      dom.append(component, [input = /** @type {HTMLInputElement} */ (dom.element('input', [pair.create('type', 'text'), pair.create('slot', 'input')]))])
    }
    if (value !== input.value) {
      input.value = value
    }
    if (placeholder !== input.placeholder) {
      input.placeholder = placeholder
    }
    if (grow && value) {
      input.size = math.max(value.length, 5)
    }
    inputOnStateChange(input, state, prevState, component)
  }
}))

export const defineInputSelect = component.createComponentDefiner(() => {
  defineIconCaretDown()
  component.createComponent('d-input-select', {
    template: inputTemplate,
    slots: state => ({
      'icon-after': '<d-icon-caret-down id="caret"></d-icon-caret-down>'
    }),
    style: inputStyle + `
    ::slotted([slot="input"]) {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding-right: 1em;
    }
    :host {
      position: relative;
    }
    ::slotted([slot="icon-after"]) {
      position: absolute;
      right: 0;
      top: .06em;
      user-select: none;
      pointer-events: none;
    }
    `,
    listeners: inputListeners,
    state: object.assign({ value: '', options: /** @type {Array<{ value: string, description: String }>} */ ([]) }, inputState),
    attrs: {
      label: 'string',
      inputId: 'string',
      focused: 'bool',
      value: 'string'
    },
    onStateChange: (state, prevState, component) => {
      const { value, placeholder, options } = state
      let input = /** @type {HTMLInputElement} */ (dom.querySelector(component, '[slot="input"]'))
      if (!input) {
        dom.append(component, [input = /** @type {HTMLInputElement} */ (dom.element(
          'select',
          [pair.create('type', 'text'), pair.create('slot', 'input')],
          [dom.element('span', [], [dom.element('option', [pair.create('value', 'val')], [dom.text('Some text')])])]
        ))])
      }
      if (!prevState || !func.equalityFlat(prevState.options, options)) {
        input.innerHTML = ''
        dom.append(input, options.map(option => dom.element(
          'option', [pair.create('value', option.value)], [dom.text(option.description)]
        )))
      }
      if (value !== input.value) {
        input.value = value
      }
      if (placeholder !== input.placeholder) {
        input.placeholder = placeholder
      }
      inputOnStateChange(input, state, prevState, component)
    }
  })
})
