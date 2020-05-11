import * as component from 'lib0/component.js'

/**
 * @param {string} name Name of the component
 * @param {string} svg SVG content of the icon
 */
export const createIcon = (name, svg) => component.createComponent(name, {
  template: svg,
  style: `
:host {
  display: inline-block;
}
svg {
  display: inherit;
  height: inherit;
  width: inherit;
}
  `
})

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/user?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconUser = component.createComponentDefiner(() => createIcon('d-icon-user', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/eraser?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconEraser = component.createComponentDefiner(() => createIcon('d-icon-eraser', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/link?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconLink = component.createComponentDefiner(() => createIcon('d-icon-link', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/palette?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconPalette = component.createComponentDefiner(() => createIcon('d-icon-palette', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/times-circle?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconTimesCircle = component.createComponentDefiner(() => createIcon('d-icon-times-circle', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/times?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconTimes = component.createComponentDefiner(() => createIcon('d-icon-times', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/trash-alt?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconTrash = component.createComponentDefiner(() => createIcon('d-icon-trash-alt', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/caret-down?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconCaretDown = component.createComponentDefiner(() => createIcon('d-icon-caret-down', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/microphone?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconMicrophone = component.createComponentDefiner(() => createIcon('d-icon-microphone', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/microphone-slash?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconMicrophoneSlash = component.createComponentDefiner(() => createIcon('d-icon-microphone-slash', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/video?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconVideo = component.createComponentDefiner(() => createIcon('d-icon-video', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/video-slash?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconVideoSlash = component.createComponentDefiner(() => createIcon('d-icon-video-slash', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/square?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconSquare = component.createComponentDefiner(() => createIcon('d-icon-square', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/square?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconCheckSquare = component.createComponentDefiner(() => createIcon('d-icon-check-square', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/highlighter?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconHighlighter = component.createComponentDefiner(() => createIcon('d-icon-highlighter', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/comment?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconComment = component.createComponentDefiner(() => createIcon('d-icon-comment', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/italic?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconItalic = component.createComponentDefiner(() => createIcon('d-icon-italic', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/bold?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconBold = component.createComponentDefiner(() => createIcon('d-icon-bold', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/heading?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconHeading = component.createComponentDefiner(() => createIcon('d-icon-heading', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>'))

/**
 * Created with Inkscape
 */
export const defineIconH2 = component.createComponentDefiner(() => createIcon('d-icon-h2', '<svg viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" transform="translate(0 -161.53)"><g transform="scale(.85854 1.1648)"><path d="m111.41 243.95v3.7635h-51.184v-3.7635q7.6776-0.90324 9.7851-2.1076 3.7635-2.2581 3.7635-8.5808v-34.624h-36.28v34.624q0 6.1722 3.7635 8.4303 2.4086 1.3549 9.7851 2.2581v3.7635h-50.732v-3.7635q6.0216-0.7527 7.527-1.3549 5.2689-1.957 5.2689-9.3335v-72.861q0-6.4732-3.914-8.7313-2.2581-1.3549-8.8819-1.957v-3.7635h50.732v3.7635q-6.4732 0-9.183 1.5054-4.3657 2.4086-4.3657 9.183v31.162h36.28v-31.162q0-5.2689-2.4086-7.6776-3.0108-3.0108-11.14-3.0108v-3.7635h51.184v3.7635q-6.1721 0-9.0324 1.656-4.2151 2.4086-4.2151 9.0324v72.861q0 6.0216 3.613 8.2797 2.4086 1.5054 9.6346 2.4086z" stroke-width=".25807"/></g><g><path d="m135.2 272.25-3.4727 16.283h-32.103v-1.7749q7.6398-8.18 11.19-12.347 5.4019-6.328 7.7942-10.727 2.8553-5.1704 2.8553-9.5691 0-3.0868-1.5434-5.7106-2.4694-4.1672-7.6398-4.1672-2.3151 0-4.2444 1.0032-3.3183 1.6977-5.1704 5.9421h-2.1608q2.0836-5.8649 4.9389-9.4919 4.9389-6.2508 12.039-6.2508 5.0161 0 8.8746 2.7781 5.4019 3.8585 5.4019 11.653 0 3.164-1.0804 5.9421-2.0064 5.0932-7.717 10.572l-12.502 11.884h11.653q6.0964 0 7.717-0.92604 1.6206-1.0032 3.3183-5.0932z" stroke-width=".26458"/></g></g></svg>'))

/**
 * Created with Inkscape
 */
export const defineIconH3 = component.createComponentDefiner(() => createIcon('d-icon-h3', '<svg viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" transform="translate(0 -161.53)"><g transform="scale(.85854 1.1648)" aria-label="H"><path d="m111.41 243.95v3.7635h-51.184v-3.7635q7.6776-0.90324 9.7851-2.1076 3.7635-2.2581 3.7635-8.5808v-34.624h-36.28v34.624q0 6.1722 3.7635 8.4303 2.4086 1.3549 9.7851 2.2581v3.7635h-50.732v-3.7635q6.0216-0.7527 7.527-1.3549 5.2689-1.957 5.2689-9.3335v-72.861q0-6.4732-3.914-8.7313-2.2581-1.3549-8.8819-1.957v-3.7635h50.732v3.7635q-6.4732 0-9.183 1.5054-4.3657 2.4086-4.3657 9.183v31.162h36.28v-31.162q0-5.2689-2.4086-7.6776-3.0108-3.0108-11.14-3.0108v-3.7635h51.184v3.7635q-6.1721 0-9.0324 1.656-4.2151 2.4086-4.2151 9.0324v72.861q0 6.0216 3.613 8.2797 2.4086 1.5054 9.6346 2.4086z" stroke-width=".25807"/></g><path d="m102.79 247.09-1.6206-0.92604q2.0836-4.553 6.0193-7.717 5.0161-4.09 11.267-4.09 5.8649 0 9.4148 2.6238 3.5498 2.5466 3.5498 7.7942 0 3.9357-1.9292 6.4051-1.2347 1.5434-4.4759 3.5498 4.553 1.6978 6.9453 5.4019 2.4694 3.627 2.4694 8.18 0 8.2572-6.5595 14.276-6.5595 5.9421-16.669 5.9421-4.9389 0-8.1029-1.6977-3.5498-1.9292-3.5498-5.4019 0-1.7749 1.3891-3.0096 1.4662-1.3119 3.3955-1.3119 3.3955 0 7.4083 3.7813 4.0128 3.7813 6.1736 3.7813 3.2411 0 5.2476-1.9293 2.4694-2.3923 2.4694-7.254 0-8.0257-7.9485-12.424-2.3923-1.3119-7.5627-3.0868v-1.3119q4.3987-1.3891 6.4051-2.8553 3.627-2.701 3.627-7.254 0-3.627-2.0064-5.7878-2.0064-2.1608-6.1736-2.1608-3.4727 0-6.1736 2.5466-1.3119 1.2347-3.0096 3.9357z" stroke-width=".26458"/></g></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/list?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconList = component.createComponentDefiner(() => createIcon('d-icon-list', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/list-ul?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconListUl = component.createComponentDefiner(() => createIcon('d-icon-list-ul', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/list-ol?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconListOl = component.createComponentDefiner(() => createIcon('d-icon-list-ol', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/code?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconCode = component.createComponentDefiner(() => createIcon('d-icon-code', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/table?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconTable = component.createComponentDefiner(() => createIcon('d-icon-table', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/quote-left?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconQuoteLeft = component.createComponentDefiner(() => createIcon('d-icon-quote-left', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/quote-right?style=solid] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
export const defineIconQuoteRight = component.createComponentDefiner(() => createIcon('d-icon-quote-right', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>'))

/**
 * @license CC-BY-4.0 [https://fontawesome.com/icons/caret-down?style=regular] Created by https://fontawesome.com/ and slightly sanitized for use in d-components.
 */
// export const defineIcon = component.createComponentDefiner(() => createIcon('d-icon-', ''))
