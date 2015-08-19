'use strict';

/* Model classes */
angular.module('projectBeaches')
    .factory('Beach', function () {
        function Exercise(args) {
            this.id = args.id;
            this.title = args.title;
            this.description = args.description;
            this.images = args.images;
            this.rating = args.rating;
            this.latitude = args.latitude;
            this.longitude = args.longitude;
        }
        return Exercise;
    });
