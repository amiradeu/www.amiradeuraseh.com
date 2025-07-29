import { Box3, MeshBasicMaterial, Vector3 } from 'three'
import TextCanvas from './TextCanvas'
import Experience from '../Experience'

export default class Text {
    constructor(mesh, text) {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.panel = mesh

        const box = new Box3().setFromObject(this.panel)
        const size = new Vector3()
        box.getSize(size)
        console.log(size)

        this.textCanvas = new TextCanvas(
            'Arial',
            400,
            10,
            size.z * 100,
            size.y * 100,
            this.sizes.pixelRatio
        )

        this.textCanvas.updateText(text)
        this.setMaterial()
        this.setPanel()
    }

    setMaterial() {
        this.material = new MeshBasicMaterial({
            map: this.textCanvas.texture,
        })
    }

    setPanel() {
        this.panel.material = this.material
    }
}
