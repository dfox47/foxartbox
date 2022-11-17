
// npm install -g gulp-cli
// npm install gulp gulp-csso gulp-concat vinyl-ftp gulp-util gulp-rename gulp-sass gulp-uglify --save-dev

const fs              = require('fs')
// const cssMinify       = require('gulp-csso')
// const concat          = require('gulp-concat')
const config          = JSON.parse(fs.readFileSync('../config.json'))
const ftp             = require('vinyl-ftp')
const gulp            = require('gulp')
const gutil           = require('gulp-util')
// const rename          = require('gulp-rename')
// const sass            = require('gulp-sass')
// const uglify          = require('gulp-uglify')

// FTP config
const host            = config.host
const password        = config.password
const port            = config.port
const user            = config.user

const remoteFolder    = '/x.foxartbox.com/public_html/'
const localFolder     = 'dist/'

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

const conn = getFtpConnection()



gulp.task('dist', function () {
	return gulp.src(localFolder + '**/*')
		.pipe(conn.dest(remoteFolder))
})

gulp.task('watch', function() {
	gulp.watch(localFolder + '**/*', gulp.series('dist'))
})

gulp.task('default', gulp.series('watch'))