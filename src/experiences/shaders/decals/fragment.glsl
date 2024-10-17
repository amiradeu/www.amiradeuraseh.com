uniform sampler2D uDecalTexture;

varying vec2 vUv;

void main() {

    // Decal
    vec4 decalTexture = texture2D(uDecalTexture, vUv);

    vec3 colors = decalTexture.rgb;

    gl_FragColor = vec4(colors, 1.0);
}