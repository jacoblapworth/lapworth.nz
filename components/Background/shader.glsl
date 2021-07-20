#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_extcolor1;
uniform vec3 u_extcolor2;

mat2 rotate2d(float angle) {
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}
float gradientNoise (in vec2 uv) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(uv, magic.xy)));
}
float variation(vec2 v1, vec2 v2, float strength, float speed) {
  return sin(dot(normalize(v1), normalize(v2)) * strength + u_time * speed) /
         100.0;
}

vec3 paintCircle(vec2 uv, vec2 center, float rad, float width) {

  vec2 diff = center - uv;
  float len = length(diff);

  len += variation(diff, vec2(0.0, 1.0), 5.0, 1.0);
  len -= variation(diff, vec2(1.0, 0.0), 5.0, 1.0);

  float circle =
      smoothstep(rad - width, rad, len) - smoothstep(rad, rad + width, len);
  return vec3(circle);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord.xy / u_resolution.xy;
  uv.x *= 1.5;
  uv.x -= 0.25;

  vec3 color;
  vec3 color2;
  float radius = 0.5;
  vec2 center = vec2(0.5);
  vec2 v = rotate2d(u_time * 0.1) * uv;
  vec2 v3 = rotate2d(u_time * 0.3) * uv;
  vec2 v5 = rotate2d(u_time * 0.5) * uv;

  color = paintCircle(uv * v5, center * v3, 1.0 * v.x, 1.5);
  color2 = paintCircle(uv * v3, vec2(0.2) * v, 1.0 * v3.x, 1.3);

  color *= vec3(v5.x, v5.x, v5.x);
  v = rotate2d(u_time * -0.3) * uv;
  color2 *= vec3(v.y, v.y, v.y);
  vec3 finalColor = color + color2;

  float grayscaleValue =
      clamp(dot(finalColor.rgb, vec3(0.299, 0.587, 0.114)), 0.0, 0.95);
  vec3 preComp = mix(u_extcolor2, u_extcolor1, grayscaleValue);
  preComp += (1.0 / 255.0) * gradientNoise(fragCoord) - (0.5 / 255.0);

  float strength = 8.0;
  
  float x = (uv.x + 0.5) * (uv.y + 0.5) * (u_time * 1.0);
  vec4 grain =
      vec4(mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01) - 0.005) *
      strength;

  if (uv.x > 0.5) {
    grain = 1.0 - grain;
    fragColor = vec4(preComp, 1.0) * grain;
  } else {
    fragColor = vec4(preComp, 1.0) + grain;
  }
}

void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }