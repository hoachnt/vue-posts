const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
};
