module.exports = function(grunt) {
  var file = grunt.file.readJSON('src/config/availableCountries.json');
  var defaultImage = grunt.file.readJSON('src/config/defaultImage.json').defaultImage;

  return {
    retina: {
      options: {
        engine: "im",
        sizes: [{
          width: 40,
          height: 30
        }],
        rename: false
      },
      files: [{
        expand: true,
        cwd: "region-flags/png/",
        src: ['*.png'],
        filter: function(filepath) {
            var countries = file.availableCountries;

            countries.push(defaultImage);

            return (countries.indexOf(filepath.replace("region-flags/png/", "").replace(".png", "").toLowerCase()) !== -1);
        },
        dest: 'src/img/flags/@2x/'
      }]
    }
  }
}
