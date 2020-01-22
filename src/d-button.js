import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'

import { defineRipple } from './ripple.js'

export const buttonPressedEvent = 'd-button-pressed'

export const defineButton = component.createComponentDefiner(() => {
  defineRipple()
  return component.createComponent('d-button', {
    template: `<d-ripple><button type="button"><slot></slot></button></d-ripple>`,
    style: `
      :host {
        --selected-color: #30bced;
        --background-color: #6eeb83;
        --active-color: var(--selected-color);
        position: relative;
        display: flex;
      }
      button {
        background-color: var(--background-color);
        border: none;
        text-align: inherit;
        cursor: pointer;
        outline: none;
        position: relative;
        flex: 1;
        padding: 0;
      }
      :host([active]) button {
        background-color: var(--active-color);
      }
      d-ripple {
        --ripple-color: var(--selected-color);
      }
    `,
    attrs: {
      active: 'bool'
    },
    state: null,
    listeners: {
      click: (event, component) => dom.emitCustomEvent(component, buttonPressedEvent, { bubbles: true, detail: component.state })
    }
  })
})
