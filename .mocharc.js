module.exports = {
  "diff": true,
  "extension": ["js"],
  "package": "./package.json",
  "slow": "75",
  "timeout": "0",
  "spec": ["test/**/*.spec.js"],
  "ui": "bdd",
  "watch-files": ["test/**/*.js"],
  "require": ["dotenv/config", "@babel/register"]
}