export default class TestController {
  constructor(TitleService) {
    'ngInject';

    TitleService.setTitle({
      newTitle: 'Test'
    });

  }
}
