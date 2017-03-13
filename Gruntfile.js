module.exports = function (grunt) {
    var reactScripts = grunt.file.readJSON('package.json');
    // CONFIGURE GRUNT
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/*.js'],
            options: {
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
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: 'src/**.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            },
        },
        exec: {
            run: 'npm start',
            build: ' npm run build'
        }
    });

    // Load the plugin that provides the task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsxhint');
    grunt.loadNpmTasks('grunt-exec');

    //tasks.
    grunt.registerTask('default', 'jshint', 'build', 'start');
    grunt.registerTask('build', ['exec:build']);
    grunt.registerTask('start', ['exec:run']);
};
