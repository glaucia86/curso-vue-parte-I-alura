module.exports = {
    "extends": "airbnb-base",
    "plugins": [
      "import"
    ],
    "rules": {
      "no-console": "off",
      "import/newline-after-import": "off",
      "no-unused-vars": 0,
      "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
      "max-len": 0
    }
};