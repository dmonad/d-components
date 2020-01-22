
import * as component from 'lib0/component.js'
import * as dcomps from '../src/index.js'

dcomps.defineButton()
dcomps.defineTab()
dcomps.defineLorem()

component.createComponent('d-demos', {
  template: `<d-tab></d-tab>`,
  childStates: {
    'd-tab': state => ({
      items: [
        { title: 'Tab A', import: null, component: 'd-lorem', state: { paragraphs: [5, 6, 7] } },
        { title: 'Tab B', import: null, component: 'd-lorem', state: { paragraphs: [5, 6, 7] } }
      ],
      selected: 0
    })
  }
})
