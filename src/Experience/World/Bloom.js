import { Layers, Mesh, MeshBasicMaterial } from 'three'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'

import Experience from '../Experience'
import { BLOOM_SCENE } from '../Camera.js'

export default class Bloom {
    constructor() {
        this.experience = new Experience()
        this.renderer = this.experience.renderer.instance
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.effectComposer = this.experience.effectComposer
        this.debug = this.experience.debug

        this.options = {
            strength: 0.12,
            radius: 0.1,
            threshold: 0.67,
        }

        this.setLayer()
        this.setBloom()
        this.setDebug()
    }

    setLayer() {
        this.layer = new Layers()
        this.layer.set(BLOOM_SCENE)
    }

    setMaterial() {
        // Store materials not effected by bloom
        this.materials = {}
        this.darkMaterial = new MeshBasicMaterial({ color: 'black' })
    }

    setBloom() {
        this.pass = new UnrealBloomPass()

        this.pass.strength = this.options.strength
        this.pass.radius = this.options.radius
        this.pass.threshold = this.options.threshold

        this.composer = new EffectComposer(this.renderer)
        this.composer.renderToScreen = false

        this.effectComposer.addPass(this.pass)
        // this.effectComposer.addSubComposer(this.composer)
    }

    // Add objects causing bloom
    addBloom(mesh = new Mesh()) {
        mesh.layers.enable(BLOOM_SCENE)
    }

    setDebug() {
        if (!this.debug.active) return
        const f1 = this.debug.ui.addFolder({
            title: '✨ Bloom',
        })

        f1.addBinding(this.pass, 'enabled')

        f1.addBinding(this.pass, 'strength', {
            min: 0,
            max: 0.5,
        })

        f1.addBinding(this.pass, 'radius', {
            min: 0,
            max: 2,
        })

        // Lower value means more objects will bloom
        f1.addBinding(this.pass, 'threshold', {
            min: 0,
            max: 2,
        })
    }
}
