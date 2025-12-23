#version 330
precision highp float;
uniform sampler2D g_Texture0;

in vec2 v_TexCoord;
out vec4 out_FragColor;

void main() {
    vec3 color = texture(g_Texture0, v_TexCoord).rgb;

    float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
    color = mix(vec3(lum), color, 1.0);
    out_FragColor = vec4(color, 1.0);
}