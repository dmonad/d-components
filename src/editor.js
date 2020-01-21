import * as component from 'lib0/component.js'

export const defineEditor = component.createComponentDefiner(() => component.createComponent('d-editor', {
  template: '<h1 contenteditable="true">editor</h1><slot></slot>',
  style: 'p {font-size: 5em;}',
  state: { content: '<p>hello world</p>', editable: true },
  attrs: {
    editable: 'bool'
  },
  slots: state => ({
    default: `${state.content}`
  }),
  onStateChange: (state, prevState, component) => {
    component.setAttribute('contenteditable', state.editable + '')
  }
}))
