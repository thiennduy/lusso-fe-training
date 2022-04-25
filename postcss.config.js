module.exports = {
  plugins: [
    "postcss-normalize",
    "precss",
    "lost",
    "postcss-import",
    "postcss-url",
    "postcss-mixins",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009"
        },
        stage: 3,
        features: {
          "custom-properties": false
        }
      }
    ]
  ]
}
