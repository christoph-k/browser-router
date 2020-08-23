/* global RegExp */

export class BrowserRouter {
    /**
     * @constructor
     * @param {string} root - id of the root element
     */
    constructor(root) {
        this.root = document.getElementById(root)
        this.routes = {}
        this.currentPath = ""
        this.default = null
        const self = this
        window.onhashchange = () => {
            self.route()
        }
    }

    /**
     * @param {string} pattern - pattern to match
     * @param {object} element - html element to load
     */
    setRoute(pattern, element) {
        this.routes[pattern] = {
            element: element,
            regex: new RegExp(pattern),
        }
    }

    /**
     * @param {object} element - html element to load
     */
    setDefault(element) {
        this.default = element
    }

    route() {
        const p = this._path()
        if (p === this.currentPath) {
            return
        }
        this.root.innerHTML = ""
        this.currentPath = p
        for (const route in this.routes) {
            if (p.match(this.routes[route].regex)) {
                this.root.appendChild(this.routes[route].element)
                return
            }
        }
        this.root.appendChild(this.default)
    }

    _path() {
        if (window.location.hash.length < 2) {
            return "/"
        } else {
            return window.location.hash.substring(1).split("?", 2)[0]
        }
    }
}
