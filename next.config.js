const path = require("path");
const glob = require("glob");

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              outputStyle: "compressed",
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  },
  exportPathMap: function(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/landing": { page: "/landing" },
      "/generic": { page: "/generic" },
      "/allcourses": { page: "/allcourses" },
      "/company": { page: "/company" },
      "/contact": { page: "/contact" },
      "/courses": { page: "/courses" },
      "/index": { page: "/index" },
      "/like": { page: "/like" },
      "/partners": { page: "/partners" },
      "/team": { page: "/team" }
    };
  }
};
