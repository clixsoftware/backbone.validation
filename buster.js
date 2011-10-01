var config = exports;

config['Browser Tests'] = {
    environment: 'browser',
    sources: ['lib/jquery-1.6.2.js', 'lib/underscore.js', 'lib/backbone.js', 'lib/backbone.modelbinding.js', 'backbone.validation.js'],
    tests: ['tests/*.js']
};