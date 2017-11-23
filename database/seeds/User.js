'use strict';

const User = use('App/Model/User');

class UserSeeder {

  * run() {
    yield User.create({
      username: 'shaun',
      password: '123',
      email: 'shaun@example.com',
    });
  }

}

module.exports = UserSeeder;
