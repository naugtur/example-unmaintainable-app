//require some sources to produce a coverage report at all...
require('../src/backend/redis');

describe('app', () => {
  it('should have a single passing test', () => {
    'A'.should.eql('A');
  });
});
