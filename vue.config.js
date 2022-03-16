// const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set("@", resolve("src"))
  // },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/element-variables.scss";`
      }
    }
  }
}