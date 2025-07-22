import { Pane } from 'tweakpane'
import Stats from 'stats-gl'

import Experience from '../Experience.js'

export default class Debug {
    constructor() {
        this.active = window.location.hash === '#debug'

        if (this.active) {
            this.ui = new Pane()

            this.experience = new Experience()
            this.stats = new Stats({
                trackGPU: true,
            })
            this.stats.init(this.experience.canvas)
            document.body.appendChild(this.stats.dom)
        }
    }

    begin() {
        if (this.active) this.stats.begin()
    }

    update() {
        if (this.active) {
            this.stats.end()
            this.stats.update()
        }
    }
}
