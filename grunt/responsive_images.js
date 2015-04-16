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
        src: ['region-flags/png/*.png', 'src/img/' + defaultImage + '.png'],
        filter: function(filepath) {
            var countries = file.availableCountries;

            countries.push(defaultImage);

            return (countries.indexOf(
                filepath
                    .replace("region-flags/png/", "")
                    .replace("src/img/", "")
                    .slice(0, -4)
                    .toLowerCase()) !== -1);
        },
        rename: function(dest, src) {
            var fileName = src.match(/\/([^/]*)$/)[1];
            return dest + fileName;
        },
        dest: 'src/img/flags/@2x/'
      }]
    }
  }
}
