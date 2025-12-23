#version 330
precision highp float;
uniform sampler2D g_Texture0;

uniform float u_Saturation;
uniform float u_Contrast;

in vec2 v_TexCoord;
out vec4 out_FragColor;

void main() {
    vec3 color = texture(g_Texture0, v_TexCoord).rgb;

    // Saturation
    float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
    color = mix(vec3(lum), color, u_Saturation);

    // Contrast
    color = (color - 0.5) * u_Contrast + 0.5;

    out_FragColor = vec4(color, 1.0);
}