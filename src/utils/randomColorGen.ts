const randomColor = require('randomcolor');

export const randColorGenerator = (color: string) => {
  return randomColor({
    format: 'hex',
    luminosity: 'bright',
    hue: color,
  });
}