module.exports = {
  questions: [
    {
      name: 'name',
      type: 'input',
      message: 'Enter the project name',
      default: 'project',
    },
    {
      name: '$EXTEND:typescript$',
      type: 'confirm',
      message: 'Do you want to use TypeScript?',
      default: false,
    },
    {
      name: '$EXTEND:react-router$',
      type: 'confirm',
      message: 'Do you want to use React Router?',
      default: false,
    },
    {
      name: '$EXTEND$',
      type: 'list',
      message: 'Select a CSS preprocessor',
      choices: [
        {
          name: 'I do not want to use any preprocessor',
          value: 'null',
        },
        {
          name: 'Sass/Scss',
          value: 'sass',
        },
        {
          name: 'Less',
          value: 'less',
        },
        {
          name: 'Stylus',
          value: 'stylus',
        },
      ],
      default: 'null',
    },
    {
      name: '$EXTEND$',
      type: 'list',
      message: 'Select a global state manager',
      choices: [
        {
          name: 'I do not want to use any state manager',
          value: 'null',
        },
        {
          name: 'Redux & React Redux',
          value: 'redux',
        },
        {
          name: 'Dva.js',
          value: 'dva',
        },
      ],
      default: 'null',
    },
  ],
  extendTemplates: {
    typescript: {
      files: {
        delete: [
          'src/**/*.js',
        ],
        merge: [
          'config/webpack.config.js',
          '.babelrc',
          'package.json',
          '.eslintrc.js',
          '.gitignore',
        ],
      },
    },
    sass: {
      files: {
        delete: [
          'src/**/*.{css,styl,less}',
        ],
        merge: [
          'src/App.{js,tsx}',
          'config/webpack.config.js',
          'package.json',
        ],
      },
    },
    less: {
      files: {
        delete: [
          'src/**/*.{css,sass,scss,styl}',
        ],
        merge: [
          'src/App.{js,tsx}',
          'config/webpack.config.js',
          'package.json',
        ],
      },
    },
    stylus: {
      files: {
        delete: [
          'src/App.{css,less,sass,scss}',
        ],
        merge: [
          'src/App.{js,tsx}',
          'config/webpack.config.js',
          'package.json',
        ],
      },
    },
    redux: {
      files: {
        add: [
          'src/store/**/*.{js,ts}',
        ],
        merge: [
          'src/App.{js,tsx}',
          'src/index.{js,tsx}',
          'package.json',
        ],
      },
    },
    dva: {
      files: {
        merge: [
          'src/App.{js,tsx}',
          'src/index.{js,tsx}',
          'package.json',
        ],
      },
    },
    'react-router': {
      files: {
        merge: [
          'src/App.{js,tsx}',
          'src/pages/**/*.{js,tsx}',
          'package.json',
        ],
      },
    },
  },
  modules: {
    component: {
      questions: [
        {
          name: 'name',
          type: 'input',
          message: 'Enter the component name',
          default: 'component',
        },
      ],
      files: {
        delete: [
          async ({ exists }) => {
            if (exists('tsconfig.json')) {
              return ['src/components/**/*.js'];
            } else {
              return ['src/components/**/*.tsx'];
            }
          },
        ],
      },
    },
    page: {
      validate: async ({
        exists,
        getFileContent,
      }) => {
        if (!exists('src/App.js') && !exists('src/App.tsx')) {
          return false;
        }

        let content;

        if (exists('src/App.js') && !content) {
          content = getFileContent('src/App.js');
        }

        if (exists('src/App.tsx') && !content) {
          content = getFileContent('src/App.tsx');
        }

        if (!content) {
          return false;
        }

        if (typeof content !== 'string') {
          content = content.toString();
        }

        if (content.indexOf('<Router') === -1 && content.indexOf('\'react-router-dom\'') === -1) {
          return false;
        }

        return true;
      },
      questions: [
        {
          name: 'name',
          type: 'input',
          message: 'Enter the page name',
          default: 'page',
        },
      ],
      files: {
        merge: [
          'src/App.{tsx,js}',
        ],
        delete: [
          async ({ exists }) => {
            if (exists('tsconfig.json')) {
              return ['src/App.js', 'src/pages/**/*.js'];
            } else {
              return ['src/App.tsx', 'src/pages/**/*.tsx'];
            }
          },
        ],
      },
    },
  },
};
