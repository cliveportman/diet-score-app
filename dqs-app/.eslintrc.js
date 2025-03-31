// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["eslint-plugin-react-compiler", "prettier"],
  rules: {
    "react-compiler/react-compiler": "error",
    "prettier/prettier": "error",
  },
};
