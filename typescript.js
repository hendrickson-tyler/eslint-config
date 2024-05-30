module.exports = {
  extends: ["./javascript", "plugin:@typescript-eslint/recommended"],
  rules: {
    "no-shadow": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-property-type": "off",
    "jsdoc/require-returns-type": "off",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
    ],
  },
};
