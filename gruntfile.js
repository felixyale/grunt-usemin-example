module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.config.init({
		useminPrepare: {
			html: 'index.html',
			options: {
				dest: 'dist'
			}
		},
		usemin:{
			html:['dist/index.html']
		},
		copy:{
			html: {
				src: './index.html', dest: 'dist/index.html'
			}
		},
		filerev: {
			options: {
				algorithm: 'md5',
				summary: 'map.json',
				length: 8
			},
			images: {
				src: 'dist/assets/img/**/*.{jpg,jpeg,gif,png,webp}'
			},
			js: {
				src: 'dist/assets/js/**'
			},
			css: {
				src: 'dist/assets/css/**'
			}
		},
		clean: {
			release: {
				src: 'dist/'
			}
		},
		filerev_assets: {
			dist: {
				options: {
					dest: 'dist/assets.json',
					cwd: 'public/',
					prettyPrint: true,
					prefix: ''
				}
			}
		}
	});

	grunt.registerTask('default',[
		'clean',
		'copy',
		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'filerev',
		'filerev_assets',
		'usemin'
	]);
}

