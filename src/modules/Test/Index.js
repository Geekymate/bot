/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import TestController from './controller/TestCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/test.scss';

/* ========================================================================== */

/**
 * Define test page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular
	.module('Starter.App.Test', [])
	.controller('TestController', TestController)
	.name;
