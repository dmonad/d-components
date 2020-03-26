import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'
import * as pair from 'lib0/pair.js'
import { dfocus } from './events.js'

export const defineInputText = component.createComponentDefiner(() => component.createComponent('d-input-text', {
  template: '<slot name="icon"></slot><slot name="input"></slot>',
  style: `
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
  ::slotted([slot="icon"]) {
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
  }
  `,
  listeners: {
    focusin: (event, component) => {
      component.updateState({ focused: true })
    },
    focusout: (event, component) => {
      component.updateState({ focused: false })
    },
    input: (event, component) => {
      component.updateState({ value: /** @type {any} */ (event.target).value })
    }
  },
  state: { placeholder: '', value: '', label: '', inputId: /** @type {string?} */ (null), focused: false },
  attrs: {
    placeholder: 'string',
    label: 'string',
    inputId: 'string',
    focused: 'bool'
  },
  onStateChange: ({ value, placeholder, label, inputId, focused }, prevState, component) => {
    let input = /** @type {HTMLInputElement} */ (dom.querySelector(component, '[slot="input"]'))
    if (!input) {
      dom.append(component, [input = /** @type {HTMLInputElement} */ (dom.setAttributes(dom.createElement('input'), [pair.create('type', 'text'), pair.create('slot', 'input')]))])
    }
    if (value !== input.value) {
      input.value = value
    }
    if (placeholder !== input.placeholder) {
      input.placeholder = placeholder
    }
    if (inputId && inputId !== input.id) {
      input.id = inputId
    }
    if (prevState && focused !== prevState.focused) {
      dom.emitCustomEvent(component, dfocus, { bubbles: true, detail: component.state })
    }
    if (focused && (!prevState || !prevState.focused)) {
      input.focus()
    }
    if (!prevState || label !== prevState.label) {
      if (!label) {
        input.type = ''
        input.removeAttribute('aria-label')
      } else {
        input.title = label
        input.setAttribute('aria-label', label)
      }
    }
  }
}))
