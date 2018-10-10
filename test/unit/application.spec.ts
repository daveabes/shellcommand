import * as chai from 'chai';

import Application from '../../src/Application/Application';

describe(``, () => {
  it(`Should return the product of 2 numbers`, () => {
    const sum = Application.sumAlternative(2, 2);
    chai.assert.equal(sum, 4);
  })
})
