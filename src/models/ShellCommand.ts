import IExecute from './IExecuteAsync';

import { spawn } from 'child_process';

export default class ShellCommand implements IExecute {
  public async executeAsync(command: string): Promise<string> {
    return new Promise<string>((res, rej) => {
      const cp = spawn(`${command}`, [], { shell: true });

      cp.on(`error`, data => {
        this.handleError(rej, data);
      });

      cp.stderr.on(`data`, data => {
        this.handleStdErr(rej, data);
      });

      cp.stdout.on(`data`, data => {
        this.handleStdOut(res, data);
      });

      cp.on(`close`, code => {
        this.handleClose(res, rej, code);
      });
    });
  }

  protected async handleError(rej: any, data: any) {
    rej(`${data}`);
  }

  protected handleStdErr(rej: any, data: any) {
    rej(`${data}`);
  }

  protected handleClose(res: any, rej: any, code: number): void {
    if (code !== 0) {
      rej(`Process closed with an error code of: ${code}`);
    }
    res(`Process closed without error with code of: ${code}`);
  }
  protected handleStdOut(res: any, data: any): void {
    res(`${data}`);
  }
}
