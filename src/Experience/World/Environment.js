import { Color, EquirectangularReflectionMapping } from 'three'

import Experience from '../Experience.js'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.options = {
            intensity: 0.4,
            rotation: Math.PI,
            isVisible: false,
            color: '#191923',
        }

        this.setTexture()
        this.setEnvironmentMap()
        this.setDebug()
    }

    setTexture() {
        this.textures = {}

        this.texture = this.resources.items.environmentMap2
        this.texture.mapping = EquirectangularReflectionMapping
    }

    setEnvironmentMap() {
        this.scene.environment = this.texture
        this.backgroundVisible()

        this.scene.backgroundRotation.y = this.options.rotation
        this.scene.environmentRotation.y = this.options.rotation

        this.scene.backgroundIntensity = this.options.intensity
        this.scene.environmentIntensity = this.options.intensity
    }

    backgroundVisible() {
        if (this.options.isVisible) {
            this.scene.background = this.texture
        } else {
            this.scene.background = new Color(this.options.color)
        }
    }

    setDebug() {
        if (!this.debug.active) return

        const f1 = this.debug.ui.addFolder({
            title: '🏞️ Environment Map',
        })

        f1.addBinding(this.options, 'isVisible', {
            label: 'Background',
        }).on('change', () => {
            this.backgroundVisible()
        })

        f1.addBinding(this.options, 'intensity', {
            label: 'Intensity',
            min: 0,
            max: 0.5,
        }).on('change', () => {
            this.scene.backgroundIntensity = this.options.intensity
            this.scene.environmentIntensity = this.options.intensity
        })

        f1.addBinding(this.options, 'rotation', {
            label: 'Rotation',
            min: -Math.PI,
            max: Math.PI,
        }).on('change', () => {
            this.scene.backgroundRotation.y = this.options.rotation
            this.scene.environmentRotation.y = this.options.rotation
        })

        f1.addBinding(this.options, 'color', {
            label: 'Color',
        }).on('change', () => {
            this.scene.background = new Color(this.options.color)
        })
    }
}
