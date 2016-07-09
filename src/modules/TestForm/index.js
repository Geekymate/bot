/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import TestFormController from './controller/TestForm';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/testForm.scss';

/* ========================================================================== */

export default angular
	.module('Starter.App.TestForm', [])
	.controller('TestFormController', TestFormController)
	.name;
