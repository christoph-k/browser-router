class BrowserRouter {
  /**
   * @constructor
   * @param {string} root - id of the element root element
   */
  constructor (root) {
    this.root = root
    this.routes = {}
    this.default = null
  }

  /**
   * @param {string} pattern - pattern to match
   * @param {object} component - custom element to load
   */
  route (pattern, component) {
  }
}

export default BrowserRouter
