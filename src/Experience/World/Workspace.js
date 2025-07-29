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
import Text from '../objects/Text.js'

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
        this.setTexts()
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

    setTexts() {
        this.url = new Text(
            this.items['texturl'],
            'mistwood-cottage.vercel.app'
        )

        console.log(this.url.textCanvas.getMeasure().width)
    }

    setLights() {
        new TinyLight({
            mesh: this.items['emissiontiny'],
            intensity: 0.3,
            name: 'Tiny',
        })

        new TinyLight({
            mesh: this.items['emissionmain'],
            offset: { x: 0, y: -2, z: 0 },
            intensity: 10,
            name: 'Main',
        })

        new TinyLight({
            mesh: this.items['emissionwindow'],
            intensity: 0.6,
            name: 'Window',
        })

        new TinyLight({
            mesh: this.items['emissionshelf'],
            intensity: 0.2,
            name: 'Shelf',
        })

        new TinyLight({
            mesh: this.items['emissionwindowshelf'],
            intensity: 0.2,
            name: 'Window Shelf',
        })
    }

    update() {
        this.url.textCanvas.draw()
    }

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
