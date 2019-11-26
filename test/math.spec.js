const assert = require('assert');
const { add } = require('../src/math');

describe('Math', () => {
    it('should add with add', () => {
        assert.equal(3, add(2, 1))
    });
});
