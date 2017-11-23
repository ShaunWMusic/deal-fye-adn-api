'use strict';

const User = use('App/Model/User');

const Hash = use('Hash');
const attributes = [
  'username',
  'email',
  'password',
];

class UserController {

  get createRules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required',
    };
  }

  get createMessages() {
    return {
      'username.unique': 'That username has already been used by another account',
      'email.unique': 'That email has already been used by another account',
    };
  }

  * index(request, response) {
    if (request.input('current')) {
      return response.jsonApi('User', request.authUser);
    }
    const users = yield User.fetch();

    response.jsonApi('User', users);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);

    yield request.jsonApi.assertValid(input, this.createRules, this.createMessages);

    const user = yield User.create(input);

    response.jsonApi('User', user);
  }

  * show(request, response) {
    const id = request.param('id');
    const user = yield User.where({ id }).firstOrFail();

    response.jsonApi('User', user);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const user = yield User.where({ id }).firstOrFail();
    user.fill(Object.assign({}, input, foreignKeys));
    yield user.save();

    response.jsonApi('User', user);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const user = yield User.query().where({ id }).firstOrFail();
    yield user.delete();

    response.status(204).send();
  }

}

module.exports = UserController;
