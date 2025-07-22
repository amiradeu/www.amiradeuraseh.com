import { EquirectangularReflectionMapping } from 'three'

import Experience from '../Experience.js'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.setTexture()
        this.setEnvironmentMap()
        this.setDebug()
    }

    setTexture() {
        this.texture = this.resources.items.environmentMap2
        this.texture.mapping = EquirectangularReflectionMapping
    }

    setEnvironmentMap() {
        this.scene.environment = this.texture
        this.scene.background = this.texture

        this.scene.backgroundRotation.y = Math.PI
        this.scene.environmentRotation.y = Math.PI

        this.scene.backgroundIntensity = 0.8
        this.scene.environmentIntensity = 0.2
    }

    setDebug() {
        if (!this.debug.active) return

        const f1 = this.debug.ui.addFolder({
            title: '🏞️ Background',
        })
        f1.addBinding(this.scene, 'backgroundIntensity', {
            label: 'Intensity',
        })
        f1.addBinding(this.scene, 'backgroundRotation', {
            label: 'Rotation',
        })

        const f2 = this.debug.ui.addFolder({
            title: '🏰 Scene',
        })
        f2.addBinding(this.scene, 'environmentIntensity', {
            label: 'Intensity',
        })
        f2.addBinding(this.scene, 'environmentRotation', {
            label: 'Rotation',
        })
    }
}
