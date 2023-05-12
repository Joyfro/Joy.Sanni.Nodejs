/* Name: Child Process
   Description: Enables the creation and management of child processes. 
   Example: Executing a command in the shell.
*/

const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
});
