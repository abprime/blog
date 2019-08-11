var fs = require("fs");
var path = require("path");

module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  },
  exportPathMap: function() {
    const codingPosts = fs.readdirSync(path.join(__dirname, "content/coding"));
    // console.log("content", codingPosts);

    const postNames = codingPosts.map(
      post => `./coding/${post.split(".")[0].split("_")[1]}`
    );

    const pages = codingPosts.reduce((pages, post) => {
      const postName = post.split(".")[0].split("_")[1];
      return {
        ...pages,
        [`/coding/${postName}`]: {
          page: "/post",
          query: { id: `./coding/${post}` }
        }
      };
    }, {});

    // console.log("pages", pages);
    return {
      ...pages,
      "/": { page: "/" },
      "/coding": { page: "/coding", query: { posts: postNames } }
    };
  }
};
