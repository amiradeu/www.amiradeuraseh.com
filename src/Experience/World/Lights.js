import { AmbientLight, DirectionalLight, DirectionalLightHelper } from 'three'
import Experience from '../Experience'

export default class Lights {
    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene

        this.setLights()
        this.setDebug()
    }

    setLights() {
        this.ambientLight = new AmbientLight(0xffffff, 1)
        this.scene.add(this.ambientLight)

        this.directionalLight = new DirectionalLight(0xffffff, 1)
        this.directionalLight.position.set(0, 5, -10)
        this.scene.add(this.directionalLight)
    }

    setLightsHelper() {
        this.directionalLightHelper = new DirectionalLightHelper(
            this.directionalLight
        )
        this.scene.add(this.directionalLightHelper)
    }

    setDebug() {
        if (!this.debug.active) return

        this.setLightsHelper()

        this.debug.ui.addBinding(this.directionalLight, 'position')
        this.debug.ui.addBinding(this.directionalLight, 'rotation', {
            min: -Math.PI,
            max: Math.PI,
        })
    }
}
