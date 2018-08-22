# Building A Game in JavaScript

## Directions

For this project, you are going to build a simple game with JavaScript. First, make sure you've [watched this video of Mary Rose Cook building a game from scratch](https://vimeo.com/105955605). Check out [her annotated version of Space Invaders](http://annotated-code.maryrosecook.com/space-invaders/docs/space-invaders.html).

Then pick one of the following games:

* [Pixel War](http://www.lessmilk.com/game/pixel-war-1/)
* [Run](http://www.lessmilk.com/game/run/)
* [The Square](http://www.lessmilk.com/game/the-square/)

Your job is to implement this game in JavaScript. You can use external libraries, but nothing that would be considered a game framework. Your game must use JavaScript classes/prototypes and objects.

## Additional resources

* [Game project from _Eloquent JavaScript_](https://eloquentjavascript.net/3rd_edition/16_game.html)
* [Lessmilk Game Tutorials](http://www.lessmilk.com/)

## Getting started

1. Install with yarn:

```shell
yarn global add parcel-bundler
```

or with npm:

```shell
npm install -g parcel-bundler
```

2. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. If you link your main JavaScript file in the HTML using a relative path, Parcel will also process it for you, and replace the reference with a URL to the output file.

```html
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```

3. Parcel has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development. Just point it at your entry file:

```shell
parcel index.html
```

4. Now open http://localhost:1234/ in your browser. If needed, you can also override the default port with the `-p` option. Add `--open` to automatically open a browser.

See [parceljs.org](https://parceljs.org) for more documentation!

## Benchmarks

Based on a reasonably sized app, containing 1726 modules, 6.5M uncompressed. Built on a 2016 MacBook Pro with 4 physical CPUs.

| Bundler                 | Time      |
| ----------------------- | --------- |
| browserify              | 22.98s    |
| webpack                 | 20.71s    |
| **parcel**              | **9.98s** |
| **parcel - with cache** | **2.64s** |
