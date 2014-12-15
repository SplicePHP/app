var lib = 'webroot/lib/';
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-composer');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-dev-update');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                //just run 'grunt bower:install'
                options: {
                    targetDir: './webroot/lib',
                    layout: 'byComponent',
                    install: true,
                    update: true,
                    verbose: true,
                    cleanTargetDir: false,
                    cleanBowerDir: true,
                    bowerOptions: {}
                }
            }
        },
        composer: {
            options: {
                usePhp: true,
                composerLocation: 'composer.phar'
            }
        },
        shell: {
            composer: {
                options: {stdout: true, stderr: true},
                command: [
                    'test -f composer.phar || curl -sS https://getcomposer.org/installer | php -d allow_url_fopen=On',
                    'php -d allow_url_fopen=On composer.phar self-update',
                    'php -d allow_url_fopen=On composer.phar update -v -n'
                ].join('&&')
            },
            compile: {
                options: {stdout: true, stderr: true},
                command: [
                    'bin/cake System.build --all true --prefix admin -f 1'
                ].join('&&')
            },
            "update-all": {
                options: {stdout: true, stderr: true},
                command: [
                    'bin/cake System.automation update'
                ].join('&&')
            },
            "update-symlinks": {
                options: {stdout: true, stderr: true},
                command: [
                    'bin/cake System.automation update -s 1'
                ].join('&&')
            }
        },
        hub: {
            all: {
                src: ['plugins/*/Gruntfile.js'],
                tasks: ['update']
            },
            watch: {
                src: ['plugins/*/Gruntfile.js'],
                tasks: ['watch']
            }
        },
        watch: {
            scripts: {
                files: ['config/compile.json'],
                tasks: ['shell:compile'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('watch-all', [
        'hub:watch',
        'watch'
    ]);

    grunt.registerTask('update', [
        'shell:update-all'
    ]);
    
    grunt.registerTask('symlinks', [
        'shell:update-symlinks'
    ]);
};
