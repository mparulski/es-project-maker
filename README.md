# es-project-maker

## Usage 
We don't really plan on documenting or testing it well because it's specific to our needs.

## How to run 
```
npx @mparulski/es-project-maker --config=<path_to_project_config>
```
eg.
```
npx @mparulski/es-project-maker --config=config/application.config.dev.json
```

### args
| arg | desc |
|-----|------|
| --config  | path to project global configuration |
| --verbose | would really be useful to enable end users to diagnose their own issues |

### project config

```
{
  "babel": {
    // babel is always on and generates configuration
    "presets": [ 
      ... // it will be concatenated to the base presets
    ],
    "plugins": [
      ... // it will be concatenated to the base plugins
    ],
  },
  react: {
    "enable": true, 
    /* if set to `true` then:  
     * - install dependencies and add dependencies to package.json/package-lock.json
     * - enables New JSX Transform in babel configuration
    */
  },
  "webpack": {
    "enable": true,
    "config": {}
  }
}
```

## Inspired 
This is inspired by `react-scripts` and `kcd-scripts`