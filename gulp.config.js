module.exports = {
  server: {
    proxy: "http://localhost:8888/xxxx",
    notify: false,
  },
  tailwind: "tailwind.config.js",
  css: {
    src: "src/css/",
    dist: "dist/css/",
  },
  js: {
    src: ["src/js/main.js"],
    dist: "dist/js/",
    name: "main.js",
  },
  clean: ["dist/**/*", "!dist/"],
  tasks: {
    css: true,
    cssVendor: false,
    fonts: false,
    js: false,
    clean: true,
    reload: true,
  },
};
