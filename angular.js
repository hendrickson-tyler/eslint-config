module.exports = {
  "extends": [
    "./typescript.js",
    "./rxjs.js",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates"
  ],
  "plugins": [
    "rxjs-angular"
  ],
  "rules": {
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": "app",
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "app",
        "style": "camelCase"
      }
    ],
    "rxjs-angular/prefer-takeuntil": [
      "error",
      {
        "alias": [
          "first"
        ]
      }
    ]
  }
};
