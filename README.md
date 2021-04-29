# es-project-maker

## Usage 
We don't really plan on documenting or testing it well because it's specific to our needs.

## How to run 
```
npx @mparulski/es-project-maker --config=config/application.config.dev.json
```

```json
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
  "webpack": {
    "enable": true,
    "config": {}
  }
}
```

## Inspired 
This is inspired by `react-scripts` and `kcd-scripts`