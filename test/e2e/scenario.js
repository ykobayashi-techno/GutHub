/**
 * Created by techno on 15/04/18.
 */
'use strict';

describe('protractorテストのテスト。', function() {
  beforeEach(function() {
    browser.get('/');
  });


  it('ユーザーリストの取得テスト', function() {
    var btn, userList;
    btn = element(by.id('get-users-button'));
    btn.click();

    userList = element.all(by.repeater('item in items'));

    expect(userList.count()).toBe(5);
  });
});
