module.exports = {
  questions: [
    {
      name: 'name',
      type: 'input',
      message: 'Enter the project name',
      default: 'project'
    },
    {
      name: '$EXTEND:typescript$',
      type: 'confirm',
      message: 'Do you want to use TypeScript?',
      default: false
    },
    {
      name: '$EXTEND$',
      type: 'list',
      message: 'Select a CSS preprocessor',
      choices: [
        {
          name: 'I do not want to use any preprocessor',
          value: 'null'
        },
        {
          name: 'Sass/Scss',
          value: 'sass'
        },
        {
          name: 'Less',
          value: 'less'
        },
        {
          name: 'Stylus',
          value: 'stylus'
        }
      ],
      default: 'null'
    },
    {
      name: '$EXTEND$',
      type: 'list',
      message: 'Select a global state manager',
      choices: [
        {
          name: 'I do not want to use any state manager',
          value: 'null'
        },
        {
          name: 'Redux & React Redux',
          value: 'redux'
        },
        {
          name: 'Dva.js',
          value: 'dva'
        }
      ],
      default: 'null'
    }
  ],
  cleanups: [
    async function({ deleteFiles }) {
      deleteFiles(['tsconfig.json'])
    },
  ],
  extendTemplates: {
    typescript: {
      files: {
        delete: [
          'src/**/*.js'
        ],
        merge: [
          'config/webpack.config.js',
          '.babelrc',
          'package.json',
          '.eslintrc.js',
          '.gitignore'
        ]
      }
    },
    sass: {
      files: {
        delete: [
          'src/**/*.{css,styl,less}'
        ],
        merge: [
          'src/App.{js,tsx}',
          'config/webpack.config.js',
          'package.json'
        ]
      }
    },
    less: {
      files: {
        delete: [
          'src/**/*.{css,sass,scss,styl}'
        ],
        merge: [
          'src/App.{js,tsx}',
          'config/webpack.config.js',
          'package.json'
        ]
      }
    },
    stylus: {
      files: {
        delete: [
          'src/App.{css,less,sass,scss}'
        ],
        merge: [
          'src/App.{js,tsx}',
          'config/webpack.config.js',
          'package.json'
        ]
      }
    },
    redux: {
      cleanups: [
        async function({ addFile }) {
          addFile('src/test.txt', 'test cleanups')
        },
      ],
      files: {
        add: [
          'src/store/**/*.{js,ts}',
        ],
        merge: [
          'src/App.{js,tsx}',
          'src/index.{js,tsx}',
          'package.json'
        ]
      }
    },
    dva: {
      files: {
        merge: [
          'src/App.{js,tsx}',
          'src/index.{js,tsx}',
          'package.json'
        ]
      }
    }
  }
};
