export const colors = {
  white: '#fff',

  gray: '#999',
  grayLight: '#eeeeee',

  black: '#333',

  blueLight: '#1B9CFC',

  red: '#ee5253',

  yellow: '#FFD257',
  yellowLight: '#FFE359',

  twitter: '#1DA1F2',
  twitterLight: '#4ab7fb',
};

export const radius = {
  small: 2,
  medium: 3,
  large: 4,
};

export const spacing = {
  dp: 4,
  dp2: 8,
  dp3: 12,
  dp4: 16,
  dp5: 20,
  dp6: 24,
  dp8: 32,
  dp10: 40,
};

export const font = {
  family: 'Source Sans Pro, Arial, sans-serif',

  weightRegular: 400,
  weightBold: 700,

  captionSize: 12,
  captionLineHeight: 16,

  bodySize: 14,
  bodyLineHeight: 20,

  leadSize: 16,
  leadLineHeight: 20,

  headingSize: 20,
  headingLineHeight: 28,
};

export const fontSets = {
  caption: `
    font-size: ${font.captionSize}px;
    line-height: ${font.captionLineHeight}px;
  `,
  body: `
    font-size: ${font.bodySize}px;
    line-height: ${font.bodyLineHeight}px;
  `,
  lead: `
    font-size: ${font.leadSize}px;
    line-height: ${font.leadLineHeight}px;
  `,
  heading: `
    font-size: ${font.headingSize}px;
    line-height: ${font.headingLineHeight}px;
  `
};
