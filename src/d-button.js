import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'
import * as object from 'lib0/object.js'

import { defineRipple } from './ripple.js'

export const buttonPressedEvent = 'd-button-pressed'

const buttonTemplate = {
  template: '<d-ripple><button type="button"><slot></slot></button></d-ripple>',
  style: `
    :host {
      --selected-color: #30bced;
      --background-color: #6eeb83;
      --active-color: var(--selected-color);
      position: relative;
      display: block;
      cursor: pointer;
    }
    button {
      background: var(--background-color);
      color: inherit;
      border: none;
      text-align: inherit;
      outline: none;
      position: relative;
      flex: 1;
      padding: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: block;
      width: 100%;
      height: 100%;
    }
    ::slotted(*) {
      display: block;
      height: 100%;
    }
    :host([active]) button {
      background: var(--active-color);
    }
    d-ripple {
      --ripple-color: var(--selected-color);
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  attrs: {
    active: /** @type {'bool'} */ ('bool')
  },
  state: null,
  listeners: {
    click: (event, component) => dom.emitCustomEvent(component, buttonPressedEvent, { bubbles: true, detail: component.state })
  }
}

export const defineButton = component.createComponentDefiner(() => {
  defineRipple()
  return component.createComponent('d-button', buttonTemplate)
})

export const defineFab = component.createComponentDefiner(() => {
  defineRipple()
  return component.createComponent('d-fab', object.assign({}, buttonTemplate, { style: `${buttonTemplate.style} :host { border-radius: 50%; overflow: hidden; width: 3em; height: 3em; } button { padding: .8em; }` }))
})
