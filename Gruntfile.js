module.exports = function(grunt) {

  grunt.initConfig({
      protractor: {
          options: {
              //debug: true,
              keepAlive: true
          },
          testTarget: {
              configFile: "tests/web/protractor.conf.js"
          }
      },
      iisexpress: {
          server: {
              options: {
                  killOn: 'mytasks.done',
                  port: 55555,
                  path: 'JustPete.Web'
              }
          }
      },
  });

  grunt.loadNpmTasks('grunt-iisexpress');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('iisexpress-killer', function(){
      grunt.event.emit('mytasks.done');
  });

  grunt.registerTask('test', ['iisexpress', 'protractor', 'iisexpress-killer']);
  grunt.registerTask('default', ['test']);
};