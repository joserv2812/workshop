module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/firebase/lib/firebase-web.js',
      'node_modules/angularfire/dist/angularfire.min.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'app/app.module.js',
      'app/core/core.module.js',
      'app/**/*.module.js',
      'app/app.config.js',
      'app/core/core.constants.js',
      'app/**/*.controller.js',
      'app/**/*.routes.js',
      'app/**/*.service.js',
      'app/**/*.directive.js',
      'app/**/*.filter.js',
      'app/**/*.spec.js'
    ],

    preprocessors: {
      'app/**/!(*test).js': ['coverage'],
      '**/*.html': ['ng-html2js']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
}

