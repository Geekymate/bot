export default class TestFormController {
  constructor(TitleService) {
    'ngInject';

    TitleService.setTitle({
      newTitle: 'TestForm'
    });

		this.title = 'Hello';
  }
}
