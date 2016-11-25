// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );


// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var testPaths = {
	src: './tests/sass/test.scss',
	dest: './tests/css'
};


// --------------------------------------------------
// DECLARE TASKS
// --------------------------------------------------
/**
 * ...
 */
gulp.task( 'default', function() {
	// DO NO THINGS;
} );


/**
 * ...
 */
gulp.task( 'test', function() {
	return gulp.src( testPaths.src )
		.pipe( sass() )
		.pipe( gulp.dest( testPaths.dest ) );
} );
