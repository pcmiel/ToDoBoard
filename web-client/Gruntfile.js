module.exports = function (grunt) {
    grunt.file.readJSON('package.json');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

            bower: {
                install: {
                    options: {
                        targetDir: './target'
                    }
                }
            },

            connect: {
                options: {
                    port: 8889,
                    base: ['./']
                },
                local: {}

            },

            watch: {
                bower: {
                    files: ['./bower.json'],
                    tasks: ['bower:install']
                },

                app: {
                    files: ['./view1/**']
                }
            }
        }
    );

    grunt.registerTask('build', [
        'bower:install'
    ]);

    grunt.registerTask('develop', function () {
        //grunt.task.run('connect:local:keepalive');
        grunt.task.run('connect:local', 'watch');
    });
};