const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // Entry point for your application
  entry: "./src/index.js",

  // Output settings
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the dist folder before each build
  },

  // Mode: change to 'production' when you're ready to build for production
  mode: "development",

  // Module rules for handling different file types
  module: {
    rules: [
      // CSS loader to handle CSS imports
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // File loader to handle images, fonts, etc.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  // Plugins
  plugins: [
    // This plugin generates an HTML file from a template and injects the bundle
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    }),
  ],

  // Development server configuration
  devServer: {
    static: "./dist",
    port: 8080,
    open: true, // Automatically opens the browser
  },

  // Resolve extensions so you can import files without specifying their extension
  resolve: {
    extensions: [".js", ".css"],
  },

  // Source map for easier debugging in development
  devtool: "inline-source-map",
};
