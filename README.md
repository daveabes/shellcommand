# Build Status:

##Master Branch:
[![Build Status](https://travis-ci.org/daveabes/shellcommand.svg?branch=master)](https://travis-ci.org/daveabes/shellcommand)

# Overview:

ShellCommand is a child_process wrapper that enables you to execute async shell commands easily.

# How To:

To use ShellCommand, import the ShellCommand class and create an instance.
Then use the executeAsync() function to execute the command.

If an error is encountered, the error text from the command is returned, otherwise
you will get the output of the command.

# Example:

```
// Use await with try catch or promise().then().catch();

import { ShellCommand } from 'shellcommand';
const pwd = new ShellCommand();
result = await pwd.executeAsync(`pwd`);
console.log(result); // Should return the output of pwd
```
