var gulp        = require('gulp');
var concat      = require('gulp-concat');
var del         = require('del');
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-csso');
var gulpif      = require('gulp-if');

var src  =  './**'
var dest =  '../'
var fileBuild = 'styles.css'
var enviroment = 'development' // development or production

/** Função limpa o arquivo destino */
function clean() {
  return del([ dest+fileBuild ], {force: true});
}

/** Função que converte todos os arquivos .scss e .sass para um unico arquivo css */
function compileSass() {
  return gulp.src(
    [
      'base/*.{sass,scss}', 
      '!base/variables.scss',
      'layout/*.{sass,scss}', 
      'module/*.{sass,scss}', 
      'state/*.{sass,scss}', 
      'hack/*.{sass,scss}'
    ]
  )
  .pipe(sass().on('error', sass.logError))
  .pipe(concat(fileBuild))
  .pipe(gulpif( enviroment == 'production' , minifyCSS()))
  .pipe(gulp.dest(dest))
}

function watch() {
  //escuta os arquivos .sass e .scss
  gulp.watch(src+'/*.{sass,scss}', compileSass);
}

/** Função de build */
var build = gulp.series(clean, compileSass)

exports.clean = clean;
exports.compileSass = compileSass;
exports.watch = watch;
exports.build = build;

exports.default = build;
