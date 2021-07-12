# es-project-maker

## Usage 
We don't really plan on documenting or testing it well because it's specific to our needs.

## How to run 
```
npx @mparulski/es-project-maker
```
eg.
```
npx @mparulski/es-project-maker --babelConfig=<secial_babel_options_config.js> --typescript=false --verbose
```

Run `@mparulski/es-project-maker` with passed babel options in config, disable typescript and run verbose mode

### args
| arg                | required | default | desc |
|--------------------|----------|---------| -----|
| --noBabel          | No       | false | if it is set then do not generate the configuration file and do not install dependencies |
| --babelConfig      | No       |       | path to project config options (described below) |
| --noEslint         | No       | false | if it is set then do not generate the configuration file and do not install dependencies |
| --eslintConfig     | No       |       | path to project config options (described below) |
| --noPrettier       | No       | false | if it is set then do not generate the configuration file and do not install dependencies |
| --prettierConfig   | No       |       | path to project config options (described below) |
| --noReact          | No       | false | if it is set then do not generate the configuration file and do not install dependencies |
| --noTypescript     | No       | false | if it is set then do not generate the configuration file and do not install dependencies |
| --typescriptConfig | No       |       | path to project config options (described below) |
| --noWebpack        | No       | false | if it is set then do not generate the configuration file and do not install dependencies |
| --webpackDevConfig | No       |       | path to webpack dev config |
| --webpackProdConfig| No       |       | path to webpack prod config |
| --noDeps           | No       | false | do not install dependencies |
| --noTasks          | No       | false | do not tasks to package.json |
| --verbose          | No       | false | would really be useful to enable end users to diagnose their own issues |

### project configs

- For args: 
  - --babelConfig
  - --eslintConfig
  - --prettierConfig
  - --typescriptConfig

config's file is a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config:

```js
    /*
     * Values passed in the body of callback configuration will extend, delete or overwrite default values
     * 
     * babelConfig
     *
     * Configuration body eg.
     * "presets": [], it will be concatenated to the base presets
     * "plugins": [], it will be concatenated to the base plugins
     * 
     * eslintConfig (How to configure in IntelliJ: https://www.jetbrains.com/help/idea/eslint.html)
     * 
     * prettierConfig (How to configure in IntelliJ: https://www.jetbrains.com/help/idea/prettier.html#ws_prettier_install)
     * if that key exists, then:  
     * - install dependencies and add dependencies to package.json/package-lock.json
     * - enables New JSX Transform in babel configuration
     * - enables ReactJS/JSX options in prettier configuration
     *
     * typescriptConfig
     */

module.exports = (config) => { return config }
```

- For arg:

  - --webpackConfig

- If react is enabled:
    - install dependencies and add dependencies to package.json/package-lock.json
    - enable rules for eslint
    - enable New JSX Transform in babel configuration
    - enable ReactJS/JSX options in prettier configuration


### webpack configuration example

```
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = options => {
    "entry": {index: path.resolve(__dirname, "../src/js/appInit.js")},
    "output": {
        "path": path.resolve(__dirname, "../src/js-dist"),
        "filename": "app.bundle.js"
    },
    "module": {
        "rules": [            
            {
                "test": /\.(png|svg|jpg|jpeg|gif|woff|eot|ttf)$/i,
                "type": 'asset/inline',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/templates/index.html")
        })
      ],
    "resolve": {
        "extensions": [".js", ".jsx"]
    }
}
```

### webpack local build
Run npm script "start"

### webpack production build
Run npm script "build" 

## Inspired 
This is inspired by `react-scripts` and `kcd-scripts`