import {
    AmbientLight,
    Color,
    DirectionalLight,
    DirectionalLightHelper,
    HemisphereLight,
    HemisphereLightHelper,
    PointLight,
    PointLightHelper,
} from 'three'
import Experience from '../Experience'

export default class Lights {
    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene

        this.options = {
            ambientIntensity: 1,

            directionalIntensity: 1,
            directionalPosition: { x: 0, y: 5, z: -10 },

            hemisphereColor: '#ff0000',
            hemisphereGroundColor: '#0000ff',
            hemisphereIntensity: 0.9,

            pointColor: '#ff0000',
            pointIntensity: 1.5,
        }

        // this.setAmbient()
        // this.setDirectional()
        // this.setHemisphereLight()
        this.setPointLight()
        this.setDebug()
    }

    setAmbient() {
        this.ambientLight = new AmbientLight(0xffffff, 1)
        this.scene.add(this.ambientLight)
    }

    setDirectional() {
        this.directionalLight = new DirectionalLight(0xffffff, 1)
        this.directionalLight.position.set(0, 5, -10)
        this.scene.add(this.directionalLight)
    }

    setHemisphereLight() {
        this.hemisphereLight = new HemisphereLight(
            this.options.hemisphereColor,
            this.options.hemisphereGroundColor,
            this.options.hemisphereIntensity
        )
        this.scene.add(this.hemisphereLight)
    }

    setPointLight() {
        this.pointLight = new PointLight(
            this.options.pointColor,
            this.options.pointIntensity
        )
        this.scene.add(this.pointLight)
    }

    setDebug() {
        if (!this.debug.active) return

        const f1 = this.debug.ui.addFolder({
            title: '🌞 Lights',
        })

        if (this.ambientLight) {
            const f2 = f1.addFolder({
                title: '🌞 Ambient Light',
            })

            f2.addBinding(this.ambientLight, 'intensity', {
                min: 0,
                max: 1,
            })
        }

        if (this.directionalLight) {
            this.directionalLightHelper = new DirectionalLightHelper(
                this.directionalLight
            )
            this.scene.add(this.directionalLightHelper)

            const f3 = f1.addFolder({
                title: '🌞 Directional Light',
            })

            f3.addBinding(this.directionalLight, 'intensity', {
                min: 0,
                max: 1,
            })
            f3.addBinding(this.directionalLight, 'position')
            f3.addBinding(this.directionalLight, 'rotation', {
                min: -Math.PI,
                max: Math.PI,
            })
        }

        if (this.hemisphereLight) {
            this.hemisphereLightHelper = new HemisphereLightHelper(
                this.hemisphereLight
            )
            this.scene.add(this.hemisphereLightHelper)

            const f4 = f1.addFolder({
                title: '🌞 Hemisphere Light',
            })

            f4.addBinding(this.hemisphereLight, 'intensity', {
                min: 0,
                max: 1,
            })

            f4.addBinding(this.options, 'hemisphereColor', {
                label: 'Color',
            }).on('change', () => {
                this.hemisphereLight.color = new Color(
                    this.options.hemisphereColor
                )
            })

            f4.addBinding(this.options, 'hemisphereGroundColor', {
                label: 'Ground Color',
            }).on('change', () => {
                this.hemisphereLight.groundColor = new Color(
                    this.options.hemisphereGroundColor
                )
            })
        }

        if (this.pointLight) {
            const pointLightHelper = new PointLightHelper(this.pointLight, 0.5)
            this.scene.add(pointLightHelper)

            const f5 = f1.addFolder({
                title: '🔦 Point Light',
            })

            f5.addBinding(this.pointLight, 'position')

            f5.addBinding(this.pointLight, 'intensity', {
                min: 0,
                max: 10,
            })

            f5.addBinding(this.options, 'pointColor').on('change', () => {
                this.pointLight.color = new Color(this.options.pointColor)
            })
        }
    }
}
