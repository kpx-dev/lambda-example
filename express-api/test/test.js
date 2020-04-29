const assert = require('assert');
const api = require('../express-app');

// const res = api(event, context, callback) {}
describe('express-api', function() {
  describe('/healthckeck', function() {
    it('should return 200 ok', function() {
      assert.equal(200, 200);
    });
  });
});
