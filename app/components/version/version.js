'use strict';

angular.module('projectBeaches.version', [
  'projectBeaches.version.interpolate-filter',
  'projectBeaches.version.version-directive'
])

.value('version', '0.1');
