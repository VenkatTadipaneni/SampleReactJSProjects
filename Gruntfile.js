module.exports = function (grunt) {
    // CONFIGURE GRUNT
    grunt.initConfig({
        // get the configuration info from package.json file
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration goes here
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/*.js'],
            // configure JSHint
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                },
                esnext: true,
                jshintrc: '.jshintrc',
                ignores: [],
                additionalSuffixes: ['.js']
            }
        },

        uglify: {
            // uglify task configuration
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: 'src/**.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            },

        }

    });

    // Load the plugin that provides the task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsxhint');


    // Default task(s).
    grunt.registerTask('default', ['jshint', 'start']);
    grunt.registerTask('start', '', function () {
        grunt.log.writeln('package', grunt.file.readJSON('package.json').scripts.start);
        //grunt.file.readJSON('package.json').scripts.start
        //'react-scripts start'
    });
};