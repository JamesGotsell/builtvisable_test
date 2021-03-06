
module.exports = function(grunt) {
    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    './public/stylesheets/css/style.css': ['./public/stylesheets/stylus/main.styl']
                }
            }
        },
        watch: {
            // Watch stylus files in "styl" directory
            stylus: {
                files: ['./public/stylesheets/stylus/*.styl'],
                tasks: ['stylus']
            }
        }
    });

    // Load the plugin that provides the "watch" & "stylus" tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['watch' ]);
}