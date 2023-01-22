export default {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-selectors': {
      importFrom: 'src/styles/custom-selectors.css',
    },
    'postcss-custom-media': {
      importFrom: 'src/styles/custom-media.css',
    },
    'postcss-preset-env': {
      stage: 3,
      features: {},
    },
    'autoprefixer': {},
  },
}
