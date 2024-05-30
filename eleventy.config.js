import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(lightningCSS);
  eleventyConfig.addPassthroughCopy("src/assets/images");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
