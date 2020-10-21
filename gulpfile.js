// const gulp = require('gulp');
// const babel = require('gulp-babel');
 
// gulp.task('default', () =>
//     gulp.src('routes/* .js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('dist'))
// );

// const gulp = require('gulp');
// const rollup = require('gulp-better-rollup');
// const babel = require('rollup-plugin-babel');
// const resolve = require('rollup-plugin-node-resolve');
// const commonjs = require('rollup-plugin-commonjs');
// const { src, dest } = require("gulp");
// const rollupJson= require('@rollup/plugin-json')

// gulp.task('scripts', () => {
//   return gulp.src('./app.js')
//     .pipe(rollup({ plugins: [babel(), resolve(), commonjs(), rollupJson()] }, 'umd'))
//     .pipe(gulp.dest('dist/'));
// });

const { src, dest } = require("gulp");

function copy(cb) {
    src(['*/*.js', '!node_modules/'])
        .pipe(dest('copies2'));
    cb();
}

exports.copy = copy;