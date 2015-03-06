
----

# Webpack
## Module bundler
[http://webpack.github.io/](http://webpack.github.io/)


----

## Alternative to require.js, Browserify, etc

----

## Supports CommonJS, AMD (require.js), ES6 modules, and others

----

## Extensible loader mechanism also supports

- JSON
- CSS/LESS/SASS
- Images
- HTML, Jade
- Etc.

----

## Designed to concat to single file

Also supports splitting application into async parts

Inspects entry point and finds all dependencies automatically

----

## Development

Grunt/Gulp/etc Integration
(Largely replaces most build and minification steps though)

webpack-dev-middleware

----

## Some Pluses

- Module format agnostic
- Very simple to setup, use, watch, and and minify
- Very extensible

----

## Some Drawbacks

- Need to be careful with automatic dependency finding
- Doesn't work well with heavy use of dynamic requires
- (Ex: Durandal view conventions, plugin config, etc.)

----


<style>
* {
  font-family: Lato;
  font-weight: 200;
  text-align: center;
}
h1, h2, h3, h4, h5, h6 {
  color: darkgrey;
}
hr {
    margin: 12em 0;
}
li {
    list-style: none;
}

</style>