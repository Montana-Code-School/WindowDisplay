#version 120

uniform sampler2D tex0;
varying vec2 texCoordVarying;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(){
    vec3 color = vec3(0.0);
    vec4 source = texture2D(tex0, texCoordVarying);
    color = hsv2rgb(vec3(source.r, 1.0, 1.0));
    gl_FragColor = source;
    //gl_FragColor = vec4(color.rgb, source.a);
}
