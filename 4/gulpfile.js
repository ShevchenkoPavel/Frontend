var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var path = {
	images: 'src/images/*',
    css:  'src/styles/*.css',
	scripts: 'src/scripts/*.js',
	mock: 'src/mockapi/*.json',
    html: 'src/templates/*.html',
	partials: 'src/templates/partials/*.html',
	vendor: {
	  css: 'src/vendor/css/*.css',
	  scripts: 'src/vendor/scripts/*.js'
	},
    dist: {
	  images: 'dist/images/',
      css:  'dist/styles/',
	  scripts: 'dist/scripts/',
	  mock: 'dist/mockapi/',
	  vendor: { css: 'dist/vendor/css/',
	  			scripts: 'dist/vendor/scripts/',
	},
      html: 'dist/',
	  partials: 'dist/partials/' 
    }
};

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('css-min', function () {
  return gulp.src(path.css)
    .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(concat('style.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('html', function () {
  return gulp.src(path.html)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(path.dist.html));
});

gulp.task('partials', function () {
  return gulp.src(path.partials)
    .pipe(gulp.dest(path.dist.partials));
});

gulp.task('images', function () {
  return gulp.src(path.images)
    .pipe(gulp.dest(path.dist.images));
});

gulp.task('scripts', function () {
  return gulp.src(path.scripts)
	.pipe(concat('script.js'))
    .pipe(gulp.dest(path.dist.scripts));
	
});

gulp.task('mock', function () {
  return gulp.src(path.mock)
    .pipe(gulp.dest(path.dist.mock));
});

gulp.task('vendor-css', function () {
  return gulp.src(path.vendor.css)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(path.dist.vendor.css));
});


gulp.task('vendor-scripts', function () {
  return gulp.src(path.vendor.scripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(path.dist.vendor.scripts));
});


gulp.task('vendor-css-min', function () {
  return gulp.src(path.vendor.css)
    .pipe(concat('vendor.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.dist.vendor.css));
});

gulp.task('build', ['html', 'partials', 'css', 'vendor-css', 'vendor-scripts', 'images', 'scripts', 'mock']);
gulp.task('prod', ['html', 'partials', 'css-min', 'vendor-css-min', 'images', 'scripts', 'mock']);

gulp.task('watch', function () {
  gulp.watch(path.css, ['css']);
  gulp.watch(path.html, ['html']);
  gulp.watch(path.partials, ['partials']);
  gulp.watch(path.vendor.css, ['vendor-css']);
  gulp.watch(path.vendor.scripts, ['vendor-scripts']);
  gulp.watch(path.img, ['images']);
  gulp.watch(path.scripts, ['scripts']);
  gulp.watch(path.scripts, ['mock']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: path.dist.html
    }
  });
  gulp.watch('dist/**').on('change', browserSync.reload);
});
