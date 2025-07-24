import { Camera, Color, EquirectangularReflectionMapping, Scene } from 'three'

import Experience from '../Experience.js'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.options = {
            environmentIntensity: 0.63,
            backgroundIntensity: 0.11,
            environmentRotation: Math.PI,
            backgroundRotation: 2.87,
            isVisible: true,
            color: '#191923',
        }

        this.setTexture()
        this.setEnvironmentMap()
        this.setDebug()
    }

    setTexture() {
        // Seperate background and environment textures
        // to avoid bloom effect on background
        this.environmentTexture = this.resources.items.environmentMap2
        this.environmentTexture.mapping = EquirectangularReflectionMapping

        this.backgroundTexture = this.resources.items.environmentMap3
        this.backgroundTexture.mapping = EquirectangularReflectionMapping
    }

    setEnvironmentMap() {
        this.scene.environment = this.environmentTexture
        this.setBackground()

        this.scene.backgroundRotation.y = this.options.backgroundRotation
        this.scene.environmentRotation.y = this.options.environmentRotation

        this.scene.backgroundIntensity = this.options.backgroundIntensity
        this.scene.environmentIntensity = this.options.environmentIntensity
    }

    setBackground() {
        if (this.options.isVisible) {
            this.scene.background = this.backgroundTexture
        } else {
            this.scene.background = new Color(this.options.color)
        }
    }

    setDebug() {
        if (!this.debug.active) return

        const f1 = this.debug.ui.addFolder({
            title: '🏞️ Environment Map',
        })

        const f2 = f1.addFolder({
            title: '🌇 Background',
        })

        f2.addBinding(this.options, 'isVisible', {
            label: 'Visible',
        }).on('change', () => {
            this.setBackground()
        })

        f2.addBinding(this.options, 'backgroundIntensity', {
            label: 'Intensity',
            min: 0,
            max: 0.5,
        }).on('change', () => {
            this.scene.backgroundIntensity = this.options.backgroundIntensity
        })

        f2.addBinding(this.options, 'backgroundRotation', {
            label: 'Rotation',
            min: -Math.PI,
            max: Math.PI,
        }).on('change', () => {
            this.scene.backgroundRotation.y = this.options.backgroundRotation
        })

        f2.addBinding(this.options, 'color', {
            label: 'Color',
        }).on('change', () => {
            this.scene.background = new Color(this.options.color)
        })

        const f3 = f1.addFolder({
            title: '🛋️ Environment',
        })

        f3.addBinding(this.options, 'environmentIntensity', {
            label: 'Intensity',
            min: 0,
            max: 2,
        }).on('change', () => {
            this.scene.environmentIntensity = this.options.environmentIntensity
        })

        f3.addBinding(this.options, 'environmentRotation', {
            label: 'Rotation',
            min: -Math.PI,
            max: Math.PI,
        }).on('change', () => {
            this.scene.backgroundRotation.y = this.options.environmentRotation
            this.scene.environmentRotation.y = this.options.environmentRotation
        })
    }
}
