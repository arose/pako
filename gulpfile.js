var gulp = require('gulp');
var rollup = require('rollup').rollup;

gulp.task('build', function () {
  return rollup({
    entry: 'lib/inflate.js'
  }).then(function (bundle) {
    return bundle.write({
      format: 'es6',
      dest: 'dist/pako_inflate.es6.js',
    });
  });
});
