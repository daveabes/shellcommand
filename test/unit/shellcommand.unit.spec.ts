import { assert } from 'chai';

import ShellCommand from '../../src/models/ShellCommand';

describe(`ShellCommand Unit Test`, () => {
  it(`Should succeed executing a shell command`, async () => {
    const ls = new ShellCommand();
    const result = await ls.executeAsync(`ls`);
    assert(result !== null);
  });

  it(`Should fail executing a shell command`, async () => {
    try {
      const badCommand = new ShellCommand();
      const result = await badCommand.executeAsync(`lss`);
    } catch (error) {
      assert(error !== null);
    }
  });
});
