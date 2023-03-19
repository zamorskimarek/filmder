module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Apply to TypeScript files only
      parser: '@typescript-eslint/parser', // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json', // Specify the path to your tsconfig.json file
      },
      plugins: ['@typescript-eslint', 'react'], // Use the TypeScript and React plugins
      extends: [
        'plugin:@typescript-eslint/recommended', // Enable recommended rules from the TypeScript plugin
        'plugin:react/recommended', // Enable recommended rules from the React plugin
      ],
      settings: {
        react: {
          version: 'detect', // Specify the React version (can be 'detect' or a specific version number)
        },
      },
    },
  ],
  plugins: ['react'],
  rules: {
    'react/display-name': 'off',
  },
};
