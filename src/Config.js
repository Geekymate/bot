/**
 * @module Config
 * @see Application
 * @param {Object} stateHelperProvider - Ui-router module for right nesting.
 * @param {Object} $urlRouterProvider - Configures how the application routing.
 * @param {Object} $locationProvider - Configures how the application deep linking paths are stored.
 * @param {Object} $logProvider - Configures how the application logs messages.
 */
const Config = (stateHelperProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
	'ngInject';

	$logProvider.debugEnabled(true);  /** Turn debug mode on/off */
	$locationProvider.html5Mode(true);  /** Turn html5 mode on */
	$urlRouterProvider.otherwise('/home');  /** If current route not in routes then redirect to home */

	/**
	 * Url processing.
	 * @param {Object} $injector - Ability to inject providers.
	 * @param {Object} $location - Current location.
	 */
	$urlRouterProvider.rule(($injector, $location) => {
		const path = $location.path();
		/** If route like as /home/ then /home */
		$location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path).replace();
	});


	stateHelperProvider /** Describe our states */
		.state({
			url: '/',
			name: 'home',
			controller: 'HomeController',
			controllerAs: 'Home',
			template: require('./modules/Home/views/home.jade')()
		})
		.state({
			url: '/test/list',
			name: 'testList',
			controller: 'TestListController',
			controllerAs: 'TestList',
			template: require('./modules/TestList/views/testList.jade')()
		})
		.state({
			url: '/test/form',
			name: 'testForm',
			controller: 'TestFormController',
			controllerAs: 'TestForm',
			template: require('./modules/TestForm/views/testForm.jade')()
		})
		.state({
			url: '/docs',
			name: 'docs',
			controller: 'DocsController',
			controllerAs: 'Docs',
			template: require('./modules/Docs/views/docs.jade')()
		})
		.state({
			url: '/login',
			name: 'login',
			controller: 'LoginController',
			controllerAs: 'Login',
			template: require('./modules/Login/views/login.jade')()
		});
};

/** Export our config */
export default Config;
