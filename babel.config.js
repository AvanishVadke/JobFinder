// First, locate your package.json file
// Create a new file called babel.config.js in the same directory
// Copy this code into babel.config.js:

module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        ["module:react-native-dotenv", {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
        }]
      ]
    };
  };