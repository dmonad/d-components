
import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'
import { defineRipple } from './ripple.js'

const changeAreaEvent = 'change-area-event'


export const defineTab = component.createComponentDefiner(() => {
  component.defineListComponent()
  component.defineLazyLoadingComponent()
  defineRipple()

  const TabButton = component.createComponent('d-tab-button', {
    template: `<d-ripple><button type="button"><slot name="content"></slot></button></d-ripple>`,
    style: `
      :host {
        --selected-color: #30bced;
        position: relative;
        padding-bottom: .1rem;
      }
      button {
        background-color: inherit;
        border: none;
        padding: 15px 25px;
        text-align: center;
        font-size: 1.5rem;
        cursor: pointer;
        width: 100%;
        outline: none;
        position: relative;
      }
      :host([selected])::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0;
        border-bottom: .2rem solid var(--selected-color);
      }
      d-ripple {
        --ripple-color: var(--selected-color);
      }
    `,
    attrs: {
      selected: 'bool'
    },
    state: { content: '', index: 0, selected: false },
    slots: state => ({
      content: `<div>${state.content}</div>`
    }),
    listeners: {
      click: (event, component) => dom.emitCustomEvent(component, changeAreaEvent, { bubbles: true, detail: component.state })
    }
  })

  return component.createComponent('d-tab', {
    template: `<lib0-list></lib0-list><lib0-lazy></lib0-lazy>`,
    style: `
      lib0-list {
        display: flex;
      }
      lib0-list > * {
        display: block;
        flex: 1;
      }
    `,
    state: {
      items: /** @type {Array<{title:string, import: function():Promise}>} */ ([]),
      selected: 0
    },
    attrs: {
      selected: 'number'
    },
    listeners: {
      [changeAreaEvent]: (event, component) => component.updateState({ selected: event.detail.index})
    },
    childStates: {
      'lib0-list': state => ({ list: state.items.map((item, index) => ({ content: item.title, index, selected: index === state.selected })), Item: TabButton }),
      'lib0-lazy': ({ items, selected }) => items[selected]
    },
  })
})
