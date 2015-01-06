module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourcemap: 'none'
			},
			dist: {
				files: {
					'_docs/assets/css/material-bootstrap.css' : 'assets/material.scss'
				}
			}
		},
		concat: {
			dist: {
				src: '_docs/assets/css/material-bootstrap.css',
				dest: 'dist/material-bootstrap.css'
			}
		},
		cssmin: {
			options: {
				report: 'gzip'
			},
			dist: {
				src: 'dist/material-bootstrap.css',
				dest: 'dist/material-bootstrap.min.css'
			}
		},
		watch: {
			dist: {
				files: '**/*.scss',
				tasks: ['sass:dist', 'concat:dist', 'cssmin:dist']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['watch:dist']);
}
