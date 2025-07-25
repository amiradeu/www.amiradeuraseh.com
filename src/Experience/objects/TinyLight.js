import { Color, PointLight, PointLightHelper } from 'three'
import Experience from '../Experience'

export default class TinyLight {
    constructor(options = {}) {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene

        const defaultOptions = {
            position: { x: 0, y: 0, z: 0 },
            color: '#fff000',
            intensity: 1.5,
            name: 'Point Light',
        }

        this.options = {
            ...defaultOptions,
            ...options,
        }

        this.setPointLight()
        this.setDebug()
    }

    setPointLight() {
        this.pointLight = new PointLight(
            this.options.color,
            this.options.intensity
        )
        this.pointLight.position.copy(this.options.position)
        this.scene.add(this.pointLight)
    }

    setHelper() {
        this.pointLightHelper = new PointLightHelper(this.pointLight, 0.5)
        this.scene.add(this.pointLightHelper)
    }

    setDebug() {
        if (!this.debug.active) return

        if (this.pointLight) {
            this.setHelper()

            const folder = this.debug.ui.addFolder({
                title: `🕯️ ${this.options.name}`,
            })

            folder.addBinding(this.pointLight, 'position', {
                step: 0.01,
            })

            folder.addBinding(this.pointLight, 'intensity', {
                min: 0,
                max: 10,
                step: 0.01,
            })

            folder.addBinding(this.options, 'color').on('change', () => {
                this.pointLight.color = new Color(this.options.color)
            })
        }
    }
}
