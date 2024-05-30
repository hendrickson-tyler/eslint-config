# Lint Rules

[![CodeQL](https://github.com/hendrickson-tyler/eslint-config/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/hendrickson-tyler/eslint-config/actions/workflows/codeql-analysis.yml)

## Description

This package contains a set of ESLint configs for a variety of languages, libraries, and frameworks. This is meant to ensure each of my personal projects has the same set of rules to keep them consistent. You are welcome to use these for your own projects.

## Configs

Config files exist for the following use cases and are summarized below. You can mix and match these as needed and several configs inherit other configs automatically.

- `javascript` - Recommended rules for projects using JavaScript.
- `typescript` - Recommended rules for projects using TypeScript.
  - Includes and modifies the rules from `javascript` as TypeScript is a superset of JavaScript.
- `angular` - Recommended rules for projects using Angular.
  - Includes and modifies the rules from `typescript` and `rxjs` as Angular uses TypeScript and RxJS by default.
- `angular-html` - Recommended template (HTML) rules for projects using Angular.
  - Used in conjunction with `@angular-eslint/template-parser`.
- `rxjs` - Recommended rules for projects using the RxJS library.
- `nativescript` - Recommended rules for vanilla NativeScript projects.
- `nativescript-angular` - Recommended rules for NativeScript projects using Angular.
  - Includes the rules from `nativescript`.

## Installation

From the root folder of your project, install the package with the following command:

```javascript
npm i @hendrickson-tyler/eslint-config --save-dev
```

## Angular Support

| Package Version | Angular Version Support |
| --------------- | ----------------------- |
| 1.x.x           | 13                      |
| 2.x.x           | 14                      |
| 3.x.x           | 15                      |
| 4.x.x           | 16                      |

For Angular 17 and above, the version number will match the Angular version number.

## Usage

Once the package is installed, add the desired configs to the `"extends"` section of the `eslintrc.json` in the root of your project:

```javascript
{
    "root": true,
    "ignorePatterns": [
        "projects/**/*"
    ],
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parserOptions": {
                "project": [
                    "tsconfig.json"
                ],
                "createDefaultProgram": true
            },
            "extends": [
                "@hendrickson-tyler/eslint-config/angular"
            ],
            ...
        }
        ...
    ]
}
```

Afterwards, you will be able to run your desired lint command to use the newly-imported lint rules.

> **NOTE: Keeping this package up to date is highly recommended. Be sure that the version number in your `package.json` contains a `^` before the version number to update to the newest minor version when using `npm update`.**

**Example:**

```javascript
"devDependencies": {
    ...
    "@hendrickson-tyler/eslint-config": "^18.0.0",
    ...
}
```
