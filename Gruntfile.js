module.exports = function (grunt) {
  grunt.initConfig({
    jekyll: {                             // Task
      options: {                          // Universal options
        bundleExec: true,
        src: '.',
        serve: true,
        watch: true
      },
      main: {}
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['jekyll']);
};