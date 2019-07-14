module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  rules: {
    "declaration-no-important": true,
    "value-no-vendor-prefix": true,
    "max-nesting-depth": 2
  }
};
