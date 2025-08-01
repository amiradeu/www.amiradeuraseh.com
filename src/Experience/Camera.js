import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Experience from './Experience.js'

export const BLOOM_SCENE = 1
export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        // this.instance.position.set(8, 2, 5)
        this.instance.position.set(22, 13, 20)
        this.instance.layers.enable(BLOOM_SCENE)
        this.scene.add(this.instance)
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.maxPolarAngle = Math.PI * 0.55
        this.controls.maxDistance = 45
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        // console.log(
        //     'x',
        //     this.instance.position.x,
        //     'y',
        //     this.instance.position.y,
        //     'z',
        //     this.instance.position.z
        // )
        this.controls.update()
    }
}
