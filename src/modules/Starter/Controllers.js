/*
 * Javascripts
 * ========================================================================== */

import angular from 'angular';

import Layout  from './Index';
import Home    from '../Home/Index';
import Test    from '../Test/Index';
import Login   from '../Login/Index';

/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Controllers module
 */
export default angular
	.module('Starter.App.controllers', [
  	Layout, Home, Test, Login
	])
	.name;
