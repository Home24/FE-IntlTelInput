module.exports = function(grunt) {
  var defaultImage = grunt.file.readJSON('src/config/defaultImage.json').defaultImage;

  return {
    retina: {
        src: 'src/img/flags/*@2x.png',
        dest: 'build/img/flags@2x.png',
        destCss: 'src/css/sprite@2x.scss',
        cssTemplate: function() { return ''; },
        padding: 4,
        algorithm: 'left-right',
        algorithmOpts: {
          sort: false
        },
        cssOpts: {
          variableNameTransforms: ['toLowerCase']
        }
    },
    main: {
      src: ['src/img/flags/*.png', 'src/img/flags/default.png', '!<%= sprite.retina.src %>'],
      dest: 'build/img/flags.png',
      cssTemplate: 'grunt/tmpl/sprite-retina-mustache.scss',
      destCss: 'src/css/sprite.scss',
      padding: 2, // this is currently just for chrome, otherwise flags seem to leak into each other
      algorithm: 'left-right',
      algorithmOpts: {
        sort: false
      },
      cssOpts: {
        variableNameTransforms: ['toLowerCase']
      },
      cssVarMap: function (sprite) {
          sprite.standartCountry = defaultImage;
      }
    }
  };
};
