const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,js}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    lineHeight: {
      'extra-loose': '2.5',
      12: '3rem',
      16: '4rem',
    },
    // fontFamily: { oppins: '' },
  },
  plugins: [require('@tailwindcss/forms')],
};
