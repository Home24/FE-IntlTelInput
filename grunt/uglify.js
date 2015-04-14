module.exports = function(grunt) {
  return {
    options: {
      banner: '/*\n' +
        'Home24 International Telephone Input v<%= package.version %>\n' +
        '<%= package.repository.url %>\n' +
        '*/\n'
    },
    dev: {
      options: {
        beautify: true,
        compress: false,
        mangle: false,
        preserveComments: true
      },
      files: {
        'build/js/intlTelInput.js': 'tmp/wrapped.js',
        'build/js/utils.js': 'lib/libphonenumber/build/utils.js'
      }
    },
    prod: {
      files: {
        'tmp/wrapped.min.js': 'tmp/wrapped.js',
        'build/js/utils.min.js': 'lib/libphonenumber/build/utils.js'
      }
    }
  };
};