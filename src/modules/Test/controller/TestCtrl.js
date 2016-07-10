export default class TestController {
	constructor($http, TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'Test'
		});

		this.postStatus = 'unpublished';

		this.test = {
			title: 'Тест 1',
			subject: 'Математика',
			questions: [{
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: 2
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: 3
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: 1
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: 0
			}]
		};

		this.publishTest = () => {
			const url = 'http://localhost:9000/api/tests';
			const data = this.test;

			return $http.post(url, data).then(res => {
				this.postStatus = 'published';
			}, err => {
				this.postStatus = 'unpublished';
			});
		}
	}
}
