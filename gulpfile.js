// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var rename = require( 'gulp-rename' );


// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var testPaths = {
	src: './tests/input/input.scss',
	dest: './tests/output'
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
		.pipe( rename( ( path ) => {
				path.basename = 'output';
			} )
		)
		.pipe( gulp.dest( testPaths.dest ) );
} );
