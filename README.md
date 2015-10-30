# &lt;playlist-element&gt;

> Web Component that creates a nice mp3 playlist based on a JSON file using [Polymer](http://www.polymer-project.org/).

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install playlist-element --save
```

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/playlist-element/elements/playlist-element.html">
    ```

3. Start using it!

    ```html
    <playlist-element src="path/to/json-file"></playlist-element>
    ```

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE11+ ✔ | Latest ✔ | Latest ✔ | Unknow ✘ | Safari 8+ ✔ |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/qix1986/playlist-element/releases).

## License

[MIT License](http://qix1986.mit-license.org/) © Diego Rocha
