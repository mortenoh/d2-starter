module.exports = function( config ) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'vendor/jquery/jquery.js',
      'vendor/angular/angular.js',
      'vendor/angular-*/angular-*.js',
      'app.js',
      'components/**/*.js',
      'components/common/*.html'
    ],

    preprocessors: {
      'components/common/*.html': 'html2js'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,
    autoWatchBatchDelay: 100,
    usePolling: true,

    browsers: ['PhantomJS'],
    singleRun: false
  });
};
