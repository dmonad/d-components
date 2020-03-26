import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'
import * as logging from 'lib0/logging.js'
import { log } from './lib.js'

export const defineInputText = component.createComponentDefiner(() => component.createComponent('d-input-text', {
  template: '<slot name="icon"></slot><slot name="input"></slot>',
  slots: state => ({
    input: '<input type="text"></input>'
  }),
  style: `
  :host {
    display: inline-block;
    --border-color: var(--theme-highlight, #d12915);
    border-bottom: .1rem solid var(--border-color);
    line-height: 1;
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
    height: .6em;
  }
  ::slotted([slot="input"]) {
    background-color: inherit;
    outline: none;
    border: none;
    padding: 0;
    font: inherit;
    text-overflow: ellipsis;
  }
  `,
  state: { placeholder: '', value: '', label: '', inputId: /** @type {string?} */ (null) },
  attrs: {
    placeholder: 'string',
    label: 'string',
    inputId: 'string'
  },
  onStateChange: ({ value, placeholder, label, inputId }, prevState, component) => {
    const input = /** @type {HTMLInputElement} */ (dom.querySelector(component, 'input'))
    if (value !== input.value) {
      input.value = value
    }
    if (placeholder !== input.placeholder) {
      input.placeholder = placeholder
    }
    if (inputId && inputId !== input.id) {
      input.id = inputId
    }
    if (!prevState || label !== prevState.label) {
      if (!label) {
        log(logging.RED, 'Define labels for input elements!')
      }
      input.title = label
      input.setAttribute('aria-label', label)
    }
  }
}))
