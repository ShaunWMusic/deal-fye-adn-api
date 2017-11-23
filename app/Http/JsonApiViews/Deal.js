const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Deal extends JsonApiView {
  get attributes() {
    return ['title', 'keyword', 'maxprice'];
  }
  user() {
    return this.belongsTo('App/Http/JsonApiViews/User', {
      included: true,
      excludeRelation: 'deal',
    });
  }
}

module.exports = Deal;
