'use strict';

const Deal = use('App/Model/Deal');
const attributes = [
  'keyword',
  'maxprice',
  'title',
];


class DealController {

  * index(request, response) {
    const deal = yield Deal.with('user').fetch();

    response.jsonApi('Deal', deal);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const user = yield request.auth.getUser();
    const foreignKeys = {
      user_id: user.id,
    };
    const deal = yield Deal.create(Object.assign({}, input, foreignKeys));
    response.jsonApi('Deal', deal);
  }

  * show(request, response) {
    const id = request.param('id');
    const deal = yield Deal.with('user').where({ id }).firstOrFail();

    response.jsonApi('Deal', deal);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      user_id: request.jsonApi.getRelationId('user'),
    };

    const deal = yield Deal.with('user').where({ id }).firstOrFail();
    deal.fill(Object.assign({}, input, foreignKeys));
    yield deal.save();

    response.jsonApi('Deal', deal);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const deal = yield Deal.query().where({ id }).firstOrFail();
    yield deal.delete();

    response.status(204).send();
  }

}

module.exports = DealController;
