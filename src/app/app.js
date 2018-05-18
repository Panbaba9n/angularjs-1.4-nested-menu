import angular from 'angular';
import ngAnimate from 'angular-animate';

import menu from './menu/menu'

import '../style/app.less';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';
let injected = [
    ngAnimate,
    menu
];

angular.module(MODULE_NAME, injected)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;