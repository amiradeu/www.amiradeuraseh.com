import {
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    Quaternion,
    RGBFormat,
    SRGBColorSpace,
    Vector3,
    VideoTexture,
} from 'three'

import Experience from '../Experience.js'
import TinyLight from '../objects/TinyLight.js'

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

        this.setTextures()
        this.setMaterial()
        this.setModel()
        this.setDebug()
    }

    setTextures() {
        this.video = this.resources.items.demovideo
        this.videoTexture = new VideoTexture(this.video)
        this.videoTexture.colorSpace = SRGBColorSpace
        this.videoTexture.format = RGBFormat

        this.photoTexture = this.resources.items.wallpaper
        this.photoTexture.flipY = false
        this.photoTexture.colorSpace = SRGBColorSpace
    }

    setMaterial() {
        this.videoMaterial = new MeshBasicMaterial({
            map: this.videoTexture,
        })

        this.photoMaterial = new MeshBasicMaterial({
            map: this.photoTexture,
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

        this.model.position.set(0, -3, 0)

        this.setEmission()
        this.setCustom()
        this.setLights()
    }

    setEmission() {
        // console.log(this.items['emissions'])
        this.emission = this.items['emissionmain'].material
        this.emission.emissiveIntensity = this.options.emissiveStrength
    }

    setCustom() {
        this.laptop = this.items['laptopscreen']
        this.laptop.material = this.photoMaterial

        this.monitor = this.items['monitorscreen']
        const worldPos = new Vector3()
        const worldQuat = new Quaternion()
        const worldScale = new Vector3()

        this.monitor.getWorldPosition(worldPos)
        this.monitor.getWorldQuaternion(worldQuat)
        this.monitor.getWorldScale(worldScale)

        const monitorPlane = new Mesh(
            new PlaneGeometry(1, 1),
            this.videoMaterial
        )
        monitorPlane.geometry.scale(1.92, 1.08, 1)

        monitorPlane.position.copy(worldPos)
        monitorPlane.scale.set(1.3, 1.3, 1.3)
        monitorPlane.geometry.rotateY(Math.PI * 0.5)

        this.scene.add(monitorPlane)

        this.monitor.parent.remove(this.monitor)
    }

    setLights() {
        const worldPos = new Vector3()
        const worldQuat = new Quaternion()
        const worldScale = new Vector3()

        let light = this.items['emissiontiny']
        light.getWorldPosition(worldPos)
        light.getWorldQuaternion(worldQuat)
        light.getWorldScale(worldScale)

        new TinyLight({ position: worldPos, intensity: 0.3, name: 'Tiny' })

        light = this.items['emissionmain']
        light.getWorldPosition(worldPos)
        light.getWorldQuaternion(worldQuat)
        light.getWorldScale(worldScale)
        worldPos.y -= 2
        new TinyLight({ position: worldPos, intensity: 10, name: 'Main' })

        light = this.items['emissionwindow']
        light.getWorldPosition(worldPos)
        light.getWorldQuaternion(worldQuat)
        light.getWorldScale(worldScale)
        new TinyLight({ position: worldPos, intensity: 0.6, name: 'Window' })

        light = this.items['emissionshelf']
        light.getWorldPosition(worldPos)
        light.getWorldQuaternion(worldQuat)
        light.getWorldScale(worldScale)
        new TinyLight({ position: worldPos, intensity: 0.2, name: 'Shelf' })

        light = this.items['emissionwindowshelf']
        light.getWorldPosition(worldPos)
        light.getWorldQuaternion(worldQuat)
        light.getWorldScale(worldScale)
        new TinyLight({
            position: worldPos,
            intensity: 0.2,
            name: 'Window Shelf',
        })
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
