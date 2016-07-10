export default class TestController {
	constructor($http, TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'Test'
		});

		this.postStatus = 'creating';

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
				correct_answer: null
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}]
		};

		this.createTest = () => {
			const url = 'http://localhost:9000/api/tests';
			const data = this.test;
			console.log(data);
			return $http.post(url, data).then(res => {
				this.postStatus = 'created';
			}, err => {
				this.postStatus = 'creating';
			});
		}
	}
}
