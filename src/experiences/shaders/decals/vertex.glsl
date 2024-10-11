uniform float uTime;

varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Elevation
    float elevation = sin(modelPosition.x * 1.0 - uTime) * 0.8;
    elevation += sin(modelPosition.y * 1.0 - uTime) * 0.8;
    modelPosition.z += elevation;

    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vUv = uv;
}