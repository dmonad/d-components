import * as component from 'lib0/component.js'
import * as dom from 'lib0/dom.js'
import * as lib from './lib.js'

const removeAllStates = ripple => {
  ripple.classList.remove('start')
  ripple.classList.remove('active')
  ripple.classList.remove('end')
}

export const defineRipple = component.createComponentDefiner(() => component.createComponent('d-ripple', {
  template: '<slot></slot><div class="bg"></div><div class="container"><div class="ripple"></div></div>',
  style: `
    :host {
      display: flex;
      position: relative;
      --ripple-color: #aaa;
      flex: 1;
    }
    .container, .bg {
      display: block;
      user-select: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
    :host .bg {
      background-color: var(--ripple-color);
      opacity: 0;
      transition: opacity 300ms;
    }
    ${lib.isTouchDevice ? '' : `:host(:hover) .bg {
      opacity: 0.1;
    }`}
    :host([active]) .bg {
      opacity: 0.15;
    }
    .ripple {
      background-color: var(--ripple-color);
      border-radius: 50%;
      pointer-events: none;
      position: absolute;
      transform: scale(0);
    }
    .start {
      transform: scale(0.2);
      opacity: 1;
    }
    .active {
      transform: scale(2);
      transition: transform 700ms, opacity 400ms;
      opacity: 0.20;
    }
    .end {
      opacity: 0;
    }
  `,
  state: { timers: /** @type {Array<number>} */ ([]), active: false, animating: false },
  listeners: {
    mousedown: (event, component) => {
      const ripple = /** @type {any} */ (dom.querySelector(/** @type {any} */ (component.shadowRoot), '.ripple'))
      removeAllStates(ripple)
      const size = component.offsetWidth
      const pos = component.getBoundingClientRect()
      // @ts-ignore
      const x = event.clientX - pos.left - size
      // @ts-ignore
      const y = event.clientY - pos.top - size
      ripple.style = `top:${y}px; left:${x}px; width:${size * 2}px; height:${size * 2}px;`
      ripple.classList.add('start')
      ripple.classList.add('active')
      component.updateState({ timers: [], animating: true })
      return false
    },
    mouseout: (event, component) => {
      component.updateState({ animating: false })
      return false
    },
    mouseup: (event, component) => {
      if (component.state.animating) {
        const ripple = /** @type {any} */ (dom.querySelector(/** @type {any} */ (component.shadowRoot), '.ripple'))
        ripple.classList.add('end')
        component.updateState({
          animating: true,
          timers: [
            setTimeout(() => {
              component.updateState({ animating: false })
            }, 700)
          ]
        })
      }
      return false
    }
  },
  attrs: {
    active: 'bool'
  },
  onStateChange: (state, prevState, component) => {
    if (prevState && prevState.timers && (!state || state.timers !== prevState.timers)) {
      prevState.timers.forEach(clearTimeout)
    }
    if (state && !state.animating) {
      const ripple = /** @type {any} */ (dom.querySelector(/** @type {any} */ (component.shadowRoot), '.ripple'))
      removeAllStates(ripple)
    }
  }
}))
