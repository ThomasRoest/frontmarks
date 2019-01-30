export const colors = {
  white: '#fff',
  black: '#333',
  yellow: '#FFD257',
  yellowLight: '#FFE359',

  twitter: '#1DA1F2',
  twitterLight: '#4ab7fb',
};

export const radius = {
  small: 2,
  medium: 4,
};

export const spacing = {
  dp: 4,
  dp2: 8,
  dp6: 24,
  dp10: 40,
};

export const font = {
  family: 'Source Sans Prop, Arial, sans-serif',

  weightRegular: 400,
  weightBold: 600,

  captionSize: 12,
  captionLineHeight: 16,

  bodySize: 14,
  bodyLineHeight: 20,

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
  heading: `
    font-size: ${font.headingSize}px;
    line-height: ${font.headingLineHeight}px;
  `
};
