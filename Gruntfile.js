var util = require('./test/lib/karma-util.js');
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    shell: {
      install: {
        command: 'node ./node_modules/bower/bin/bower install'
      },
      font_awesome_fonts: {
        command: 'cp -R components/components-font-awesome/font app/font'
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '0.0.0.0',
          base: './app',
          keepalive: true
        }
      }
    },
    test: {
      unit: './test/karma-unit.conf.js',
      midway: './test/karma-midway.conf.js',
      e2e: './test/karma-e2e.conf.js'
    },
    autotest: {
      unit: './test/karma-unit.conf.js',
      midway: './test/karma-midway.conf.js',
      e2e: './test/karma-e2e.conf.js'
    },
    watch: {
      scripts: {
      files: ['app/scripts/**/*.js','app/styles/**/*.css'],
        tasks: ['concat'],
        options: {
          nospawn: true
        },
      },
    },
    concat: {
      styles: {
        dest: './app/assets/app.css',
        src: [
          'app/styles/reset.css',
          'components/components-font-awesome/css/font-awesome.css',
          'components/bootstrap.css/css/bootstrap.css',
          'app/styles/app.css'
        ] 
      },
      scripts: {
        options: {
          separator: ';'
        },
        dest: './app/assets/app.js',
        src: [
          'components/angularjs/index.js',
          'app/scripts/lib/router.js',
          'app/scripts/config/config.js',
          'app/scripts/services/**/*.js',
          'app/scripts/directives/**/*.js',
          'app/scripts/controllers/**/*.js',
          'app/scripts/filters/**/*.js',
          'app/scripts/config/routes.js',
          'app/scripts/app.js',
        ]
      },
    }
  });

  grunt.registerMultiTask('test', 'Run and watch the unit tests with Karma', function() {
    util.startKarma.call(util, this.data, true, this.async());
  });

  grunt.registerMultiTask('autotest', 'Run and watch the unit tests with Karma', function(){
    util.startKarma.call(util, this.data, false, this.async());
  });

  //installation-related
  grunt.registerTask('install', ['shell:install','shell:font_awesome_fonts']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //development
  grunt.registerTask('dev', ['install','concat','watch']);
  grunt.registerTask('server', ['connect:server']);
};
