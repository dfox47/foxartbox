
// npm install -g gulp-cli
// npm install gulp gulp-csso gulp-concat vinyl-ftp gulp-util gulp-rename gulp-sass gulp-uglify --save-dev

'use strict';

let fs              = require('fs')
// let cssMinify       = require('gulp-csso')
// let concat          = require('gulp-concat')
let config          = JSON.parse(fs.readFileSync('../config.json'))
let ftp             = require('vinyl-ftp')
let gulp            = require('gulp')
let gutil           = require('gulp-util')
// let rename          = require('gulp-rename')
// let sass            = require('gulp-sass')
// let uglify          = require('gulp-uglify')

// FTP config
let host            = config.host
let password        = config.password
let port            = config.port
let user            = config.user

let remoteFolder    = '/x.foxartbox.com/public_html/'
let localFolder     = 'dist/'

function getFtpConnection() {
	return ftp.create({
		host:           host,
		log:            gutil.log,
		password:       password,
		parallel:       3,
		port:           port,
		timeout:        99999999,
		user:           user
	});
}

let conn = getFtpConnection()



gulp.task('dist', function () {
	return gulp.src(localFolder + '**/*')
		.pipe(conn.dest(remoteFolder))
})

gulp.task('watch', function() {
	gulp.watch(localFolder + '**/*', gulp.series('dist'))
})

gulp.task('default', gulp.series(
	'watch'
))
