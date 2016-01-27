/*
 * Common
 * ========================================================================== */

import './common/Routes';

/* ========================================================================== */

/*
 * Modules
 * ========================================================================== */

import Application from './Application';

import './modules/Layout/LayoutCtrl';

/* ========================================================================== */

/*
 * Layout
 * ========================================================================== */

import layout      from '../views/layout.jade';

/* ========================================================================== */


document.getElementById('app-container').innerHTML = layout();

Application.init();
