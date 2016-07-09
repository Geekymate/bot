/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import LoginController from './controller/LoginCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/login.scss';

/* ========================================================================== */

/**
 * Define test page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular
	.module('Starter.App.Login', [])
	.controller('LoginController', LoginController)
	.name;
