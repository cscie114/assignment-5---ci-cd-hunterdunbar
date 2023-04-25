const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
module.exports = function(eleventyConfig) {
   eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
      name: "myfunction", // The serverless function name from your permalink object
      functionsDir: "./netlify/functions/",
   });
   eleventyConfig.addPassthroughCopy("src/assets/**");
   return {
   dir: {
   input: "src",
   output: "dist"
   }
   };
   };