import Experience from '../Experience.js'
import Environment from './Environment.js'
import Lights from './Lights.js'
import Workspace from './Workspace.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () => {
            // this.lights = new Lights()
            this.environment = new Environment()

            this.workspace = new Workspace()
        })
    }

    update() {}
}
