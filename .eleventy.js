/**
 * Eleventy Configuration
 * eric-walters.ca
 *
 * Source:  src/
 * Output:  _site/
 * Templates: Nunjucks (.njk)
 *
 * CSS/JS/files are copied via passthrough.
 * Content is data-driven — edit JSON in src/_data/, not templates.
 */

module.exports = function (eleventyConfig) {
  // ── Passthrough Copy ──────────────────────────────
  // Static assets copied directly to _site/
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/files");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // ── Watch Targets ─────────────────────────────────
  // Trigger rebuild when CSS/JS changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // ── Filters ───────────────────────────────────────
  // Filter to get locale-specific data
  eleventyConfig.addFilter("localeData", function (data, locale) {
    return data[locale] || data["en"];
  });

  // ── Collections ───────────────────────────────────
  // Project pages per locale
  eleventyConfig.addCollection("projects_en", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/en/projects/*.md");
  });
  eleventyConfig.addCollection("projects_fr", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/fr/projects/*.md");
  });
  eleventyConfig.addCollection("projects_de", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/de/projects/*.md");
  });

  // ── Directory Config ──────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
