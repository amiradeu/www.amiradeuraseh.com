import { MeshBasicMaterial } from 'three'

import Experience from '../Experience.js'
import { BLOOM_SCENE } from '../Camera.js'

export default class Workspace {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.options = {
            emissionColor: '#f7ff59',
            emissiveStrength: 8,
        }

        this.setModel()
        this.setDebug()
    }

    setModel() {
        this.items = {}

        this.model = this.resources.items.model.scene
        this.scene.add(this.model)

        this.model.traverse((child) => {
            this.items[child.name] = child

            // Add to bloom layer
            child.layers.set(BLOOM_SCENE)
            child.castShadow = true
            child.receiveShadow = true
        })

        this.model.position.set(0, -3, 0)

        this.emission = this.items['emissions'].material
        this.emission.emissiveIntensity = this.options.emissiveStrength
    }

    update() {}

    setDebug() {
        if (!this.debug.active) return

        const f1 = this.debug.ui.addFolder({
            title: '💡 Emission',
        })

        f1.addBinding(this.emission, 'emissiveIntensity', {
            min: 0,
            max: 15,
        })
        f1.addBinding(this.options, 'emissionColor', {
            label: 'Color',
        }).on('change', () => {
            this.emission.emissive = this.options.emissionColor
        })
    }
}
