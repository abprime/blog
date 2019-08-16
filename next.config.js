var fs = require("fs");
var path = require("path");
var glob = require("glob");

module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  },
  exportPathMap: function() {
    const postCategories = fs.readdirSync(path.join(__dirname, "content"));
    // reduce all folders in content folder
    const allPosts = postCategories.reduce((allPostPages, postCategory) => {
      const posts = glob.sync(`content/${postCategory}/*.md`).map(md => {
        let [root, postCategory, postFileName] = md.split("/");
        postName = postFileName.split(".")[0].split("_")[1];
        console.log("***** post", postFileName, postName);
        return { postName, postFileName };
      });

      //add entry for parent posts page
      allPostPages = {
        ...allPostPages,
        [`/${postCategory}`]: {
          page: "/posts",
          query: {
            postCategory
          }
        }
      };
      // reduce all posts to pages
      return posts.reduce((pages, { postName, postFileName }) => {
        return {
          ...pages,
          [`/${postCategory}/${postName}`]: {
            page: "/post",
            query: { category: postCategory, name: postFileName }
          }
        };
      }, allPostPages);
    }, {});

    console.log(allPosts);
    return {
      ...allPosts,
      "/": { page: "/" }
    };
  }
};
