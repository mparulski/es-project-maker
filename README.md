# es-project-maker

## Usage 
We don't really plan on documenting or testing it well because it's specific to our needs.

## How to run 
```
npx @mparulski/es-project-maker --config=<path_to_project_config.js>
```
eg.
```
npx @mparulski/es-project-maker --config=config/application.config.dev.json
```

### args
| arg | desc |
|-----|------|
| --config  | path to project global configuration (it's must be js module)|
| --noDeps  | do not install dependencies |
| --verbose | would really be useful to enable end users to diagnose their own issues |

### project config

```
module.export = {
  "babel": {
    "enabled": true, 
    "presets": [ 
      ... // it will be concatenated to the base presets
    ],
    "plugins": [
      ... // it will be concatenated to the base plugins
    ],
  },
  prettier: {
    "enabled": true, 
    "options": {...} // any prettier option will override default value
    /* if set to `true` then:
     * - install dependencies and add dependencies to package.json/package-lock.json
     *
     * How to configure in IntelliJ: https://www.jetbrains.com/help/idea/prettier.html#ws_prettier_install
     */
  },
  react: {
    "enabled": true, 
    /* if set to `true` then:  
     * - install dependencies and add dependencies to package.json/package-lock.json
     * - enables New JSX Transform in babel configuration
     * - enables JSX options in prettier configuration
    */
  },
  "webpack": {
    "enabled": true,
    "config": {}
  }
}
```

## Inspired 
This is inspired by `react-scripts` and `kcd-scripts`