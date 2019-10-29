/* global Regex */

export class BrowserRouter {
  /**
   * @constructor
   * @param {string} root - id of the root element
   */
  constructor (root) {
    this.root = document.getElementById(root)
    this.routes = {}
    this.default = null
  }

  /**
   * @param {string} pattern - pattern to match
   * @param {object} element - html element to load
   */
  setRoute (pattern, element) {
    this.routes[pattern] = {
      element: element,
      regex: new Regex(pattern)
    }
  }

  _route () {
    const p = this._path()
    for (const route in this.routes) {
      if (route.regex.match(p)) {
        this.root = route.element
      }
    }
  }

  _path () {
    const pathSplit = window.location.href.split('#', 2)
    console.log(pathSplit)
    if (pathSplit.length < 2 || pathSplit[1] === '') {
      return '/'
    } else {
      const pathSplit2 = pathSplit[1].split('?', 2)
      return pathSplit2[0]
    }
  }
}
