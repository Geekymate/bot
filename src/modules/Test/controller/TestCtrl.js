export default class TestController {
  constructor(TitleService) {
    'ngInject';

    TitleService.setTitle({
      newTitle: 'Test'
    });

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

		this.publishTest = () => console.log(this.test);
  }
}
