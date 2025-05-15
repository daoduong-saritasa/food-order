import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig } from "eslint/config";
import { createRequire } from "module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const expoConfig = require("eslint-config-expo/flat");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  expoConfig,
  {
    plugins: {
      jsdoc,
      "jsx-a11y": eslintPluginJsxA11y,
    },
    extends: [compat.extends("plugin:@tanstack/query/recommended")],
    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "no-void": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/member-ordering": "off",
      "@typescript-eslint/naming-convention": "off",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],

      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "max-classes-per-file": "off",
      "jsx-quotes": ["error", "prefer-double"],

      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],

      "react/prop-types": "off",

      "react/forbid-foreign-prop-types": [
        "error",
        {
          allowInPropTypes: true,
        },
      ],

      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/no-danger-with-children": "error",
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/no-direct-mutation-state": "error",
      "react/no-is-mounted": "error",
      "react/no-typos": "error",
      "react/require-render-return": "error",

      "react/jsx-max-props-per-line": [
        "error",
        {
          maximum: {
            single: 4,
            multi: 1,
          },
        },
      ],

      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-closing-tag-location": "error",

      "react/jsx-one-expression-per-line": [
        "error",
        {
          allow: "literal",
        },
      ],

      "react/jsx-indent": ["error", 2],

      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "max-lines-per-function": "off",

      "max-len": [
        "error",
        {
          code: 120,
          ignoreComments: true,
          ignoreStrings: true,
        },
      ],

      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: ["state"],
        },
      ],

      "arrow-parens": ["error", "as-needed"],

      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "jsdoc/require-param": [
        "error",
        {
          checkDestructuredRoots: false,
        },
      ],

      "spaced-comment": [
        "error",
        "always",
        {
          markers: ["/"],
        },
      ],

      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",

      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          aspects: ["noHref", "invalidHref"],
        },
      ],

      "jsx-a11y/aria-activedescendant-has-tabindex": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",

      "jsx-a11y/aria-role": [
        "error",
        {
          ignoreNonDOM: true,
        },
      ],

      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react/function-component-definition": "off",
      "jsdoc/require-jsdoc": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "page.tsx files must export a default function.",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "TSInterfaceDeclaration[id.name=/Props$/] TSPropertySignature[readonly=undefined]",
          message: "Missing readonly modifier.",
        },
        {
          selector:
            "TSInterfaceDeclaration[id.name=/Props$/] TSPropertySignature TSTypeAnnotation[typeAnnotation.type=TSArrayType]",
          message: "Missing readonly type modifier for array.",
        },
        {
          selector:
            "TSTypeReference[typeName.name='FC'] > TSTypeReference[typeName.name!=/PropsWithChildren$|Props$/]",
          message:
            "Prefer name with `Props` ending for the component's props interface.",
        },
        {
          selector: "MemberExpression[object.name='React']",
          message: "Prefer using named import from 'React'.",
        },
        {
          selector: "TSQualifiedName[left.name='React']",
          message: "Prefer using named import from 'React'.",
        },
      ],
    },
  },
  {
    files: ["src/api/dtos/*.ts"],
    plugins: {
      'dto-readonly': require('./src/utils/eslint/eslint-plugin-dto-readonly'),
    },
    rules: {
      'dto-readonly/require-readonly-in-dto-type-alias': 'error',
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSInterfaceDeclaration[id.name=/Dto$/] TSPropertySignature[readonly=undefined]",
          message: "Missing readonly modifier for the DTO property.",
        },
        {
          selector: "TSTypeAliasDeclaration[id.name=/Dto$/] TypeLiteral > TSPropertySignature[readonly=undefined]",
          message: "Missing readonly modifier for the DTO property.",
        },
        {
          selector: "TSPropertySignature TSTypeAnnotation[typeAnnotation.type=TSArrayType]",
          message: "Missing readonly type modifier for array.",
        },
      ],
    },
  },
]);
