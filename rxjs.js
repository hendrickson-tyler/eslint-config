module.exports = {
  "extends": [
    "plugin:rxjs/recommended"
  ],
  "rules": {
    "rxjs/finnish": [
      "error",
      {
        "functions": false,
        "methods": false,
        "parameters": false,
      }
    ],
    "rxjs/no-compat": "error",
    "rxjs/no-subject-value": "warn"
  }
};
