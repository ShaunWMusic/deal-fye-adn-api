'use strict';

const User = use('App/Model/User');
const E = require('node-exceptions');

class SessionController {

  * store(request, response) {
    const { username, password } = request.all();

    try {
      const token = yield request.auth.attempt(username, password);

      response.json({ token });
    } catch (e) {
      // response.unauthorized({ error: e.message });

      response.status(401).json({
        errors: [
          {
            status: 401,
            title: 'User failed to log in.',
          },
        ],
      });
    }
  }
}

module.exports = SessionController;
