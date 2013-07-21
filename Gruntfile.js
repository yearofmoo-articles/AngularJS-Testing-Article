module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

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
      options: {
        port: 8000,
        base: './app'
      },
      server: {
        options: {
          keepalive: true
        }
      },
      testserver: {}
    },

    karma: {
      unit: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './test/karma-unit.conf.js'
      },
      midway: {
        configFile: './test/karma-midway.conf.js',
        autoWatch: false,
        singleRun: true
      },
      midway_auto: {
        configFile: './test/karma-midway.conf.js'
      },
      e2e: {
        configFile: './test/karma-e2e.conf.js',
        autoWatch: false,
        singleRun: true
      }
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

  grunt.registerTask('test:e2e', ['connect:testserver', 'karma:e2e']);
  grunt.registerTask('test', ['karma:unit', 'karma:midway', 'test:e2e']);

  //installation-related
  grunt.registerTask('install', ['shell:install','shell:font_awesome_fonts']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //development
  grunt.registerTask('dev', ['install','concat','watch']);
  grunt.registerTask('server', ['connect:server']);
};
