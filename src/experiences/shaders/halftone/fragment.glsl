uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uShadowRepetitions;
uniform vec3 uShadowColor;
uniform float uLightRepetitions;
uniform vec3 uLightColor;

varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/ambientLight.glsl
#include ../includes/directionalLight.glsl

vec3 halftone(
    vec3 color,         // initial color
    float repetitions,  // num of grid vertically - control point size
    vec3 direction,     // of halftone
    // control gradient range intensity
    float low,          // of smoothstep
    float high,         // of smoothstep

    vec3 pointColor,    // color of halftone
    vec3 normal         // to compare with direction
)
{
float intensity = dot(normal, direction);
    intensity = smoothstep(low, high, intensity);

    // height controls canvas scene -> all scene fits the scene when resize
    vec2 uv = gl_FragCoord.xy / uResolution.y;
    uv *= repetitions;
    uv = mod(uv, 1.0);

    // drawing circle
    float point = distance(uv, vec2(0.5));
    point = 1.0 - step(0.5 * intensity, point); // intensity - size of circle

    // mix with halftone
    return mix(color, pointColor, point);
}

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = uColor;

    // Lights
    vec3 light = vec3(0.0);

    light += ambientLight(
        vec3(1.0),  // light color
        1.0         // light intensity
    );

    light += directionalLight(
        vec3(1.0, 1.0, 1.0),
        1.0,
        normal,
        vec3(1.0, 1.0, 0.0),
        viewDirection,
        1.0
    );
    
    color *= light;

    // Halftone Shadow
    color = halftone(color, uShadowRepetitions, vec3(0.0, -1.0, 0.0), -0.8, 1.5, uShadowColor, normal);

    // Halftone Light
    color = halftone(color, uLightRepetitions, vec3(1.0, 1.0, 0.0), 0.5, 1.5, uLightColor, normal);

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}