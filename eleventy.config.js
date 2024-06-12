import pluginWebc from "@11ty/eleventy-plugin-webc";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/scripts/**/*.js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  eleventyConfig.addPlugin(lightningCSS);
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      build: {
        assetsInlineLimit: 0,
      },
    },
  });
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/includes/**/*.webc",
  });

  return {
    dir: {
      input: "src",
      output: "./dist",
      layouts: "layouts",
    },
  };
}
