    {
        "env": {
            "browser": true,
            "es2021": true
          },
          "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
          "parserOptions": {
            "ecmaVersion": 12,
            "sourceType": "module",
            "ecmaFeatures": {
              "jsx": true
            }
          },
        "plugins": [
            '@stylistic'
        ],
        "rules": {
            '@stylistic/semi': [
                "error"
            ],
            "@stylistic/array-bracket-spacing": [
                "error", 
                "always", 
                { 
                    "singleValue": false,
                    "objectsInArrays": false,
                    "arraysInArrays": false
                }
            ],
            "@stylistic/arrow-parens": [
                "error", 
                "always"
            ],
            "@stylistic/brace-style": [
                "error", 
                "1tbs", 
                { 
                    "allowSingleLine": true 
                }
            ],
            "@stylistic/comma-spacing": [
                "error", 
                { 
                    "before": false, 
                    "after": true 
                }
            ],
            "@stylistic/indent": [
                "error"
            ],
            "@stylistic/jsx/jsx-closing-bracket-location": [
                1, 
                'tag-aligned'
            ],
            "@stylistic/jsx-closing-tag-location": [
                "error"
            ],
            "@stylistic/jsx-curly-spacing": [
                {"when": "always"}
            ],
            "@stylistic/jsx/jsx-indent": [
                1
            ],
            "@stylistic/jsx-first-prop-new-line": [
                {"when": "always"}
            ],
            "@stylistic/jsx-quotes": [
                "error", 
                "prefer-double"
            ],
            "@stylistic/space-in-parens": [
                "error", 
                "always"
            ],
            "constructor-super": [
                "error"
            ],
            "for-direction": [
                "error"
            ],
            "getter-return": [
                "error"
            ],
            "no-async-promise-executor": [
                "error"
            ],
            "no-case-declarations": [
                "error"
            ],
            "no-class-assign": [
                "error"
            ],
            "no-compare-neg-zero": [
                "error"
            ],
            "no-cond-assign": [
                "error"
            ],
            "no-const-assign": [
                "error"
            ],
            "no-constant-binary-expression": [
                "error"
            ],
            "no-constant-condition": [
                "error"
            ],
            "no-control-regex": [
                "error"
            ],
            "no-debugger": [
                "error"
            ],
            "no-delete-var": [
                "error"
            ],
            "no-dupe-args": [
                "error"
            ],
            "no-dupe-class-members": [
                "error"
            ],
            "no-dupe-else-if": [
                "error"
            ],
            "no-dupe-keys": [
                "error"
            ],
            "no-duplicate-case": [
                "error"
            ],
            "no-empty": [
                "error"
            ],
            "no-empty-character-class": [
                "error"
            ],
            "no-empty-pattern": [
                "error"
            ],
            "no-empty-static-block": [
                "error"
            ],
            "no-ex-assign": [
                "error"
            ],
            "no-extra-boolean-cast": [
                "error"
            ],
            "no-fallthrough": [
                "error"
            ],
            "no-func-assign": [
                "error"
            ],
            "no-global-assign": [
                "error"
            ],
            "no-import-assign": [
                "error"
            ],
            "no-invalid-regexp": [
                "error"
            ],
            "no-irregular-whitespace": [
                "error"
            ],
            "no-loss-of-precision": [
                "error"
            ],
            "no-misleading-character-class": [
                "error"
            ],
            "no-new-native-nonconstructor": [
                "error"
            ],
            "no-nonoctal-decimal-escape": [
                "error"
            ],
            "no-obj-calls": [
                "error"
            ],
            "no-octal": [
                "error"
            ],
            "no-prototype-builtins": [
                "error"
            ],
            "no-redeclare": [
                "error"
            ],
            "no-regex-spaces": [
                "error"
            ],
            "no-self-assign": [
                "error"
            ],
            "no-setter-return": [
                "error"
            ],
            "no-shadow-restricted-names": [
                "error"
            ],
            "no-sparse-arrays": [
                "error"
            ],
            "no-this-before-super": [
                "error"
            ],
            "no-undef": [
                "error"
            ],
            "no-unexpected-multiline": [
                "error"
            ],
            "no-unreachable": [
                "error"
            ],
            "no-unsafe-finally": [
                "error"
            ],
            "no-unsafe-negation": [
                "error"
            ],
            "no-unsafe-optional-chaining": [
                "error"
            ],
            "no-unused-labels": [
                "error"
            ],
            "no-unused-private-class-members": [
                "error"
            ],
            "no-unused-vars": [
                "warn"
            ],
            "no-useless-backreference": [
                "error"
            ],
            "no-useless-catch": [
                "error"
            ],
            "no-useless-escape": [
                "error"
            ],
            "no-with": [
                "error"
            ],
            "require-yield": [
                "error"
            ],
            "use-isnan": [
                "error"
            ],
            "valid-typeof": [
                "error"
            ],
            "curly": [
                "error"
            ],
            "camelcase": [
                "warn"
            ],
            "default-param-last": [
                "error"
            ],
            "block-scoped-var": [
                "error"
            ],
            "func-names": [
                "warn"
            ],
            "semi-spacing": [
                "error"
            ]
        }
    }
