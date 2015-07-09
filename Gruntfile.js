
module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				sourcemap: 'none'
			},
			dist: {
				files: {
					'dist/material-bootstrap.css' : 'src/material.scss'
				}
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

		uglify: {
			options: {
				mangle: true
			},
			dist: {
				files: {
					'dist/material-bootstrap.min.js': [
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
						'bower_components/jquery-validation/dist/jquery.validate.js',
						'bower_components/jquery-validation/dist/additional-methods.js',
						'bower_components/velocity/velocity.min.js',
						'bower_components/velocity/velocity.ui.min.js',
						'bower_components/autosize/dist/autosize.js',
						'bower_components/slick.js/slick/slick.js',
						'bower_components/prism/prism.js',
						'bower_components/prism/components/prism-php.js',
						'src/javascripts/ramjet.js',
						'src/javascripts/button-ripple.js',
						'src/javascripts/material-form.js',
						'src/javascripts/character-count.js',
						'src/javascripts/app-bar.js',
						'src/javascripts/navigation-drawer.js',
						'src/javascripts/smooth-scrolling.js',
						'src/javascripts/empty-state.js',
						'src/javascripts/carousel.js',
						'src/javascripts/_init.js'
					]
				}
			}
		},

		copy: {
			docs: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*'],
						dest: 'docs/assets/fonts/bootstrap',
						filter: 'isFile'
					}
				]
			},
			css: {
				files: [
					{
						src: ['dist/material-bootstrap.min.css'],
						dest: 'docs/assets/css/material-bootstrap.min.css',
						flatten: true,
						filter: 'isFile'
					}
				]
			},
			js: {
				files: [
					{
						src: ['dist/material-bootstrap.min.js'],
						dest: 'docs/assets/js/material-bootstrap.min.js',
						flatten: true,
						filter: 'isFile'
					}
				]
			},
			images: {
				files: [
					{
						cwd: 'docs/assets/images/src/',
						src: '**',
						expand: true,
						dest: 'docs/assets/images/prod/'
					}
				]
			},
			fonts: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['src/fonts/material/*'],
						dest: 'dist/fonts/material',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: ['bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*'],
						dest: 'dist/fonts/bootstrap',
						filter: 'isFile'
					}
				],
			}
		},

		imagemin: {
			png: {
				options: {
					optimizationLevel: 2
				},
				files: [{
					expand: true,
					cwd: 'docs/assets/images/prod',
					src: ['**/*.png'],
					dest: 'docs/assets/images/prod'
				}]
			}
		},

		jekyll: {
			server: {
				options: {
					config: 'docs/_config.yml',
					src: 'docs',
					dest: 'docs/_site',
					serve: true,
					watch: true
				},
			}
		},

		watch: {
			css: {
				files: ['src/**/*.scss'],
				tasks: ['sass:dist', 'cssmin:dist', 'copy:css', 'copy:fonts']
			},
			js: {
				files: ['src/**/*.js'],
				tasks: ['uglify:dist', 'copy:docs', 'copy:js']
			},
			png: {
				files: ['docs/assets/images/src/**/*.png'],
				tasks: ['copy:images'/* , 'imagemin:png' */]
			},
			sketch: {
				files: ['docs/assets/images/src/**/*.sketch'],
				tasks: ['sketch_export'/* , 'imagemin:png' */]
			}
		},

		concurrent: {
			watch: {
				tasks: ['watch:css', 'watch:js', /* 'watch:png',  */'watch:sketch', 'jekyll:server'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		sketch_export: {
			options: {
				type: 'artboards',
				items: [
					'app-bar',
					'layout',
					'layout-with-drawer',
					'layout-with-drawer-fixed',
					'layout-with-modal',
					'z-index',
					'status-bar',
					'app-bar-small',
					'app-bar-translucent',
					'app-bar-small-with-tabs',
					'app-bar-small-with-fab',
					'app-bar-with-action-bar',
					'app-bar-with-active-search',
					'app-bar-extended-with-tabs',
					'app-bar-extended',
					'tool-bar',
					'tool-bar-inline'
				],
				overwrite: true,
				scales: [
					1.0
				],
				formats: [
					'svg'
				]
			},
			files: {
				src: 'docs/assets/images/src/layout/structure.sketch',
				dest: 'docs/assets/images/prod/layout/structure'
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-sketch');

	grunt.registerTask('default', ['concurrent:watch']);

}
