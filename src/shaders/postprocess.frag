#version 330
precision highp float;
uniform sampler2D g_Texture0;

uniform float u_Saturation;
uniform float u_Contrast;
uniform vec3 u_BorderColour;

in vec2 v_TexCoord;
out vec4 out_FragColor;

void main() {
    vec4 tex = texture(g_Texture0, v_TexCoord);

    if (tex.a < 0.01) {
        out_FragColor = vec4(u_BorderColour, 1.0);
        return;
    }

    vec3 color = tex.rgb;

    // Saturation
    float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
    color = mix(vec3(lum), color, u_Saturation);

    // Contrast
    color = (color - 0.5) * u_Contrast + 0.5;

    out_FragColor = vec4(color, 1.0);
}