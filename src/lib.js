import * as logging from 'lib0/logging.js'

export const log = logging.createModuleLogger('d-components')

export const isTouchDevice = 'ontouchstart' in document.documentElement
