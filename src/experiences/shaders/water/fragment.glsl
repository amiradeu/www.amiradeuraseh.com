uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform float uCursorX;
uniform float uCursorY;

varying float vElevation;
varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/pointLight.glsl

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);

    // Cursor
    float cursorX = uCursorX * 2.0;
    float cursorY = uCursorY * 2.0;

    // Base color
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    mixStrength = smoothstep(0.0, 1.0, mixStrength);
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);

    // Light
    vec3 light = vec3(0.0);
    light += pointLight(
        vec3(1.0),                  // light color
        10.0,                        // light intensity
        normal,                     // normal
        vec3(cursorX, 0.25, cursorY),       // light position
        viewDirection,              // view direction
        30.0,                        // specular power
        vPosition,                  // position
        1.55                        // decay
    );

    color *= light;
    
    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}