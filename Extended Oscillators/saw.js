setFunction({
  name: 'saw',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'frequency',
      default: 60,
    },
{
      type: 'float',
      name: 'sync',
      default: 0.1,
    },
{
      type: 'float',
      name: 'offset',
      default: 0,
    }
  ],
  glsl:
`   vec2 st = _st;
   float r = fract((st.x-offset/frequency+time*sync)*frequency);
   float g = fract((st.x+time*sync)*frequency)*0.5 + 0.5;
   float b = fract((st.x+offset/frequency+time*sync)*frequency);
   return vec4(r, g, b, 1.0);`
})