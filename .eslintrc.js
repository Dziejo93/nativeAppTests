module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', "@callstack","plugin:@typescript-eslint/recommended","prettier",],
  rules: {
    "comma-dangle": "off",
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx",".json", ".native.js"]
      }
    }
  }
}