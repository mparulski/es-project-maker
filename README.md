# es-project-maker

## Usage 
We don't really plan on documenting or testing it well because it's specific to our needs.

## How to run 
```
npx @mparulski/es-project-maker --config=<path_to_project_config.js>
```
eg.
```
npx @mparulski/es-project-maker --config=config/application.config.dev.js
```

### args
| arg | required | desc |
|-----|----------|------|
| --config  | Yes | path to project global configuration (it's must be js module)|
| --noDeps  | No  | do not install dependencies |
| --verbose | No  | would really be useful to enable end users to diagnose their own issues |

### project config

```js
module.exports = {
    /*
     * The module is always enabled
     *
     * Values are passed in the body of that module and they extend or overwriting default values
     * By the default install dependencies and add to package.json/package-lock.json
     * 
     * Configuration body eg.
     * "presets": [], it will be concatenated to the base presets
     * "plugins": [], it will be concatenated to the base plugins
     */
  "babel": (config) => { return config}, // It's a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config.
    /*
     * The module is always enabled
     *
     * Values are passed in the body of that module and they extend or overwriting default values
     * By the default install dependencies and add to package.json/package-lock.json
     * 
     * How to configure in IntelliJ: https://www.jetbrains.com/help/idea/eslint.html
     */
  "eslint": (config) => { return config}, // It's a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config.
    /*
     * The module is always enabled
     *
     * Values are passed in the body of that module and they extend or overwriting default values
     * By the default install dependencies and add to package.json/package-lock.json
     * 
     * How to configure in IntelliJ: https://www.jetbrains.com/help/idea/prettier.html#ws_prettier_install
     */
  "prettier": (config) => { return config}, // It's a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config.
    /*
     * The module is enabled when is passed in projct-config like 
     *      module.exports = {
     *          react: {}
     *      }
     *
     * if that key exists, then:  
     * - install dependencies and add dependencies to package.json/package-lock.json
     * - enables New JSX Transform in babel configuration
     * - enables ReactJS/JSX options in prettier configuration
     */
  "react": (config) => { return config}, // It's a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config.
    /*
     * The module is always enabled
     *
     * Values are passed in the body of that module and they extend or overwriting default values
     * By the default install dependencies and add to package.json/package-lock.json
     */
  "typescript": (config) => { return config}, // It's a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config.
    /*
     * The module is always enabled
     *
     * Values are passed in the body of that module and they extend or overwriting default values
     * By the default install dependencies and add to package.json/package-lock.json
     */
  "webpack": (config) => { return config}, // It's a function that arg (named 'config') is config calculated by es-project-maker with std settings. It must return config.
}
```

## Inspired 
This is inspired by `react-scripts` and `kcd-scripts`