var gulp = require('gulp');
var slim = require("gulp-slim");

gulp.task('default', ['slim', 'move_images', 'move_js', 'move_css', 'move_demo', 'move_other_files', 'watch']);
gulp.task('build', ['slim', 'move_images', 'move_js', 'move_css', 'move_demo','move_other_files']);
 
gulp.task('slim', function(){
  gulp.src("./source/**/[^_]*.slim")
    .pipe(slim({ chdir: true, pretty: true, include: true }))
    .pipe(gulp.dest("./dist/"));
});

gulp.task('move_images', function(){
  gulp.src("./source/img/**/*")
    .pipe(gulp.dest("./dist/img/"));
});

gulp.task('move_js', function(){
  gulp.src("./source/js/**/*")
    .pipe(gulp.dest("./dist/js/"));
});

gulp.task('move_css', function(){
  gulp.src("./source/css/**/*")
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task('move_demo', function(){
  gulp.src("./source/demo/**/*")
    .pipe(gulp.dest("./dist/demo/"));
});

gulp.task('watch', function () {
  gulp.watch('./source/img/**/*', ['move_images']);
  gulp.watch('./source/js/**/*', ['move_js']);
  gulp.watch('./source/css/**/*', ['move_css']);
  gulp.watch('./source/demo/**/*', ['move_demo']);
  gulp.watch('./source/*.html', ['move_other_files']);
  gulp.watch('./source/[^_]*.slim', ['slim']);  
});

gulp.task('move_other_files', function(){
  gulp.src(["./source/*.html", "./source/*.png", , "./source/*.ico"])
    .pipe(gulp.dest("./dist/"));
});