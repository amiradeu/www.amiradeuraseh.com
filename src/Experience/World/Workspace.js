import { MeshBasicMaterial } from 'three'
import Experience from '../Experience.js'

export default class Workspace {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.options = {
            emissionColor: '#e29c30',
        }

        this.setMaterials()
        this.setModel()
        this.setDebug()
    }

    setTextures() {}

    setMaterials() {
        this.emissionMaterial = new MeshBasicMaterial({
            color: this.options.emissionColor,
        })
    }

    setModel() {
        this.items = {}

        this.model = this.resources.items.model.scene
        this.scene.add(this.model)

        this.model.traverse((child) => {
            this.items[child.name] = child

            child.castShadow = true
            child.receiveShadow = true
        })

        // this.model.scale.set(0.02, 0.02, 0.02)
        this.model.position.set(0, -2, 0)

        this.setEmission()
    }

    setEmission() {
        this.items['emissions'].material = this.emissionMaterial
    }

    update() {}

    setDebug() {
        if (!this.debug.active) return

        const f1 = this.debug.ui.addFolder({
            title: '💡 Lights',
        })

        f1.addBinding(this.options, 'emissionColor', {
            label: 'Color',
        }).on('change', () => {
            this.emissionMaterial.color.set(this.options.emissionColor)
        })
    }
}
